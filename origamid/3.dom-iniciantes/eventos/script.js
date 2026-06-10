const img = document.querySelector("img");
console.log(img);

img.addEventListener("click", function () {
  console.log("Clicou");
});

// A boa pratica é primeiro declarar a funcao, e depois adicionar o evento e apontar para essa funcao

const img2 = document.querySelector("img");
console.log(img);

function callback(event) {
  console.log(event);
}
img2.addEventListener("click", callback);

// const animaisLista = document.querySelector(".animais-lista");

// function callbacklista(event) {
//   console.log(event.currentTarget); // o currentTarget seleciona todos os elementos (Nesse caso, a ul animais-lista)
//   console.log(event.target); // target mostra o exato elemento que eu cliquei
//   console.log(event.type); // tipo de evento
//   console.log(event.composedPath()); // path
// }
// animaisLista.addEventListener("click", callbacklista);

const linkExterno = document.querySelector('a[href^="http"]');
function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event);
}
linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");

function handeleEvent(event) {
  console.log(event.type, event);
}

// h1.addEventListener("click", handeleEvent);
// h1.addEventListener("mouseenter", handeleEvent);
// window.addEventListener("keydown", handeleEvent);

function handleKeyboard(event) {
  if (event.key === "f") {
    document.body.classList.toggle("fullscreen");
  }
}
window.addEventListener("keydown", handleKeyboard);

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]'); // seleciona todos as tag a que tenha o atributo href="#"

function taAtivo(event) {
  // funcão para remover a classe ativo, e so adicionar se aquele elemento for clicado
  event.preventDefault();
  linkInterno.forEach((link) => {
    link.classList.remove("ativo"); // remove ativo
  });
  event.currentTarget.classList.add("ativo"); // adiciona ativo
}
linkInterno.forEach((item) => {
  // adiciona o evento de click
  item.addEventListener("click", taAtivo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const tudo = document.body.querySelectorAll("*");
function clickado(event) {
  console.log(event.currentTarget);
  console.log("isso ta clickado");
}
tudo.forEach((elementos) => {
  elementos.addEventListener("click", clickado);
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const imgs = document.querySelectorAll("img");
function handleImg(event) {
  event.target.remove();
}
imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
const texto = document.querySelectorAll("p");
function pressT(event) {
  if (event.key === "t") {
    texto.forEach((p) => {
      p.classList.toggle("caixa-alta"); // só estilizar no css para essa classe mudar o font-size
    });
  }
}
window.addEventListener("keydown", pressT);
