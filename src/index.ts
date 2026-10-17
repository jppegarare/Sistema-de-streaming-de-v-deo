import { Plataforma } from "./Plataforma";
import { CatalogoFilmes } from "./conteudo/CatalogoFilmes";
import { CatalogoSeries } from "./conteudo/CatalogoSeries";
import { ConfigStreaming } from "./config/ConfigStreaming";

const plataformaDeFilmes = new Plataforma(new CatalogoFilmes());
plataformaDeFilmes.adicionarConteudo("Homem-Aranha: Um Novo Dia", 130);
plataformaDeFilmes.reproduzirTodos();

const plataformaDeSeries = new Plataforma(new CatalogoSeries());
plataformaDeSeries.adicionarConteudo("Loki", 50);
plataformaDeSeries.reproduzirTodos();

const config1 = ConfigStreaming.obterInstancia();
const config2 = ConfigStreaming.obterInstancia();
console.log(config1 === config2);