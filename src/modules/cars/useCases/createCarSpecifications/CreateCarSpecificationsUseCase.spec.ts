import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationsUseCase } from "./CreateCarSpecificationsUseCase";

let createCarSpecificationsUseCase: CreateCarSpecificationsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createCarSpecificationsUseCase = new CreateCarSpecificationsUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it("should not be able to add a new specification to an now-existent car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specification_id = ["54321"];

      await createCarSpecificationsUseCase.execute({
        car_id,
        specification_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should  be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name car",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    const specification = await specificationsRepositoryInMemory.create({
      name: "test",
      description: "test",
    });

    const specification_id = [specification.id];

    const specificationCars = await createCarSpecificationsUseCase.execute({
      car_id: car.id,
      specification_id,
    });

    expect(specificationCars).toHaveProperty("specifications");
    expect(specificationCars.specifications.length).toBe(1);
  });
});
