const imgs = document.querySelectorAll("img");
console.log(imgs);

let i = 0;
imgs.forEach(function (item, index, array) {
  console.log(item, index, array);
});

const titulos = document.getElementsByClassName("titulo"); // seleciona todos os elementos que tem a classe titulo
const titulosArray = Array.from(titulos);

console.log(titulos);
console.log(titulosArray);

titulosArray.forEach(function (item, index, array) {
  // console.log(item, index, array);
});

// Arrow Function

const lis = document.querySelectorAll("li");

lis.forEach((item) => {
  console.log(item);
});

// Exercicios

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);
paragrafos.forEach((item) => {
  console.log(item);
});

paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll("img");

imgs2.forEach((item, index) => {
  console.log(item, index);
});

let i2 = 0;
imgs.forEach(() => {
  console.log(i2++);
});

imgs.forEach(() => i2++);
