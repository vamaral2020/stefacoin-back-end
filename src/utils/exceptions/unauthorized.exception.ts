import Exception from './exception';

export default class UnauthorizedException extends Exception {
  // #pegabandeira
  constructor(message: string, status: number = 401) {
    super(message, status);
  }
}


//para validar o email devara fazer uma consulta chamando o listar, pasando o email na consulta