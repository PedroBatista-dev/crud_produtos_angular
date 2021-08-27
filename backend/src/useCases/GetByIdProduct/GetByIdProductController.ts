import { Request, Response } from "express";
import { GetByIdProductUseCase } from "./GetByIdProductUseCase";

export class GetByIdProductController {
  constructor(private getByIdProductUseCase: GetByIdProductUseCase) {}

  async handler(request: Request, response: Response): Promise<void> {
    const id = request.params.id;
    try {
      const product = await this.getByIdProductUseCase.execute(id);
      response.status(200).send(product[0]);
    } catch (err) {
      response.status(400).send(err);
    }
  }
}
