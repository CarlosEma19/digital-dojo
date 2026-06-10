//const imgs = document.querySelectorAll("img");
//   console.log(imgs);

imgs.forEach((item) => {
  console.log(item);
});

// imgs.forEach((i) => console.log(i++));

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);
paragrafos.forEach((item) => {
  console.log(item);
});

paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
