import Professor from '../entities/professor.entity';
import ProfessorModel from '../models/professor.model';
import { FilterQuery } from '../utils/database/database';
import { Tables } from '../utils/tables.enum';
import { TipoUsuario } from '../utils/tipo-usuario.enum';
import { Validador } from '../utils/utils';
import Repository from './repository';

class ProfessorRepository extends Repository<Professor> {
  constructor() {
    super(Tables.USUARIO);
  }

  async incluir(professor: Professor) {
    professor.senha = Validador.criptografarSenha(professor.senha);
    professor.tipo = TipoUsuario.PROFESSOR;
    return super.incluir(professor);
  }

  async alterar(filtro: FilterQuery<Professor>, professor: Professor) {
    if (professor.senha) {
      professor.senha = Validador.criptografarSenha(professor.senha);
    }
    return super.alterar(filtro, professor);
  }

  /*async listar(filtro: FilterQuery<Professor> = {}): Promise<Professor[]> {
      
    return  super.listar(filtro);
  }*/

  
}

export default new ProfessorRepository();


