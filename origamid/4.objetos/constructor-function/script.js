const carro = {
  marca: "marca",
  preco: "0",
};

function Carro(novaMarca, novoPreco) {
  this.marca = novaMarca;
  this.preco = novoPreco;
}

honda = new Carro("Honda", 300000);
// honda.marca = "Honda";
// honda.preco = 300000;

function Carro2(novaMarca, primeiroPreco) {
  const taxa = 1.2;
  const precoFinal = taxa * primeiroPreco;
  this.marca = novaMarca;
  this.preco = precoFinal;
}

fiat = new Carro2("fiat", 500000);
