// Exercicios com For usando ++ de incremento //

// let frutas = ['maça', 'uva', 'laranja', 'abacaxi', 'pera', 'manga']

// for(let index = 0; index < frutas.length; index++) {
//     console.log('Essa é a fruta do loop: ', frutas[index])
// }

// Exercicios com For usando let //

// let nomes = ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Joana', 'Joaquim'];

// for(let nome of nomes) {
//     console.log('Esse é o nome do loop: ', nome)
// }

//Exemplo meu

// let filmesFavoritos = ["Mr. Nobody", "Matrix", "Harry Potter", "Batman"]

// for (let filme of filmesFavoritos){
//     if (filme === "Mr. Nobody"){
//         console.log("O meu primeiro filme favorito é:", filme)
//     }
// }

// Exercicios com loop While //

// let numeroEscolhidoPeloUsuario = Number(prompt('Digite um número de 2 até 10:'))
// let numeroDoLoop = 0

// while(numeroDoLoop < numeroEscolhidoPeloUsuario) {
//     console.log(`Eu ainda estou rodando, até chegar no número do usuário: Loop: ${numeroDoLoop}, Escolhido pelo usuário ${numeroEscolhidoPeloUsuario}`)
//     numeroDoLoop++
// }

// Exercicios de map //

// let pessoas = ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Joana', 'Joaquim'];

// let pessoasEmMaiusculo = pessoas.map((pessoa) => {
//         return pessoa.toLocaleUpperCase()
// })

// console.log(pessoas, pessoasEmMaiusculo)

// Exercicios de Filter //

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numerosFiltrados = numeros.filter(numero => {
//     return numero > 2
// });

// console.log(numerosFiltrados);

// class Human {
//     gender = 'Male';

//     printGender = () => {
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//     name = 'Max';

//     printMyName = () => {
//         console.log(this.name);
//     }
// }

// const person = new Person();

// person.printMyName();
// person.printGender();


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = [...numbers, 1, 2, 3];

// console.log(newNumbers);

// const person = {
//     name: 'Max'
// }

// const newPerson = {
//     ...person,
//     age: 28
// }

// console.log(newPerson);

// const filter = (...args) => {
//     return args.filter((arg) => {
//         return arg > 1
//     })
// }

// let numbers = filter(1, 2, 3, 4, 5);

// console.log(numbers);

// const person = {
//     name: 'Kaio',
//     age: 28,
//     lives: {
//         city: 'São Paulo',
//         temp: 32
//     }
// }

// const {lives} = person;

// console.log(lives);

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(5);
// const f = new Node(6);

// //     1
// //    / \
// //   2   3
// //  / \   \
// // 4   5   6

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// // Clear breadth function

// const breadththFirstPrint = (root) => {
//     const queueArray = [root];
//     const result = [root.val];

//     console.log(queueArray.length)

//     // while(queueArray.length > 0) {
//     //     const current = queueArray.shift()

//     //     if(current.left !== null) {
//     //         queueArray.push(current.left);
//     //         result.push(current.left.val)
//     //     }
//     //     if(current.right !== null) {
//     //         queueArray.push(current.right);
//     //         result.push(current.right.val)
//     //     }
//     // }

//     return result;
// };

// const binaryArray = breadththFirstPrint(a);

// console.log(binaryArray);

// BFS

// const breadthFirstPrint = (root, target) => {
//     const queueArray = [root];
//     while(queueArray.length > 0) {
//         const current = queueArray.shift();

//         if(current.val === target) {
//             return true;
//         }

//         if(current.left !== null) {
//             queueArray.push(current.left)
//         }
//         if(current.right !== null) {
//             queueArray.push(current.right)
//         }
//     }

//     return false;
// }

// const resultBinary = breadthFirstPrint(a, 'f');

// console.log(resultBinary)

// Sum of all the tree values

// const sumTree = (root) => {
//     const queue = [root];
//     let result = 0;

//     while(queue.length > 0) {
//         const current = queue.shift();
//         result += current.val;

//         if(current.left !== null) {
//             queue.push(current.left)
//         }
//         if (current.right !== null) {
//             queue.push(current.right)
//         }
//     }

//     return result;
// }

// const resultSum = sumTree(a);

// console.log(resultSum);

// Deep First Traversal

//     1
//    / \
//   2   3
//  / \   \
// 4   5   6

// const depthFirstPrint = (root) => {
//     const stack = [root];

//     while(stack.length > 0) {
//         const current = stack.pop();
//         console.log(current.val);
//         // add current children to the top of the stack
//         current.right !== null ? stack.push(current.right) : null
//         current.left !== null ? stack.push(current.left) : null
//     }
// }

// const depthFirstPrintRecursive = (root) => {
//     if(root === null) return;
//     depthFirstPrintRecursive(root.left);
//     console.log(root.val);
//     depthFirstPrintRecursive(root.right);
// }

// depthFirstPrintRecursive(a);

// const arrayNames = [
//     {
//         name: 'Alan',
//         age: 20
//     },
//     {
//         name: 'Babilon',
//         age: 27
//     },
//     {
//         name: 'Kaio',
//         age: 28
//     },
//     {
//         name: 'Sarah',
//         age: 29
//     },
//     {
//         name: 'Marquise',
//         age: 31
//     },
//     {
//         name: 'Carlos',
//         age: 19
//     },
//     {
//         name: 'Mariano',
//         age: 20
//     }
// ]

// arrayNames.sort((a,b) => {
//    return a.age - b.age;
// })

// console.log(arrayNames);




// Perguntas de entrevista de emprego
// 1 diferença entre let, const e var
// var card = 'Sahfada'
// card = 'Kaio-san'

// let card = 'Sahfada'
// card = 'Kaio-san'

// const card = 'Sahfada'
// card = 'ma opa num pode não'

// 2 o que são parametros e argumentos

// parametros são o que se preve em uma função
function somarNumeros(numero1, numero2) {
    return numero1 + numero2
}

// argumentos é o que a função recebe quando é usada
somarNumeros(1, 6)

// 3 Tipos de primitivos String, Number, Boolean, BigInt, Null, Undefined, Object e Array
// const nome = 'Sah Fada'
// const idade = 27
// const casada = true
// const cores = [1, 2, ,3 ,4]
// const pessoa = {
//     nome: 'Caraiudo',
//     idade: 23,
//     trampo: 'vagabundo'
// }

// 4 o que é escopo/closures ?
// const nomeDaPessoa = 'Kaio'

// const criarNome = (nome, sobrenome) => {
//     return `${nome} ${nomeDaPessoa} ${sobrenome}`
// }

// const result = criarNome(nomeDaPessoa, 'Espanhol')
// console.log(result)

// 5 O que são promises

const buscaCartaTheEnd = (nomeDaCarta) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(nomeDaCarta === 'The End') {
                resolve('A Carta voltando por aqui')
            } else {
                reject('Carta Errada')
            }
        }, 2500)
    })
}

