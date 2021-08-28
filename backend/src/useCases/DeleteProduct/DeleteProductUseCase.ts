import { IProductsRepository } from "../../repositories/IProductsRepository";

export class DeleteProductUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute(id: string): Promise<boolean> {
    return await this.productRepository.delete(id);
  }
}
