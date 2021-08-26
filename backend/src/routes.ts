import { Router } from "express";
import { createProductController } from "./useCases/CreateProduct";
import { updateProductController } from "./useCases/UpdateProduct";
import { getProductController } from "./useCases/GetProduct";
import { deleteProductController } from "./useCases/DeleteProduct";
import { getByIdProductController } from "./useCases/GetByIdProduct";

const router = Router();

router.post("/products", (request, response) => {
  return createProductController.handle(request, response);
});

router.put("/products/:id", (request, response) => {
  return updateProductController.handler(request, response);
});

router.get("/products/:id", (request, response) => {
  return getByIdProductController.handler(request, response);
});

router.get("/products", (request, response) => {
  return getProductController.handler(request, response);
});

router.delete("/products/:id", (request, response) => {
  return deleteProductController.handler(request, response);
});

export { router };
