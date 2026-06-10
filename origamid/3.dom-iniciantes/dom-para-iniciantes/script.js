const href = window.location.href;

if (href === "https://dom-para-iniciantes/") {
  console.log("Você está na página inicial!");
}

const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList;

h1Selecionado.addEventListener("click", function () {
  console.log("clicou em ", h1Selecionado.innerText);
});

function callbackh1() {
  console.log("clicou em ", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackh1);

// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");
console.log(elementoAtivo);

// Retorne a linguagem do navegador
const linguagemNavegador = window.navigator.language;
console.log(linguagemNavegador);

// Retorne a largura da janela
const larguraJanela = window.innerWidth;
console.log(larguraJanela);
