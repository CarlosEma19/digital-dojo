// function Pessoa() {
//   this.idade = idade;
//   this.nome = nome;
// }

// const andre = new Pessoa("Andre", 28);

// console.log(Pessoa.prototype);

const pais = "Brasil";

const cidade = new String("Rio");

pais.charAt(0);
pais.charAt(0);

const listaAnimais = ["cachorro", "gato", "cavalo"];

const lista = document.querySelectorAll("li"); // por enquanto é uma nodelist

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista); // aqui tranforma a lista em array

Array.prototype.slice.call(lista);
Array.from(lista); // isso aqui ja tranforma em uma array direto

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};

Carro; // valor do carro Objeto
Carro.marca; // valor da marca  String
Carro.preco; // valor do preco Number
Carro.acelerar; // o que é acelerar Function
Carro.acelerar(); // Boolean
Carro.marca.charAt; // Function
Carro.marca.charAt(0); // String
