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

let array =[22,73,4,55,33,2,15,6,126,42]
let min = Math.min(...array);
let max = Math.max(...array);

console.log(array)
function segundoMaiorEMenor() {
    let maxIndice = array.indexOf(max) 
    array.splice(maxIndice, 1);
    let segundoMax = Math.max(...array);
    console.log('O segundo maior numero é :'+segundoMax) 

    let minIndice = array.indexOf(min) 
    array.splice(minIndice, 1);
    let segundoMin = Math.min(...array);
    console.log('O segundo maior numero é :'+segundoMin)   
}
segundoMaiorEMenor()

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
    atores: ['Elijah Wood' ,' Ian McKellen'],
    atrizes:['Cate Blanchett', ' Miranda Otto'],
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

const pessoas =[
	{ nome: "Pedro", idade: parseInt(20) },
	{ nome: "João", idade: parseInt(10) },
	{ nome: "Paula", idade: parseInt (12) },
	{ nome: "Artur", idade: parseInt(89) } 
]
let idades = [(pessoas[0].idade),(pessoas[1].idade) ,(pessoas[2].idade) ,(pessoas[3].idade)]
console.log('Maiores de idade')
idades.forEach(anos => {
    if (anos >= 20) {
          console.log(anos)

        
    }
})
console.log('Menores de idade')
idades.forEach(anos => {
    if (anos < 20) {
        console.log(anos)
        
    }
})

*/


/* 2:
const array = [1, 2, 3, 4, 5, 6]
console.log(array)

const dobraValor = array.map(num=>num*2)
console.log(dobraValor)

const triplicaValor = array.map(num=>num*3)
console.log(triplicaValor)

let par =[]
let impar =[]

array.forEach(num => {
    if (num%2 ==0) {
        par.push(num)      
    } else{
        impar.push(num)   
    }
})
console.log(par+' São numero pares')
console.log(impar+' São numero impares')

*/


/* 3:
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
let alturaMinima= 1.5
let idadeMinima=15
let idadeMaxima = 60

let permitido =[]
let naoPermitido =[]


let Permitidas = pessoas.filter( function( elem, index, array ) {
   if (elem.altura<1.5){
              naoPermitido.push(elem.nome)
    } else if (elem.idade<15) {
        naoPermitido.push(elem.nome)
    } else if (elem.idade>60) {
        naoPermitido.push(elem.nome)
    } else{
        permitido.push(elem.nome) 
    }
            
  
} )

console.log(' Aprovados:',permitido)
console.log(' Reprovados:',naoPermitido)

*/

/* 4: não consegui filtrar pelo sexo para definir as nomenclaturas

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]


let feminino = 'Sra'


let cancelado =[]
let naoCancelado =[]
    consultas.forEach(elem => {

        if (elem.cancelada=== true) {
            console.log(`Olá, Sr ${elem.nome}. Infelizmente, sua consulta marcada
            para o dia ${elem.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
            contato conosco para remarcá-la `)
            cancelado.push(elem.nome) 
        }  
        else if (elem.cancelada=== false){
            console.log(`Olá, Sr ${elem.nome}. Estamos enviando esta mensagem para
            lembrá-lo da sua consulta no dia ${elem.dataDaConsulta}. Por favor, acuse
            o recebimento deste e-mail.`)
    
            naoCancelado.push(elem.nome) 
        }        
      
    });

console.log(' Cancelados:',cancelado)
console.log(' Não Cancelado:',naoCancelado)

*/

/* 5:  sem sucesso preciso estudar mais as formas de manusear e alterar arrays e objetos.

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach(element => {
    let num2 = element.compras
   let num = element.saldoTotal
    let resultado = num-num2 
    console.log(resultado)
});

contas.forEach(compras => {
    let num2 = compras.compras
      let num = compras.saldoTotal
     let resultado = num-num2 
     console.log(resultado)
    console.log(num)
});

*/
