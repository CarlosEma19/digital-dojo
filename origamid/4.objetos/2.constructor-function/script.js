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

function Dom(selector) {
  this.element = function () {
    return document.querySelector(selector);
  };
  this.ativar = function () {
    this.element().classList.add("ativar");
  };
}

const li = new Dom("li");
const ul = new Dom("ul");

function Pessoa(seuNome, suaIdade) {
  const nome = seuNome;
  const idade = suaIdade;
  this.nome = seuNome;
  this.idade = suaIdade;
  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

const cadu = new Pessoa("Cadu", 21);
cadu.andar();

const andre = new Pessoa("Andre", 28);
cadu.andar();

const pessoa3 = new Pessoa("terceiro", 30);
cadu.andar();
