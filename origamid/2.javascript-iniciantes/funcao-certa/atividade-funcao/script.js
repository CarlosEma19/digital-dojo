// Crie uma função para verificar se um valor é Truthy

function isTruthy(valor) {
  return !!valor;
}
console.log(isTruthy(true));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Cadu", "Ema"));

// Crie uma função que verifica se um número é par

function isPar(numero) {
  return numero % 2 === 0;
}
console.log(isPar(4));
console.log(isPar(1));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe um número";
  } else if (idade >= 60) {
    return "Terceira idade";
  } else {
    return "Não é terceira idade";
  }
}
console.log(terceiraIdade(60));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Cadu Ema");
});

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
