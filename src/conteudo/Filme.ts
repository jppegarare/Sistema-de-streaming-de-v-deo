import { Conteudo } from "./Conteudo";

export class Filme implements Conteudo {
    constructor(public titulo: string, public duracaoMinutos: number) {}

    reproduzir(): string {
        return `Reproduzindo o filme "${this.titulo}" (${this.duracaoMinutos} min)`;
    }
}