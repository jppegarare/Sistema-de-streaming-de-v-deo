import { Catalogo } from "./Catalogo";
import { Conteudo } from "./Conteudo";
import { Filme } from "./Filme";

export class CatalogoDeFilmes extends Catalogo {
    criarConteudo(titulo: string, duracaoMinutos: number): Conteudo {
        return new Filme(titulo, duracaoMinutos);
    }
}