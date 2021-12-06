import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCases } from "./importCategoryUseCases";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCases = new ImportCategoryUseCases(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCases
);

export { importCategoryController };
