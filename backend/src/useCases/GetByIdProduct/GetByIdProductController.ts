import { Request, Response } from "express";
import { ResponseHTTP, responsePadrao } from "../../reponseHttp";
import { GetByIdProductUseCase } from "./GetByIdProductUseCase";

export class GetByIdProductController {
  constructor(private getByIdProductUseCase: GetByIdProductUseCase) {}

  async handler(request: Request, response: Response): Promise<void> {
    const id = request.params.id;
    const dados = new ResponseHTTP();
    try {
      const product = await this.getByIdProductUseCase.execute(id);
      dados.status = true;
      dados.statusCode = 200;
      dados.data = product[0];
    } catch (err) {
      dados.status = false;
      dados.statusCode = 400;
      dados.erros = err;
    } finally {
      responsePadrao(dados, response);
    }
  }
}
