var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação e não executa o else

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação, mas não possui doutorado

var nome = "";

if (nome) {
  console.log("Possui nome");
} else {
  console.log("Não possui nome");
}

/*
No javascript somente esses valores são considerados falsy:

if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``
==============================

No javascript todos esses valores são considerados truthy:

if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})
============================

No Javascript o operador ! inverte o valor booleano, ou seja, se for true ele retorna false e vice-versa:

if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
*/

if (5 - 15 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("falso");
}

var condicional2 = 5 - 5 || (5 + 5 && 10 - 2);

console.log(condicional2);

// var Cor = prompt("Entre azul, vermelho e verde, qual voce prefere?");

// switch (Cor) {
//   case "azul":
//     console.log("A cor é azul");
//     break;
//   case "vermelho":
//     console.log("A cor é vermelho");
//     break;
//   case "verde":
//     console.log("A cor é verde");
//     break;
//   default:
//     console.log("A cor não é azul, vermelho ou verde");
// }

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idade = Number(prompt("Qual a sua idade?"));

if (idade > 19) {
  console.log("É maior");
} else if (idade == 19) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // trufhy
var idade = 28; // trufhy
var possuiDoutorado = false; // falsy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else if (brasil < china) {
  console.log("Brasil tem menos habitantes");
} else {
  console.log("Brasil e China tem o mesmo número de habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
//falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
// cão
