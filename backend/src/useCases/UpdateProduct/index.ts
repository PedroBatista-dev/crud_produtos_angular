import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

const productsRepository = new ProductsRepository();

const updateProductUseCase = new UpdateProductUseCase(productsRepository);

const updateProductController = new UpdateProductController(
  updateProductUseCase
);

export { updateProductUseCase, updateProductController };
