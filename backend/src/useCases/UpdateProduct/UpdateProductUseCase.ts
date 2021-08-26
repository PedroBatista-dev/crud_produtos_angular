import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { IUpdateProductRequestDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute(
    product: IUpdateProductRequestDTO
  ): Promise<Product | undefined> {
    const updateProduct = await this.productRepository.update(product);
    return updateProduct;
  }
}
