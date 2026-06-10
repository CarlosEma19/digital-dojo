//Objeto é uma coleção de propriedades, onde cada propriedade é uma associação entre uma chave e um valor.
var pessoa = {
  nome: "Kadu",
  idade: 21,
  profissao: "Desenvolvedor",
  cidade: "São Paulo",
  estado: "SP",
  pais: "Brasil",
};

console.log(pessoa.nome);
pessoa.profissao;

console.log(`=========================`);
//Metodos é uma função dentro de um objeto
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(`=========================`);

Math.PI;
Math.random();
console.table(quadrado);

console.log(`==========================`);

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};
var bg = menu.backgroundColor;

menu.color = "#00f";

console.log("==========================");

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var eu = {
  nome: "Kadu",
  sobrenome: "Ema",
  idade: 21,
  profissao: "Desenvolvedor",
  nomeCompleto() {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto();

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};

var nome = "Kadu";

nome.length; // 4
nome.charAt(0); // K
nome.replace("K", "C"); // Cadu
nome; // Kadu

var btn = document.querySelector(".btn");

console.log("===========================");

// nomeie 3 propriedades ou métodos de strings
var propriedades = {
  length: "Tamanho da string",
  charAt: "Retorna o caractere na posição informada",
  replace: "Substitui uma parte da string por outra",
};

var metodos = {
  toUpperCase: "Converte a string para maiúscula",
  toLowerCase: "Converte a string para minúscula",
  slice: "Recorta uma parte da string",
};

// nomeie 5 propriedades ou métodos de elementos do DOM

var propriedadesDOM = {
  innerHTML: "Retorna o HTML interno do elemento",
  style: "Retorna o estilo do elemento",
  className: "Retorna o nome da classe do elemento",
  id: "Retorna o id do elemento",
  localName: "Retorna o nome local do elemento",
};

var metodosDOM = {
  appendChild: "Adiciona um filho ao elemento",
  removeChild: "Remove um filho do elemento",
  querySelector: "Seleciona um elemento pelo seletor CSS",
  addEventListener: "Adiciona um evento ao elemento",
  setAttribute: "Define um atributo no elemento",
};

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var clipboard = {
  writeText: "Escreve um texto no clipboard",
  readText: "Lê um texto do clipboard",
};
