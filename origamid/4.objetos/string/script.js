const comida = "Pizza";
const liquido = new String("Água");
const ano = new String(2018);

const comida2 = "Pizza";
const frase1 = "A melhor comida";

comida2.length; // 5
frase1.length; // 15

comida[0]; // P
frase1[0]; // A
frase1[frase1.length - 1]; // a

const linguagem1 = "JavaScript";

linguagem1.charAt(0); // J
linguagem1.charAt(2); // v
linguagem1.charAt(linguagem1.length - 1); // t

const frase2 = "A melhor linguagem é ";
const linguagem2 = "JavaScript";

const fraseCompleta = frase2.concat(linguagem1, "!!");

const fruta3 = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

listaFrutas.includes(fruta3); // true
fruta3.includes(listaFrutas); // false

const fruta = "Banana";

fruta.endsWith("nana"); // true
fruta.startsWith("Ba"); // true
fruta.startsWith("na"); // false

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

const linguagem = "JavaScript";
linguagem.substring(3, 5); // aS
linguagem.substring(0, 4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript

const instrumento = "Guitarra";

instrumento.indexOf("r"); // 5
instrumento.lastIndexOf("r"); // 6
instrumento.indexOf("ta"); // 3

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

listaPrecos[0].padStart(10, "."); // .....R$ 99
listaPrecos[0].padEnd(10, "."); // R$ 99.....

const frase4 = "Ta";

frase4.repeat(5); // TaTaTaTaTa

let listaItens5 = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens5 = listaItens5.replace(/[ ]+/g, ", ");

let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // 'R$ 1200.43'

const listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItens = listaItens.split(" ");

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const htmlNovo = htmlArray.join("section");

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true

const valor = "  R$ 23.00   ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes6 = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxatotal = 0;
transacoes6.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", "");
  if (item.descricao.slice(0, 4) === "Taxa") {
    taxatotal += numeroLimpo;
  } else if (item.descricao.slice(0, 4) === "Recebimento") {
    recebimentoTotal += numeroLimpo;
  }
});
console.log(taxatotal);

// Retorne uma array com a lista abaixo
const transportes1 = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransporte = transportes1.split(";");
console.log(arrayTransporte);

// Substitua todos os span's por a's
let html1 = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

html1 = html1.split("span").join("a");
console.log(html1);

// Retorne o último caracter da frase
const frase7 = "Melhor do ano!";
const ultimoCaractere = frase7[frase7.length - 1];
console.log(ultimoCaractere);
// ou console.log(frase7.slice (-1))

// Retorne o total de taxas
const transacoes1 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let taxasTotal = 0;
transacoes1.forEach((item) => {
  item = item.toLocaleLowerCase();
  item = item.trim();
  item = item.slice(0, 4);

  if (item === "taxa") {
    taxasTotal++;
  }
});

console.log(taxasTotal);
