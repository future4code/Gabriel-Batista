// EXERCÍCIO 1
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
// console.log("Passou no teste.")
// } else {
// console.log("Não passou no teste.")
// }
// resposta
// ele realiza uma divisão por 2 e se o numero for par retorna passou no teste caso seja impar retorna nao passou

// EXERCÍCIO 2
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
// case "Laranja":
//     preco = 3.5
//     break;
// case "Maçã":
//     preco = 2.25
//     break;
// case "Uva":
//     preco = 0.30
//     break;
// case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
// default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// resposta
// a = para organizar e trazer o valor da fruta escolhida.
// b =  o preço da fruta maçã é R$2.25
// c =  acredito que ficaria o preço da fruta pera é R$5 ja que foi o ultimo valor


// EXERCÍCIO 3


// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
// console.log("Esse número passou no teste")
// let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// resposta
// a = declarando uma variavel constante e numerica que vai ser inserida pelo usuario
// b = valor -10 nada sera mostrado pois nao tem uma mensagem definida, caso seja 10 ele vai apresentar este numero passou no teste.
// c = havera um erro referente a variavel mensagem pois ela esta dentro do if e o console log da parte de fora nao vai poder ter acesso a ela.

// EXERCÍCIO 4

// const idadeMinima = '18'
// let idade = Number(prompt("Qual sua idade?"))

// if (idade >= idadeMinima) {

//     alert("Você pode dirigir!")

//     }else if (idade < idadeMinima)   {

//      alert("Você não pode dirigir!")
//     }

// EXERCÍCIO 5

// let horario =prompt("Qual seu horario de aula ? M (matutino), V (Vespertino) ou N (Noturno)")
// const matutino = "M"
// const Vespertino = "V"
// const Noturno = "N"

// if (horario == matutino) {

//     alert("Bom Dia! ")

//     }else if (horario == Vespertino)   {

//      alert("Boa Tarde!")

//     }else if (horario == Noturno){
//      alert("Boa Noite! ")
//     }

// EXERCÍCIO 6

// let horario =prompt("Qual seu horario de aula ? M (matutino), V (Vespertino) ou N (Noturno)")
// const matutino = "M"
// const Vespertino = "V"
// const Noturno = "N"

// switch(horario){

//     case matutino:
//     alert("Bom Dia!")
//     break;

//     case Vespertino:
//     alert("Boa Tarde!")
//     break;

//     case  Noturno:
//     alert("Boa Noite! ")
//    }

// EXERCÍCIO 7

// let generoFilme = prompt('Digite o genero do filme').toLowerCase()
// let valorIngresso = Number(prompt('Digite o valor do Ingresso'))

// if(generoFilme === 'fantasia' && valorIngresso < 15){
//   console.log(`Bom filme`)
//   let comparSnack = prompt('Gostaria de comprar qual snack?')
//   console.log(`com ${comparSnack}`)
// }else{
//   console.log('Escolha outro filme :(')
// } 