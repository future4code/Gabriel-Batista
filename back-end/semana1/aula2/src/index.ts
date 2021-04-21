enum Cor {
    vermelho = "vermelho", // e não 0
    laranja = "laranja",
    amarelo = "amarelo",
    verde = "verde",
    azul = "azul",
    anil = "anil",
    violeta = "violeta"
 }
 
 export type Pessoa  = {
    nome: string,
    idade: number,
    corFavorita: string
 }
 
 const pessoa1: Pessoa  = {
    nome: 'nome1',
    idade: 61,
    corFavorita: Cor.vermelho,
  }
 
 const pessoa2: Pessoa  = {
    nome: 'nome2',
    idade: 55,
    corFavorita: Cor.verde,
 }
 
 const pessoa3: Pessoa  = {
    nome: 'nome3',
    idade: 40,
    corFavorita: Cor.azul,

 }
 
 export const Pessoa: Pessoa [] = [pessoa1, pessoa2, pessoa3]
 
 console.log(`pessoa`, Pessoa)