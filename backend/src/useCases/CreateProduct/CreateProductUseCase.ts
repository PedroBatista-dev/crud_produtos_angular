import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { ICreateProductRequestDTO } from "./CreateProductDTO";

export class CreateProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}
  async execute(data: ICreateProductRequestDTO): Promise<Product> {
    const product = new Product(data);
    return await this.productsRepository.save(product);
  }
}
