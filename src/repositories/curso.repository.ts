import Curso from '../entities/curso.entity';
import { FilterQuery } from '../utils/database/database';
import { Tables } from '../utils/tables.enum';
import Repository from './repository';

class CursoRepository extends Repository<Curso> {
  constructor() {
    super(Tables.CURSO);
  }

  async incluir(curso: Curso){
    return super.incluir(curso)
  }

  async alterar(filtro: FilterQuery<Curso>, curso: Curso){
    return super.alterar(filtro, curso)
  }
  async listar(filtro: FilterQuery<Curso>): Promise<Curso[]>{
    return super.listar(filtro)
  }
}

export default new CursoRepository();
