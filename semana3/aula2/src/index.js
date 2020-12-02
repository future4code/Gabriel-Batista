// 1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)

// console.log("e. ", typeof resultado)

// resposta
// a= false
// b= false
// c= true 

// 2
// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i+1] = 19
// console.log('e. ', array)

// const valor = array[i+6]
// console.log('f. ', valor)

// resposta
// a = undefined
// b = null
// c = 11
// d = 3
// e =  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f = 9

// 3.1


// let Idade=""
// let IdadeAmigo=""


// Idade=prompt("Qual sua idade?")
// IdadeAmigo=prompt("Qual a idade do seu melhor amigo?")

// const resultado = Idade === IdadeAmigo
// console.log("Sua idade é maior do que a do seu melhor amigo?"+ resultado)

// console.log(Idade-IdadeAmigo)


// 3.2



// let NumeroPar = ''
// NumeroPar=prompt("informe um numero par?")

// console.log(NumeroPar/2)

//caso o numero seja impar a divisão ocorre normalmente.

// 3.3


// let listaDeTarefas = ['terefa1','tarefa2','tarefa3']

// terefa1=prompt("informe sua primeira Tarefa?")
// terefa2=prompt("informe sua segunda Tarefa?")
// terefa3=prompt("informe sua terceira Tarefa?")

// console.log(terefa1,terefa2,terefa3)

// let remover
// remover=prompt("remova uma Tarefa! terefa1, terefa2 ou terefa3")

// listaDeTarefas.splice(1, 1);
// console.log(listaDeTarefas)


// 3.4
// let Nome = ''
// let Email =''

// Nome=prompt("Qual seu nome?")
// Email=prompt("Qual seu e-mail?")
// console.log("O e-mail "+ Email+" foi cadastrado com sucesso. Seja bem-vinda(o) "+Nome+" !")

let Nome =''
const Masculino = "M"
const Feminino = "F"
const Naoinformado = "N"

Nome=prompt("Qual seu nome?")
Sexo=prompt("Qual seu sexo? M,F ou N")

if (Sexo == Masculino) {

    alert("Bem-vindo "+Nome+" !")
    
    }else if (Sexo == Feminino)   {
    
     alert("Bem-vinda "+Nome+" !")

    }else if (Sexo == Naoinformado){
     alert("Bem-vinde "+Nome+" !")
    }

