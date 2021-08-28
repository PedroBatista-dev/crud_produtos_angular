import { Response, Request } from "express";
import { ResponseHTTP, responsePadrao } from "../../reponseHttp";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) {}

  async handler(request: Request, response: Response): Promise<void> {
    const id = request.params.id;
    const dados = new ResponseHTTP();
    try {
      const retorno = await this.deleteProductUseCase.execute(id);
      if (retorno) {
        dados.status = true;
        dados.statusCode = 200;
        dados.data = {};
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
