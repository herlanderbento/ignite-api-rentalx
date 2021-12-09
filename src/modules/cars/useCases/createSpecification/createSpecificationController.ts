import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCases } from "./createSpecificationUseCases";

class CreateSpecificationController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createSpecificationUseCases = container.resolve(
      CreateSpecificationUseCases
    );
    createSpecificationUseCases.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
