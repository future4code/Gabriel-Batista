import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";
import axios from 'axios'
import { axiosConfig, baseUrl } from './componentes/RecursosApi';
import Lista from './componentes/Lista'
import Cadastro from './componentes/CadastroPlaylist'


const Pokedex = styled.div`
display: grid;
grid-template-columns: 40% 60%;
background-color: #51b39a;
flex-direction: column;
max-width: 100vw;
height: 98vh;
`
const TelaHome = styled.div`
background-color: #51b39a;
flex-direction: column;
max-width: 100vw;
height: 98vh;
grid-column: 2;
`
const RegistroBox = styled.div`
background-color: #51b39a;
flex-direction: column;
max-width: 100vw;
height: 40vh;
grid-column: 1;
margin: 15% 0% 0% 5%;
`
const Botaovoltar = styled.button`
background-color: white;
border: 8px solid #b4e5ec;
width: 80px;
height: 40px;
position: absolute;
margin: 1%;
outline: none;
&:hover {
  background-color: #cccccc;
};
`
const Tela = styled.section`
display: flex;
justify-content: center;
align-items: center;
background-color: #e0f5fe94;
border-left: 5px solid white;
position: relative; 
margin: 0% 0% 0% 0%;
max-height:75vh;
max-width: 100vw;
`

class App extends Component {
  state = {
    VisorAtivo: false,
    playList: [],
  }

  componentDidMount() {
    this.pegarTodasPlayLists();
  }

  pegarTodasPlayLists = async () => {
    axios.get(baseUrl, axiosConfig)
      .then((resp) => {
        this.setState({ playList: resp.data.result.list })

      }).catch((erro) => console.log(erro));
  };


  AbrirVisor = () => {
    this.setState({ VisorAtivo: !this.state.VisorAtivo })
  }



  CarregarLista = () => {
    if (this.state.VisorAtivo) {
      return (
        <Lista lista={this.state.playList} />
      )
    }
  }

  render() {

    return (
      <Pokedex>
        <Botaovoltar onClick={this.AbrirVisor}> Abrir </Botaovoltar>
        <RegistroBox>
          <h1>LabeFy</h1>
           <Cadastro>
              
            </Cadastro>
         </RegistroBox>
        <TelaHome>
           <Tela>
           
            {this.CarregarLista()}
          </Tela>
        </TelaHome>
      </Pokedex>
    );
  }
}



export default App;
