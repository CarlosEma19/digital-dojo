//const menu = document.querySelector(".menu");

// menu.outerHTML; // retorna todo o html do elemento
// menu.innerHTML; // retorna o html interno
// menu.innerText; // retorna os textos sem as tag's

// menu.innerText = "<p>Texto</p>"; // a tag vai entrar como string
// menu.innerText = "<p>Texto</p>"; // a tag é renderizada

// const h1 = document.querySelector("h1");
// h1.outerHTML = "<p>Novo titulo</p>";
// console.log(h1.innerHTML);

// const animaisLista = document.querySelector(".animais-descricao");
// console.log(animaisLista.innerText);

// const lista = document.querySelector(".animais-lista");

// console.log(lista.parentElement); // mostra o pai do elemento
// console.log(lista.nextElementSibling); // mostra o proximo elemento
// console.log(lista.previousElementSibling); // mostra o elemento anterior

// console.log(lista.children); // mostra os filhos
// console.log(lista.children[0]); // primeiro filho
// console.log(lista.children[--lista.children.length]); // ultimo filho
// console.log(lista.querySelector("li:last-child"));

// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");
// const mapa = contato.querySelector(".mapa");

// lista.appendChild(titulo); // o appendChild esta colocando o titulo como ultimo elemento da lista

// const aniamis = document.querySelector(".animais");
// contato.appendChild(titulo);
// contato.insertBefore(aniamis, titulo);

// const novoh1 = document.querySelector("h1");

// novoh1.innerText = "Novo Titulo";
// novoh1.classList.add("titulo");
// mapa.appendChild(novoh1);
// console.log(novoh1);

// const h1 = document.querySelector("h1");
// const faq = document.querySelector(".faq");
// const cloneH1 = h1.cloneNode(true);
// faq.appendChild(cloneH1);

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

const dt = document.querySelector(".faq dl dt");
console.log(dt);

// const dd = document.querySelector(".faq dl dd");
// console.log(dd);
const dd = dt.nextElementSibling;
console.log(dd);

const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;
