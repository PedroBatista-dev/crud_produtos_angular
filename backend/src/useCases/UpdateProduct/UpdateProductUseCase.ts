import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { IUpdateProductRequestDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute(product: IUpdateProductRequestDTO): Promise<void> {
    const updateProduct = new Product(product);
    await this.productRepository.update(updateProduct);
  }
}
