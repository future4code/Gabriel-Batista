// // Exemplo 1 - while (Coxinhas)

// let estomago = 0;

// while (estomago < 100) {
//      estomago = estomago + 10
//      console.log("Quero comer mais coxinhas")
//  }

//  console.log("Estou satisfeita")



//  let continuarComendo = true
//  let estomago = 0

//  while (continuarComendo) {
//      estomago += 10
//      console.log("Quero comer mais coxinhas")
//      if (estomago === 100){
//          continuarComendo = false
//          console.log("Estou satisfeita")
//      }
//  }

//  // Exemplo 2 - for

//  const numeros = [14, 67, 89, 15, 23]

//  for (let i = 0; i < 5; i++){
//      const elemento = numeros[i]
//      console.log(elemento)
//  }

// // -------------------------------------------------------------

// // Exercício 1 - While

// // Teste: 10, 3, 50, 7, 0 => resultado 70
//  let naoRecebeuZero = true
//  let soma = 0

//  while (naoRecebeuZero){
//      const numero = Number(prompt("Insira um número diferente de 0 para somar:"))
//      soma = soma + numero
//      if (numero === 0){
//          naoRecebeuZero = false
//      } 
//  }

//  console.log("Sua soma é: ", soma)


// // Exercício 2 - For com array

//  const numeros = [11, 15, 18, 14, 12, 13]
//  let maior = 0

//  for (let i = 0; i < numeros.length; i++) {
//      if (numeros[i] > maior){
//          maior = numeros[i]
//      }
//  }

//  console.log("O maior número é: ", maior)

// // Exercício 2 usando For of

//  const numeros = [11, 15, 18, 14, 12, 13]
//  let maior = 0

//  for (let num of numeros) {
//      if (num > maior){
//          maior = num
//      }
//  }

//  console.log("O maior número é: ", maior)


// // Exercício 3 - for of

//  const palavras = ["Oi", "Sumido", "tudo bem?", "Saudades"]
//  let frase = ""

//  for (let palavra of palavras) {
//      frase = frase + palavra + " "
    
//  }

//  console.log(frase)






//EXERCÍCIO 1







//EXERCÍCIO 2






//EXERCÍCIO 3

//A
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for(let pos=0; pos<array.length;pos++){
// console.log(array[pos])
// }

//B
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for(let pos=0; pos<array.length;pos++){
// console.log(array[pos]/10)
// }


//C

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for(let pos=0; pos<array.length;pos++){
   
//     if (pos%2 == 0)
//     console.log(array[pos])
//     else
//     console.log("impar")
// }

//D / E

// const array = ['1', '4', '5','15','25','40']
// for(let pos=0; pos<array.length;pos++){
// console.log("O elemento do índex  é: ",array[pos])
// }
// let valorMaximo = 5
// let ValorMinimo = 0

// for(let pos=0; pos<array.length;pos++){


//     if (pos<=ValorMinimo)
//     console.log('o menor numero é '+array[pos])

//     if (pos>=valorMaximo)
//      console.log('o maior numero é '+array[pos])

// }