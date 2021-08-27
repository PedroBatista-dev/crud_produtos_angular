import { Request, Response } from "express";
import { Product } from "../../entities/Product";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    const newProduct = new Product(request.body);

    try {
      await this.createProductUseCase.execute(newProduct);
      response.status(200).send(newProduct);
    } catch (err) {
      response.status(400).send(err);
    }
  }
}
