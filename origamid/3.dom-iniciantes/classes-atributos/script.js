// // const section = document.querySelector("animais");

// // section.clientHeight; // altura do elemento com o padding
// // section.offsetHeight; // altura do elemento com o padding e a borda
// // section.scrollHeight; // height total mesmo no scroll

// const listaAnimais = document.querySelector(".animais-lista");
// const animaisTop = listaAnimais.offsetTop;
// const height = listaAnimais.scrollHeight;

// console.log(animaisTop);

// const primeiroh2 = document.querySelector("h2");
// const h2left = primeiroh2.offsetLeft;
// console.log(h2left);

// const h2rect = primeiroh2.getBoundingClientRect();

// console.log(h2rect.top);
// if (h2rect.top < 0) {
//   console.log("passou do elemento");
// }

// console.log(
//   window.innerWidth, // width da janela
//   window.outerWidth, // soma dev tolls tbm - janela inteira
//   window.innerHeight, // height da janela
//   outerHeight // soma a barra de endereco jujto - janela inteira
// );

// console.log(window.pageYOffset, window.pageXOffset);

// const small = window.matchMedia("(max-width: 600px)");
// console.log(small);

// const img = document.querySelector("img");
// const imgtop = img.offsetTop;
// console.log(imgtop);

// function somaImagens() {
//   const imagens = document.querySelectorAll("img");
//   let soma = 0;
//   imagens.forEach((imagem) => {
//     soma += imagem.offsetWidth;
//   });
//   console.log(soma);
// }
// window.onload = function () {
//   somaImagens();
// };

// const links = document.querySelectorAll("a");

// links.forEach((link) => {
//   const linkWidth = link.offsetWidth;
//   const linkHeight = link.offsetHeight;

//   if (linkWidth >= 48 && linkHeight >= 48) {
//     console.log(link, "possui acessibilidade");
//   } else {
//     console.log(link, "Nao possui acessibilidade");
//   }
// });

// console.log(links);

const browserSmall = window.matchMedia("(max-width: 720px)").matches;
if (browserSmall) {
  const Menu = document.querySelector(".menu");
  Menu.classList.add("menuMobile");
}
