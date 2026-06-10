// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// const precos = [49, 99, 69, 89];

// const dados = [
//   new String("Tipo 1"),
//   ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
//   function andar(nome) {
//     console.log(nome);
//   },
// ];

// dados[2]("Ford");
// dados[1][2].cor; // azul

// const carros1 = new Array("Corola", "Mustang", "Honda");

// carros1[1]; // Mustang
// carros1[2] = "Ferrari";
// carros1[10] = "Parati";
// carros1.length; // 11

// let li = document.querySelectorAll("li"); // NodeList
// console.log(li);
// li = Array.from(li); // Array

// console.log(li);

// const carros2 = {
//   0: "Fiat",
//   1: "Honda",
//   2: "Ford",
//   length: 4,
// };

// const carrosArray = Array.from(carros2);

// // o sort organiza palavras em ordem alfabetica
// {
//   const instrumentoss = ["Guitarra", "Baixo", "Violão"];
//   instrumentoss.sort();
//   console.log(instrumentoss);

//   // mas com numeros ele organiza em sequencia do mais baixo para o maior considerando 19 como 1 e depois 9, ou seja o 18 estaria primeiro
//   const idades = [32, 21, 33, 43, 1, 12, 8];
//   idades.sort();
//   console.log(idades);
// }

// const carros3 = ["Ford", "Fiat", "VW"];
// carros3.unshift("Honda", "Kia"); // unshift adiciona valores no comeco da array
// carros3; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

// carros3.push("Ferrari"); // o push adiciona valores ao final da array
// carros3; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

// const carros5 = ["Ford", "Fiat", "VW", "Honda"];
// const primeiroCarro = carros5.shift(); // Remove e retorna o primeiro valor da array
// carros5; // ['Fiat', 'VW', 'Honda'];

// const ultimoCarro = carros.pop(); // Remove e retorna o ultimo valor da array
// carros; // ['Fiat', 'VW'];

// const carros4 = ["Ford", "Fiat", "VW", "Honda"];
// carros.reverse(); // altera a ordem do array

const carros = ["Ford", "Fiat", "VW", "Honda"];
carros.splice(1, 0, "Kia", "Mustang"); // aqui esta adicionando, a partir de ford, kia e mustang
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros.splice(3, 2, "Ferrari"); // aqui esta removendo, a partir de fiat, 2 elementos e adiconando ferrari
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
