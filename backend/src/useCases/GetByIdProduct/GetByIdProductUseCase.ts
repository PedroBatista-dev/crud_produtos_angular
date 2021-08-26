import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

export class GetByIdProductUseCase {
  constructor(private ProductRepository: IProductsRepository) {}

  async execute(id: string): Promise<Product> {
    const product = await this.ProductRepository.getById(id);
    return product;
  }
}
