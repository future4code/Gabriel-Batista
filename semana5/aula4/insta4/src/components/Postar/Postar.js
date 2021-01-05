import React from "react";
import "./Postar.css";

class Postar extends React.Component {
           state = {
            nomeDoUsuario:"",
            fotoDoUsuario:"",
            postagemDoUsuario:"",
            listPost:[]
            }
   

  

    aoMudarNome = e => {
        this.setState({
            nomeDoUsuario: e.target.value,
            
        })
        
    }
    aoMudarFoto = e => {
        this.setState({
            fotoDoUsuario: e.target.value,
            
        })
        
    }
    aoMudarPoste = e => {
        this.setState({
            postagemDoUsuario: e.target.value,
            
        })
        
    }


   aoClicarEnviar = () => {
    let novoPost = {
        nome: this.state.nomeDoUsuario,
        avatar: this.state.fotoDoUsuario,
        post: this.state.postagemDoUsuario
    }
    let copiaLista = [...this.state.listPost, novoPost]
    this.setState({listPost:copiaLista})
    
    console.log(copiaLista)
       console.log(this.state.listPost)
        
   }
   
    

 

render() {
    return(
        <div>
            {/* <p>{this.state.copiaLista}</p> */}
            <p>{this.state.nomeDoUsuario}</p>
            <p>{this.state.fotoDoUsuario}</p>
            <p>{this.state.postagemDoUsuario}</p>
            <div>
            
            <label>Nome:</label> <input value={this.state.nomeDoUsuario} onChange={this.aoMudarNome} />
            <br/>
            <label>Avatar:</label> <input value={this.state.fotoDoUsuario} onChange={this.aoMudarFoto} />
            <br/>
            <label>Post:</label> <input value={this.state.postagemDoUsuario} onChange={this.aoMudarPoste} />
            <br/>
            <button onClick={this.aoClicarEnviar} > Enviar </button>
            </div>
        </div>
    );
}



}
export default Postar