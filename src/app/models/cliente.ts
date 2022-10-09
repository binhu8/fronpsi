import { Endereco } from "./endereco";

export interface Cliente {
    nome: string;
    cpf: string;
    dataNascimento: string;
    telefone: string;
    contatoEmergencia: string;
    email: string;
    endereco: Endereco;
    crp: String;
}
