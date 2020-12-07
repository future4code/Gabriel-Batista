// EXERCÍCIO 1
// function minhaFuncao(variavel) {
// return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)

// A : 10,50 sendo 2*5 e 10*5
// B : em teoria nada pois nao tem nenhum tipo de retorno e sim chamando a function.

// EXERCÍCIO 2
// let arrayDeNomes = ["Amanda", "Caio"];

// const outraFuncao = function(array) {
// for (let i = 0; i < 2; i++) {
// console.log(array[i])
// }
// }

// outraFuncao(arrayDeNomes)

// A : como ele vai verificar se i é < que 2 ele vai imprimir o index 0 Darvas e 1 caio.

// B : como ele vai verificar se i é < que 2 ele vai imprimir o index 0 Amanda e 1 caio.

// EXERCÍCIO 3

// const MultipPar = (array) => {
// let arrayFinal = [];

// for (let x of array) {
// if (x % 2 === 0) {
// arrayFinal.push(x * x)
// }
// }

// Resposta :  Nesta function ela vai receber o array e multiplicar os numeros pares da mesma por eles mesmos ignorando os impares.

// EXERCÍCIO 4
// A :
// function sobreMim(){
//     console.log("Eu sou Gabriel, tenho 29 anos, moro em São Paulo e sou estudante Do curso Web FullStack Labenu.")
// }

// sobreMim()

// B:

// let nome = (prompt("Insira seu Nome"))
// let idade = Number(prompt("Insira Sua Idade"))
// let cidade = (prompt("Insira Sua Cidade"))
// let estudante = Boolean(confirm("Aperte em ok se Você é Estudante!"))

// let dados = [nome,idade,cidade,estudante]

// function sobreMim (){
// if (estudante === true)
//     console.log('Eu sou '+nome+ ' tenho ' +idade+ ' anos, moro em '+cidade, 'e sou estudante Do curso Web FullStack Labenu.')
// else {
// console.log('Eu sou '+nome+ ' tenho ' +idade+ ' anos, moro em '+cidade)
// }
// }
// sobreMim()

// EXERCÍCIO 5


// A:
// let somaDoisNumeros = function (num1, num2){
//     const soma = num1 + num2
//     return soma
// }

// const resultado = somaDoisNumeros(22, 44)
// console.log(resultado)

// B:
// let somaDoisNumeros = function (num1, num2){
//     const comparar = num1 >= num2
//     return comparar
// }

// const resultado = somaDoisNumeros(15, 4)
// console.log('o primeiro numero é maior ou igual o segundo? '+ resultado)
// C:

// function texto() {
//     let teste = 'oi'
//     return teste
// }
// for (var resultado = 0; resultado < 10; resultado++) {
//     const resultado = texto()
//     console.log(resultado)
// }

// EXERCÍCIO 6

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// // A: 
// function medirArray(array){
//     for(item of array){
//         // console.log(item)
//     }
//     return array.length
// }
//     console.log('Seu array tem: '+array.length+' Items')
// B: 
// function numeroPar(num1){
			
// 	if (num1 % 2 == 0) {
// 	   console.log(true);
// 	 } else {
// 	   console.log(false);
// 	 } 
// 	 return num1
//   }
//  let resultado = numeroPar(1)  
// C: 

// nao consegui fazer

// D: 
//