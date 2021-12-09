import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }

  execute({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specification.push(specification);
  }

  list(): Specification[] {
    return this.specification;
  }

  findByName(name: string): Specification {
    return this.specification.find(
      (specification) => specification.name === name
    );
  }
}

export { SpecificationsRepository };
