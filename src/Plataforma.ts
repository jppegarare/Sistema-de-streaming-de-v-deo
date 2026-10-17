import { Catalogo } from "./conteudo/Catalogo";
import { Conteudo } from "./conteudo/Conteudo";
import { ConfigStreaming } from "./config/ConfigStreaming";

export class Plataforma {
    private conteudos: Conteudo[] = [];

    constructor(private catalogo: Catalogo) {}

    adicionarConteudo(titulo: string, duracaoMinutos: number): void {
        const conteudo = this.catalogo.criarConteudo(titulo, duracaoMinutos);
        this.conteudos.push(conteudo);
    }

    reproduzirTodos(): void {
        const config = ConfigStreaming.obterInstancia();
        console.log(`[${config.obterNomePlataforma()} | ${config.obterQualidadeMaxima()} | ${config.obterRegiao()}]`);
        for (const conteudo of this.conteudos) {
            console.log(conteudo.reproduzir());
        }
    }
}

