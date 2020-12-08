const taskList = document.getElementsByClassName('semana')


function addTask(){
let task = document.getElementById('dias-semana')
let taskValue = tarefa.value
// console.log(task.value)
if(task.value === 'domingo') {
    domingo.innerHTML += `<p> ${taskValue}</p>`
    tarefa.value = ''
 } 
 if(task.value === 'segunda' ) {
    segunda.innerHTML += `<p> ${taskValue} </p>`
    tarefa.value = ''
}
 if(task.value === 'terca'){
    terca.innerHTML += `<p> ${taskValue} </p>`
    tarefa.value = ''
}
 if(task.value ==='quarta') {
    quarta.innerHTML += `<p> ${taskValue} </p>`
    tarefa.value = ''
}
 if(task.value ==='quinta' ) {
    quinta.innerHTML += `<p> ${taskValue} </p>`
    tarefa.value = ''
}
 if(task.value === 'sexta') {
    sexta.innerHTML += `<p> ${taskValue} </p>`
    tarefa.value = ''
}
 if(task.value === 'sabado') {
    sabado.innerHTML += `<p> ${taskValue} </p>`
    tarefa.value = ''
} 
if( taskValue.length == 0) {
    alert('Insira uma tarefa!')  
} 

}

