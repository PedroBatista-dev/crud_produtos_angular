import { Request, Response } from "express";
import { Product } from "../../entities/Product";
import { ResponseHTTP, responsePadrao } from "../../reponseHttp";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}

  async handler(request: Request, response: Response): Promise<void> {
    const product = new Product(request.body, +request.params.id);
    const dados = new ResponseHTTP();
    try {
      const productUpdate = await this.updateProductUseCase.execute(product);
      if (productUpdate) {
        dados.status = true;
        dados.statusCode = 200;
        dados.data = productUpdate;
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
