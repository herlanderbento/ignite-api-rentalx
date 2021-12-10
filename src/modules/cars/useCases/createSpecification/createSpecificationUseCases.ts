import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCases {
  constructor(
    @inject("SpecificationsRepository")
    private specification: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specification = await this.specification.findByName(name);

    if (specification) {
      throw new Error("Specification already exists.");
    }

    this.specification.execute({ name, description });
  }
}

export { CreateSpecificationUseCases };
