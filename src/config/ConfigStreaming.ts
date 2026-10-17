export class ConfigStreaming {
    private static instancia: ConfigStreaming;
    private nomePlataforma: string;
    private qualidadeMaxima: string;
    private regiao: string;

    private constructor() {
        this.nomePlataforma = "StreamTADS";
        this.qualidadeMaxima = "1080p";
        this.regiao = "BR";
    }

    static obterInstancia(): ConfigStreaming {
        if (!ConfigStreaming.instancia) {
            ConfigStreaming.instancia = new ConfigStreaming();
        }
        return ConfigStreaming.instancia;
    }

    obterNomePlataforma(): string {
        return this.nomePlataforma;
    }

    obterQualidadeMaxima(): string {
        return this.qualidadeMaxima;
    }

    obterRegiao(): string {
        return this.regiao;
    }
}