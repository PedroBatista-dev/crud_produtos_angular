import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { DeleteProductController } from "./DeleteProductController";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

const productsRepository = new ProductsRepository();

const deleteProductUseCase = new DeleteProductUseCase(productsRepository);

const deleteProductController = new DeleteProductController(
  deleteProductUseCase
);

export { deleteProductUseCase, deleteProductController };
