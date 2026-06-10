//definindo uma funcao
function areaQuadrado() {
  console.log("funcao ativa");
}
areaQuadrado(); // ativando a funcao

console.log("=====================================");
//definindo uma funcao
function square(lado) {
  return lado * lado;
}
console.log(square(10)); // ativando a funcao

console.log("=====================================");
function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total); // ativando a funcao

console.log("=====================================");
//definindo uma funcao
// function imc(peso, altura) /*Parametros*/ {
//   var imc = peso / (altura * altura);
//   return imc;
// }

// console.log(imc(80, 1.8)) /*Argumentos*/;

console.log("=====================================");
// ativando a funcao
function corFavorita(cor) {
  if (cor === "azul") {
    return "Você é uma pessoa legal";
  } else if (cor === "verde") {
    return "voce é uma pessoa esperta";
  } else {
    return "Você não é uma pessoa legal";
  }
}
console.log(corFavorita("azul"));

console.log("=====================================");

//funcao anonima
addEventListener("click", Mconsole);

function Mconsole() {
  console.log("Clicou");
}

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
console.log(imc2(100, 1.84));

console.log("=====================================");
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe sua idade";
  } else if (idade >= 60) {
    return "Voce é da terceira idade";
  } else {
    return "Voce nao é da terceira idade";
  }
}

console.log(terceiraIdade(60));

console.log("=====================================");
function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(20));

console.log("=====================================");
var profissao = "programador";

function dados() {
  var idade = 28;
  function outrosDados() {
    var endereco = "Rua muito legal";
    return `${profissao}, ${idade}, ${endereco}`;
  }
  return outrosDados();
}
console.log(dados());

console.log("=====================================");
