import { Response, Request } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) {}

  async handler(request: Request, response: Response): Promise<void> {
    const id = request.params.id;
    try {
      await this.deleteProductUseCase.execute(id);
      response.status(200).send({});
    } catch (err) {
      response.status(400).send(err);
    }
  }
}
