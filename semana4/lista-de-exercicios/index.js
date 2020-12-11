// Lista de Exercícios
// Exercícios de interpretação de código

/* 1: 
Aqui temos um código para converter moedas, na primeira linha a função é criada e nomeada.
Na segunda é criada uma variavel para receber guardar a cotação informada pelo usuário.
Já na terceira linha temos o retorno em R$ que seria o valor total vezes a cotação.

Na quarta linha de código temos a variavel que recebe a função mais o valor em reais executando assim a conta.
e na ultima linha temos um console log que mostra ao usuário qual o real valor do seu dinheiro em dólar.
*/


/* 2:
Aqui temos um código para simular o retorno em tipos específicos de investimentos, na primeira linha a função é criada e nomeada.
Na segunda é criada uma variavel para receber guardar os tipos e valores de cada possível investimento.
Já na terceira linha temos um switch que seria basicamente um loop com cada opção e o seu valor base para que seja feita a operação matemática ou caso nao se enquadre retornar uma mensagem de erro.

Na quarta linha de código temos um return que vai trazer o valor ligado ao que o usuário escolheu.
Na quinta e sexta linha temos duas variáveis ambas calculando o tipo de investimento vezes o valor investido.

e nas ultimas linhas temos dois Logs o primeiro com o resultado das operações acima sendo eles 165 em açoes e no segundo teríamos um erro ja que o tesouro direto nao é uma opção.

*/

/* 3:
Nas tres primeiras linhas temos 3 variáveis como arrays um chamado numeros ja com valores e os array1 e array2 sem nenhum dado inicial.
Logo abaixo temos um for que vai verificar todos os camps do Array numeros e conferir usando um if quais numeros são pares e quais são impares.
caso par sera adicionado no array1, caso impar no array2
ao final os logs vao mostrar a quantidade de numeros nos arrays numeros 1 e 2.

*/

/* 4:
Nas tres primeiras linhas temos 3 variáveis sendo elas uma constante em formato de lista com o nome numeros contendo positivos e negativos, numero1 com o conteúdo infinity que seria considerado basicamente qualquer numero inteiro e a numero2 contendo inicialmente 0 como valor.
logo abaixo temos um for que checa enquanto o numero do array numeros for menor que o numero1 o valor do numero sera assumido pela variavel numero1. em uma segunda verificação enquanto o valor atual do numero for maior que numero2 ou seja 0 o numero 2 assumira o valor do numero.
sendo assim os consoles devem exibir os valors finais assumidos pelas variáveis numero1 e numero2
*/

// Exercícios de Lógica de Programação

/* 1:
forEach Map e Filter
cada comando abaixo percorre todo o array atual e duplica sua informação.

const array=[1,2,3]
array.forEach( (num1,index,array) =>{
    array.push(num1)
})
console.log(array)
array.map( (num1,index,array) =>{
    array.push(num1)
})
console.log(array)

array.filter( (num1,index,array) =>{
    array.push(num1)
})
console.log(array)

*/

/* 2:
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2
const booleano4 = !booleano3 

a) `booleano1 && booleano2 && !booleano4`  Retornaria : False

b) `(booleano1 && booleano2) || !booleano3` Retornaria : False

c)  `(booleano2 || booleano3) && (booleano4 || booleano1)` :Retornaria : True 

d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` :Retornaria : True 

e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)` :Retornaria : false 

*/

/* 3:

o código exibe os numeros conforme solicitado porem nao consegui incluir o 0.

const quantidadeDeNumerosPares = parseInt(prompt('Quantos numeros pares devem ser mostrados?'))
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}

*/

/* 4:

let a= parseInt(prompt('Insira o valor do lado A do triangulo!'))
let b= parseInt(prompt('Insira o valor do lado B do triangulo!'))
let c= parseInt(prompt('Insira o valor do lado C do triangulo!'))
 
const tiposDeTriangulo = () => {
    if(a == b && b ==c){
        console.log("Triangulo equilatero!");
        }
        else if(a != b && b != c && c != a){
        console.log("Triangulo escaleno!");
        }
        else{
        console.log("Triangulo isóceles!");
     }
 
}

tiposDeTriangulo()

*/

/* 5:

let num1= parseInt(prompt('Insira o primeiro Numero!'))
let num2= parseInt(prompt('Insira o segundo Numero!'))

const analiseDeDadosDivisiveis= () =>{
while(num1>num2) {
    console.log("Primeiro numero é maior "+ num1);
let diferenca = (num1-num2)
console.log("Diferença entre os numeros "+diferenca)
console.log(num1+" é divisível por "+num2 + " Resultado: " +(num1/num2))
break;
}
}
const analiseDeDadosNaoDivisiveis= () =>{
while(num1<num2) {
    console.log("Segundo numero é Maior "+ num2);
let diferenca = (num1-num2)
console.log("Diferença entre os numeros "+diferenca)
console.log(num1+" Não divisível por "+num2 )
 break;
}
}
analiseDeDadosDivisiveis()
analiseDeDadosNaoDivisiveis()

*/
// Exercícios de Funções

/* 1:

 nao finalizada vou deixar para o final
let array =[22,73,4,55,33,2,15,6,126,42]
let min = Math.min(...array);
let max = Math.max(...array);
 
// array.filter( (num1,index,array) =>{
   
// })
console.log(array)
console.log(min)
console.log(max)

*/

/* 2:
const hello= () =>{
alert("Hello Labenu!")
}
hello()
*/

// Exercícios de Objetos

/* 1: 
Em minha visão os arrays são utilizados para armazenar grande quantidades de dados simples ja os objetos podem levar varias informações estruturadas.

usaria array para trabalhar com numeros ou uma lista de nomes.
usaria o objeto para a criação de um formulário de cadastro por exemplo.


*/

/* 2:

criaRetangulo = (lado1 = parseInt(prompt('Insira o primeiro Lado do retangulo!')), lado2 = parseInt(prompt('Insira o segundo Lado do retangulo!'))) => {
    largura = lado1
    altura = lado2
    perimetro = (2 * (lado1 + lado2))
    area = (lado1 * lado2)
    console.log(largura)
    console.log(altura)
    console.log(perimetro)
    console.log(area)
}

criaRetangulo()


*/


/* 3:

let filmes = {
    titulo:'O Senhor dos Anéis',
    ano:2001,
    diretor:'Peter Jackson',
    atores: (' Elijah Wood ,Ian McKellen'),
    atrizes:(' Cate Blanchett, Miranda Otto'),
}
console.log(`Venha assistir ao filme ${filmes.titulo}, de ${filmes.ano}, dirigido por ${filmes.diretor} e estrelado por ${filmes.atores},${filmes.atrizes}`)

*/


// /* 4

// let pessoa = {
//     nome:'Peter Jackson',
//     idade: 26,
//     email:'PeterJackson@jackson.com',
//     endereco: 'rua teste'
// }
// anonimizarPessoa= () =>{
//      Anonimo = {...pessoa}
//     Anonimo.nome = 'Anonimo'
//     console.log(Anonimo)
//  }


// console.log(`Nome ${pessoa.nome}, idade ${pessoa.idade}, email ${pessoa.email} endereco ${pessoa.endereco}`)
// anonimizarPessoa()

// */

//Exercícios de Funções de array
/* 1:



*/


/*



*/


/*



*/
