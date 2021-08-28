import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { IUpdateProductRequestDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute(product: IUpdateProductRequestDTO): Promise<Product> {
    const updateProduct = new Product(product);
    return await this.productRepository.update(updateProduct);
  }
}
