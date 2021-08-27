import { IProductsRepository } from "../../repositories/IProductsRepository";

export class DeleteProductUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
