import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { GetByIdProductController } from "./GetByIdProductController";
import { GetByIdProductUseCase } from "./GetByIdProductUseCase";

const productsRepository = new ProductsRepository();

const getByIdProductUseCase = new GetByIdProductUseCase(productsRepository);

const getByIdProductController = new GetByIdProductController(
  getByIdProductUseCase
);

export { getByIdProductUseCase, getByIdProductController };
