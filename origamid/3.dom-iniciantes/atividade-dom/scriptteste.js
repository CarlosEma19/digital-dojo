const animais = document.getElementById("animais");
console.log(animais.innerText);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[0]);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const primeiroLink = document.querySelector('[href^="#"');
console.log(primeiroLink.href);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[1]);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

console.log(gridSectionHTML);
console.log(gridSectionNode);

primeiraUl.classList.add("grid-section");

gridSectionNode.forEach(function (item, index) {});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});
