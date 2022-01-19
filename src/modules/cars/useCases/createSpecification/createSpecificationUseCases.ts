import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";

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
      throw new AppError("Specification already exists.");
    }

    this.specification.create({ name, description });
  }
}

export { CreateSpecificationUseCases };
