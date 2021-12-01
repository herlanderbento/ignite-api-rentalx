import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCases {
  constructor(private specification: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specification = this.specification.findByName(name);

    if (specification) {
      throw new Error("Specification already exists.");
    }

    this.specification.execute({ name, description });
  }
}

export { CreateSpecificationUseCases };
