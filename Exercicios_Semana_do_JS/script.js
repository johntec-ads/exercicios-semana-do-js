/* Map , Filter e reduce */

/* Quando devo usar o Map :
Quando preciso obter um array, com a mesma quantidade
do array original, porém, com os objetos modificados */

/* Exemplos e Exercícios: */

/* const number = [1, 2, 3];
const doubleNumbers = number.map(item => {
  return item * 2
})
console.log(number === doubleNumbers)
console.log(number, doubleNumbers) */


/* const prices = [20, 10, 30, 25, 15, 40, 80, 5]
const salePrices = prices.map(price => price/2)
console.log(prices)
console.log(salePrices) */

/* const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => {

}) */

/* let lista = ([
  {
    nome: "Edimar",
    posicao: "Defesa",
    habilidade: 3
  },
  {
    nome: "Miguel",
    posicao: "Defesa",
    habilidade: 3
  },
  {
    nome: "Leonel",
    posicao: "Defesa",
    habilidade: 1
  },  
  {
    nome: "John",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Sassi",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Tota",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Helio",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Dario",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Vinicius",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Maua",
    posicao: "Ataque",
    habilidade: 3
  },
  {
    nome: "Jonathan",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Paulinho",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Piu Pinga",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Adauto",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Alisson",
    posicao: "Ataque",
    habilidade: 2
  },
  {
    nome: "Tomazoni",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "João Fiori",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Odimar",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Bilu",
    posicao: "Ataque",
    habilidade: 2
  },
  {
    nome: "Herico",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Lita Lube",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "João Ramalho",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Hugo",
    posicao: "Meio",
    habilidade: 3
  },  
  {
    nome: "Alexandre",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Lacim",
    posicao: "Ataque",
    habilidade: 3
  },
  {
    nome: "Niko",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Wanderson",
    posicao: "Meio",
    habilidade: 3
  },

]);

const newlist = lista.map(lista => {
  if (lista.posicao === "Meio" && lista.habilidade === 3){
    return {
      nome: lista.nome,
      posical: lista.posicao,
      habilidade: lista.habilidade,
    }
  }
  return lista
})
console.log(lista)
console.log(newlist) */








/* Quando deve-se usar o Filter:
Quando você precisa obter um novo array, com uma quantidade de itens
menor que a do array original */


/* let lista = ([
  {
    nome: "Edimar",
    posicao: "Defesa",
    habilidade: 3
  },
  {
    nome: "Miguel",
    posicao: "Defesa",
    habilidade: 3
  },
  {
    nome: "Leonel",
    posicao: "Defesa",
    habilidade: 1
  },  
  {
    nome: "John",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Sassi",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Tota",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Helio",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Dario",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Vinicius",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Maua",
    posicao: "Ataque",
    habilidade: 3
  },
  {
    nome: "Jonathan",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Paulinho",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Piu Pinga",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Adauto",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Alisson",
    posicao: "Ataque",
    habilidade: 2
  },
  {
    nome: "Tomazoni",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "João Fiori",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Odimar",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Bilu",
    posicao: "Ataque",
    habilidade: 2
  },
  {
    nome: "Herico",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Lita Lube",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "João Ramalho",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Hugo",
    posicao: "Meio",
    habilidade: 3
  },  
  {
    nome: "Alexandre",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Lacim",
    posicao: "Ataque",
    habilidade: 3
  },
  {
    nome: "Niko",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Wanderson",
    posicao: "Meio",
    habilidade: 3
  },

]);

const newlist = lista.filter(item => item.posicao === "Meio" && item.habilidade === 3)
console.log(newlist) */

/* const randomNumbers = [33, 99, 37, 63]
const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)
console.log(numbersGreaterThan37) */

/* const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium == true)
console.log(premiumUsers) */


/* METODO REDUCE */
/* Quando devo usar o reduce:
    Quando baseado no array original, você pecisa "Reduzir
    o array a um valor" sendo um : Objeto,String,Número ou um novo Array*/

    /* Exemplo 01 */

    /* const numbers = [1, 2, 3]
    const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)
    console.log(sumResult) */
    
    /* Exemplo 02 */
    const phaseScores = [
      { name: 'Vinicius Costa', score: 337 },
      { name: 'Roger Melo', score: 43 },
      { name: 'Alfredo Braga', score: 234 },
      { name: 'Pedro H. Silva', score: 261 },
      { name: 'Ana Paula Rocha', score: 491 },
      { name: 'Vinicius Costa', score: 167 },
      { name: 'Roger Melo', score: 137 },
      { name: 'Alfredo Braga', score: 135 },
      { name: 'Ana Paula Rocha', score: 359 },
      { name: 'Pedro H. Silva', score: 133 }
    ]

    const rogerScore = phaseScores.reduce((accumulator, phaseScores) => {
      if (phaseScores.name === "Roger Melo"){
        return accumulator + phaseScores.score
      }
      return accumulator
    }, 0)
    


    let listNames = ([
  {
    nome: "Edimar",
    posicao: "Defesa",
    habilidade: 3
  },
  {
    nome: "Miguel",
    posicao: "Defesa",
    habilidade: 3
  },
  {
    nome: "Leonel",
    posicao: "Defesa",
    habilidade: 1
  },  
  {
    nome: "John",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Sassi",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Tota",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Helio",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Dario",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Vinicius",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Maua",
    posicao: "Ataque",
    habilidade: 3
  },
  {
    nome: "Jonathan",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Paulinho",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Piu Pinga",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Adauto",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Alisson",
    posicao: "Ataque",
    habilidade: 2
  },
  {
    nome: "Tomazoni",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "João Fiori",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Odimar",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Bilu",
    posicao: "Ataque",
    habilidade: 2
  },
  {
    nome: "Herico",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Lita Lube",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "João Ramalho",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Hugo",
    posicao: "Meio",
    habilidade: 3
  },  
  {
    nome: "Alexandre",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Lacim",
    posicao: "Ataque",
    habilidade: 3
  },
  {
    nome: "Niko",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Wanderson",
    posicao: "Meio",
    habilidade: 3
  },

]);

const newlist = listNames.reduce((accumulator, product) => { 
   return product.nome
},"")
console.log(newlist)

    
