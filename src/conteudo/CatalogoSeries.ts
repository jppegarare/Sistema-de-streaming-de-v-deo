import { Catalogo } from "./Catalogo";
import { Conteudo } from "./Conteudo";
import { Serie } from "./Serie";

export class CatalogoSeries extends Catalogo {
    criarConteudo(titulo: string, duracaoMinutos: number): Conteudo {
        return new Serie(titulo, duracaoMinutos);
    }
}