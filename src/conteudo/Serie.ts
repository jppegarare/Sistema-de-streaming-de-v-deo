import { Conteudo } from "./Conteudo";

export class Serie implements Conteudo {
    constructor(public titulo: string, public duracaoMinutos: number) {}

    reproduzir(): string {
        return `Reproduzindo a série "${this.titulo}" (episódio de ${this.duracaoMinutos} min)`;
    }
}