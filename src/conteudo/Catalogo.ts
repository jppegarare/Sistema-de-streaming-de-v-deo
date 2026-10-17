import { Conteudo } from "./Conteudo";

export abstract class Catalogo {
    abstract criarConteudo(titulo: string, duracaoMinutos: number): Conteudo;
}