// buscaCartaTheEnd('The End')
//     .then((data) => {
//         console.log(data)
//         alert(`${data}, escolheu a carta certa miseravi robertin`)
//     })
//     .catch((error) => {
//         console.log(error)
//         alert(`${error}, escolheu a carta errada seu robertin`)
//     })

// 6 Usando async/await

// const buscaCarta = async () => {
//     try {
//         const res = await buscaCartaTheEnd('The End')
//         console.log(res)
//     }
//     catch(error) {
//         console.log(error, 'deu errado bixo')
//     }
// }

// buscaCarta()

// 7 Diferença de Arrow Functions e funções normais

// function buscaCoisa() {

// }

// const buscaCoisa = async() => {

// }

// 8 O que é o DOM e window?

// var titulo = document.getElementsByClassName("titulo")
// console.log(titulo)

// 9 Spread, Rest e destructuring operators

// const frutas = ['azul', 'verde', 'amarelo', 'vermelho', 'petista']
// const pessoa = {
//     nome: 'robertin',
//     idade: 23,
//     profissao: 'eboy',
//     cidade: 'são paulo'
// }

// 10 O que são classes

class Profissao {
    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
    }
}

class Pessoa {
    constructor(nome, idade, profissao, cidade) {
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
        this.cidade = cidade
    }

    dirigir() {
        console.log(this.nome, 'esta dirigindo')
    }

    andar() {
        console.log(this.nome, 'esta andando')
    }
}


const personaNonGrata = new Pessoa('kaio', 28, 'dev mequetrefe', 'floripa')
const pessoaDnv = new Pessoa('Sah', 29, 'artista da internet', 'flopxxx')

personaNonGrata.andar()
pessoaDnv.dirigir()

// 11 Objetos e Arrays

// 12 Null e Undefined

// 13 O que é o ReactJS?

// 14 Diferença entre React Funcional e React Classes

// 15 React Hooks

// 16 React condicionais

// 17 Estilizações - Styled Components, CSS Modules e Bibliotecas

// 18 Chamadas HTTP

// 19 Context

// 20 Ref e manipulação do dom

