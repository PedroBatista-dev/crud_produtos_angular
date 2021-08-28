import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

export class GetProductUseCase {
  constructor(private ProductRepository: IProductsRepository) {}

  async execute(name: string): Promise<Product[]> {
    const Products = await this.ProductRepository.get(name);
    return Products;
  }
}
