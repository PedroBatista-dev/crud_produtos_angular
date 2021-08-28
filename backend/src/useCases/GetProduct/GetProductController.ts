import { Request, Response } from "express";
import { ResponseHTTP, responsePadrao } from "../../reponseHttp";
import { GetProductUseCase } from "./GetProductUseCase";

export class GetProductController {
  constructor(private getProductUseCase: GetProductUseCase) {}

  async handler(request: Request, response: Response): Promise<void> {
    const name = request.query.name.toString();
    const dados = new ResponseHTTP();
    try {
      const products = await this.getProductUseCase.execute(name);
      dados.status = true;
      dados.statusCode = 200;
      dados.data = products;
    } catch (err) {
      dados.status = false;
      dados.statusCode = 400;
      dados.erros = err;
    } finally {
      responsePadrao(dados, response);
    }
  }
}
