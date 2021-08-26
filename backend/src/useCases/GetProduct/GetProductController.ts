import { Request, Response } from "express";
import { ResponseHTTP, responsePadrao } from "../../Reponse.http";
import { GetProductUseCase } from "./GetProductUseCase";

export class GetProductController {
  constructor(private getProductUseCase: GetProductUseCase) {}

  async handler(request: Request, response: Response): Promise<void> {
    const dados = new ResponseHTTP();
    try {
      const cargos = await this.getProductUseCase.execute();
      dados.status = true;
      dados.statusCode = 200;
      dados.data = cargos;
    } catch (err) {
      dados.status = false;
      dados.statusCode = 400;
      dados.erros = err;
    } finally {
      responsePadrao(dados, response);
    }
  }
}
