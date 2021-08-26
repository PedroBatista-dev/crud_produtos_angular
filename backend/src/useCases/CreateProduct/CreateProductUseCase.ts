import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { ICreateProductRequestDTO } from "./CreateProductDTO";

export class CreateProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}
  async execute(data: ICreateProductRequestDTO): Promise<Product | undefined> {
    const product = new Product(data);
    const productSave = await this.productsRepository.save(product);
    return productSave;
  }
}
