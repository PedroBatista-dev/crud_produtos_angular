import { Response } from 'express';

class ResponseHTTP {
    status: boolean = false;
    statusCode: number = 200;
    erros: any;
    data: any;
    constructor() {}
}

function responsePadrao(dados: ResponseHTTP, response: Response) {
    if (dados.erros) {
        if (!Array.isArray(dados.erros)) {
            dados.erros = [dados.erros];
        }
    }
    response.status(dados.statusCode).send(dados);
}

export {
    ResponseHTTP,
    responsePadrao
}