import { Router } from "express";

import multer from "multer";
import uploadConfig from "@config/upload";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvaliableCars/ListAvailableCarsController";
import { CreateCarSpecificationsController } from "@modules/cars/useCases/createCarSpecifications/CreateCarSpecificationsController";
import { UploadCarImageController } from "@modules/cars/useCases/uploadCarImage/UploadCarImageController";

const carsRoutes = Router();

const upload = multer(uploadConfig.upload("./uploads/cars"));

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationsController =
  new CreateCarSpecificationsController();
const uploadCarImageController = new UploadCarImageController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationsController.handle
);

carsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarImageController.handle
);

export { carsRoutes };
