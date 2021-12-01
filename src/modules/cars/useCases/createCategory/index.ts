import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCases } from "./CreateCategoryUseCases";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCases = new CreateCategoryUseCases(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCases
);

export { createCategoryController };
