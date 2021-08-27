import { Request, Response } from "express";
import { Product } from "../../entities/Product";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}

  async handler(request: Request, response: Response): Promise<void> {
    const updateProduct = new Product(request.body, +request.params.id);
    try {
      await this.updateProductUseCase.execute(updateProduct);
      response.status(200).send(updateProduct);
    } catch (err) {
      response.status(400).send(err);
    }
  }
}
