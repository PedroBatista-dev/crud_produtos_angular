import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const productsRepository = new ProductsRepository();

const createProductUseCase = new CreateProductUseCase(productsRepository);

const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductUseCase, createProductController };
