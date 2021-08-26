import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

export class GetProductUseCase {
  constructor(private ProductRepository: IProductsRepository) {}

  async execute(): Promise<Product[]> {
    const Products = await this.ProductRepository.get();
    return Products;
  }
}
