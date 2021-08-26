import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { GetProductController } from "./GetProductController";
import { GetProductUseCase } from "./GetProductUseCase";

const productsRepository = new ProductsRepository();

const getProductUseCase = new GetProductUseCase(productsRepository);

const getProductController = new GetProductController(getProductUseCase);

export { getProductUseCase, getProductController };
