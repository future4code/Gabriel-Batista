

function adicionaTexto() {
    const container = document.getElementById("container-de-posts")
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")
    container.innerHTML += `<div class='Poste'><h1>${titulo.value}</h1><h2>${autor.value}</h2><p>${conteudo.value}</p></div>`
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}

function Botao(evento){
    console.log(evento)
    adicionaTexto()
}

function Enter(evento){
    if (evento.key === 'Enter'){
        console.log(evento)
        adicionaTexto()
    }
}
