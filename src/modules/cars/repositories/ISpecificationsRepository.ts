import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  execute({ name, description }: ICreateSpecificationDTO): void;
  list(): Specification[];
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
