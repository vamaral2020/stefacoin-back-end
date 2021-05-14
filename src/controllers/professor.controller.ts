import Professor from '../entities/professor.entity';
import Usuario from '../entities/usuario.entity';
import ProfessorModel from '../models/professor.model';
import ProfessorRepository from '../repositories/professor.repository';
import { FilterQuery } from '../utils/database/database';
import Mensagem from '../utils/mensagem';
import { Validador } from '../utils/utils';

export default class ProfessorController {
  async obterPorId(id: number): Promise<Professor> {
    Validador.validarParametros([{ id }]);

    const usuario = await ProfessorRepository.obterPorId(id);

    return usuario;
  }

  async obter(filtro: ProfessorModel) {
    const {nome, email} = filtro; 

   const professor = await ProfessorRepository.obter({});
    return {
      professor:{
      nome: professor.nome,
      email: professor.email,
      },
    }
 
  }


  //omitir campos senhas
  async listar(filtro: FilterQuery<Professor> ={}): Promise<Professor[]>{
      

    const listAll= await  ProfessorRepository.listar(filtro);
    const professor = listAll.filter((listAll)=> listAll.tipo==1)


     return professor;
   
    }

  // #pegabandeira
  async incluir(professor: Professor) {

    const { nome, email, senha } = professor;

    Validador.validarParametros([{ nome }, { email }, { senha }]);

    professor.tipo = 1;

      const id = await ProfessorRepository.incluir(professor);
  
      return new Mensagem('Professor incluido com sucesso!', {
        id,
      });
      
}


  async alterar(id: number, professor: Professor) {
    const { nome, email, senha } = professor;
    Validador.validarParametros([{ id }, { nome }, { email }, { senha }]);
    await ProfessorRepository.alterar({ id }, professor);
    return new Mensagem('Professor alterado com sucesso!', {
      id,
    });
  }

  async excluir(id: number) {
    Validador.validarParametros([{ id }]);

    await ProfessorRepository.excluir({ id });

    return new Mensagem('Professor excluido com sucesso!', {
      id,
    });
  }
}
