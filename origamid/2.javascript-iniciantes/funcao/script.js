function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));
console.log(areaQuadrado(5));
console.log(areaQuadrado(2));

console.log("=====================================");
function teste() {
  console.log("Teste");
}
teste();

console.log("=====================================");
function pi() {
  return 3.14;
}

var total = 1 * pi();
console.log(total);

console.log("=====================================");
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(80, 1.8));

console.log("=====================================");
function corFavorita(cor) {
  if (cor === "azul") {
    return "Você é uma pessoa legal";
  } else if (cor === "verde") {
    return "Você é uma pessoa esperta";
  } else if (cor === "vermelho") {
    return "Você é uma pessoa corajosa";
  } else {
    return "Você não é uma pessoa legal";
  }
}
console.log(corFavorita("azul"));
console.log(corFavorita("verde"));
console.log(corFavorita("vermelho"));
console.log(corFavorita("preto"));

console.log("=====================================");

addEventListener("click", function () {
  console.log("Clicou");
});

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(100, 1.84);

console.log("=====================================");
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

console.log("=====================================");

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(20));

console.log("=====================================");

var profissao = "Programador";

function dados() {
  var nome = "Cadu";
  function outrosDados() {
    var endereco = "São Paulo";
    var idade = 21;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
console.log("=====================================");

// Crie uma função para verificar se um valor é Truthy

function detector(valor) {}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

console.log("=====================================");
