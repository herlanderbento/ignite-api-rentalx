import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specification: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specification = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
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

export { SpecificationRepository };
