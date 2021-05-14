import Curso from '../entities/curso.entity';

export default class AlunoModel{
    id: number;
    nome: string;
    email:string;
    idade: string;
    formacao: string;
    tipo: number;
    cursos?: Partial<Curso>;
  
    constructor() {
     
    }
}