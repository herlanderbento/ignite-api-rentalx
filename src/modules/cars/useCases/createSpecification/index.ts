import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCases } from "./createSpecificationUseCases";

const specificationRepository = SpecificationRepository.getInstance();

const createSpecificationUseCases = new CreateSpecificationUseCases(
  specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCases
);

export { createSpecificationController };
