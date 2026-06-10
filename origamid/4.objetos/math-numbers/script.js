const ano = 2025;
const preco = new Number(99);

// Metodos de numeros
Number.isNaN(NaN); // Verifica se o valor é NaN
Number.isInteger(20); // Verifica se o valor é inteiro

parseFloat("99.50");
Number.parseFloat("99.50");
// Em resumo, parseFloat é para numeros DECIMAIS, se valor for numero decimal ele mantem o numero. Enquanto parseInt é para numeros INTEIROS, se o valor for decimal, ele mantem apenas o numero antes do ponto.

const valor = 2.99;
valor.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46 - mostra duas casas decimais

let moeda = 48.49;

moeda = moeda.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(moeda); // R$ 48,49

// OBJETO MATH

Math.PI;

Math.abs(-5.5); // 5.5 - Retorna o valor absoluto, independente do sinal
Math.ceil(4.8334); // 5 - arredonda sempre pra cima
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4 - arredonda sempre pra baixo
Math.floor(4.3); // 4
Math.round(4.8334); // 5 - arredonda
Math.round(4.3); // 4

Math.max(5, 3, 10, 42, 2); // 42 - Retorna o maior numero da lista
Math.min(5, 3, 10, 42, 2); // 2 - Retorna o menor numero da lista

Math.random(); // 0.XXX Retorna um numero aleatorio de 0 à 1
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
Math.floor(Math.random() * (max - min + 1)) + min;

// Retorne um número aleatório
// entre 1050 e 2000

let numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";

const arrayNumeros = numeros.split(",");
const maiorNumero = Math.max(...arrayNumeros);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", "");
  preco = preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});
console.log(soma);
