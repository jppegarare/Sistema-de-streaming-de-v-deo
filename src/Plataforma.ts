import { Catalogo } from "./conteudo/Catalogo";
import { Conteudo } from "./conteudo/Conteudo";

export class Plataforma {
    private conteudos: Conteudo[] = [];

    constructor(private catalogo: Catalogo) {}

    adicionarConteudo(titulo: string, duracaoMinutos: number): void {
        const conteudo = this.catalogo.criarConteudo(titulo, duracaoMinutos);
        this.conteudos.push(conteudo);
    }

    reproduzirTodos(): void {
        for (const conteudo of this.conteudos) {
            console.log(conteudo.reproduzir());
        }
    }
}