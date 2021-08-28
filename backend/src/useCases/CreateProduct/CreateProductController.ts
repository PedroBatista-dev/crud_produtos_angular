import { Request, Response } from "express";
import { Product } from "../../entities/Product";
import { ResponseHTTP, responsePadrao } from "../../reponseHttp";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    const newProduct = new Product(request.body);
    const dados = new ResponseHTTP();
    try {
      const productCreate = await this.createProductUseCase.execute(newProduct);
      if (productCreate) {
        dados.status = true;
        dados.statusCode = 201;
        dados.data = productCreate;
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
