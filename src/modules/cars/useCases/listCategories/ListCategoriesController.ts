import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCases } from "./ListCategoriesUseCases";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCases = container.resolve(ListCategoriesUseCases);

    const list = await listCategoriesUseCases.execute();

    const all = Object.assign([...list, { total: list.length }]);

    return response.json(all);
  }
}

export { ListCategoriesController };
