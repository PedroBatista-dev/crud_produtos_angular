import { Request, Response } from "express";
import { ResponseHTTP, responsePadrao } from "../../Reponse.http";
import { GetProductUseCase } from "./GetProductUseCase";

export class GetProductController {
  constructor(private getProductUseCase: GetProductUseCase) {}

  async handler(request: Request, response: Response): Promise<void> {
    try {
      const products = await this.getProductUseCase.execute();
      response.send(products);
    } catch (err) {
      response.send(err);
    }
  }
}
