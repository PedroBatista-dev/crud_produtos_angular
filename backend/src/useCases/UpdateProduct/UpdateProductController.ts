import { Request, Response } from "express";
import { ResponseHTTP, responsePadrao } from "../../Reponse.http";
import { Product } from "../../entities/Product";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}

  async handler(request: Request, response: Response): Promise<void> {
    const updateProduct = new Product(request.body, request.params.id);
    const dados = new ResponseHTTP();
    try {
      const product = await this.updateProductUseCase.execute(updateProduct);
      if (product) {
        dados.status = true;
        dados.statusCode = 200;
        dados.data = product;
      }
    } catch (err) {
      dados.status = false;
      dados.statusCode = 400;
      dados.erros = err;
    } finally {
      responsePadrao(dados, response);
    }
  }
}
