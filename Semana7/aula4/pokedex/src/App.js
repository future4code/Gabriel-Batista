import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";
import DetalhesPokes from './componentes/DetalhesPokes';
import ListaPokes from './componentes/ListaPokes'
import axios from 'axios'
import { baseUrl } from './componentes/RecursosApi';

const TopBars = styled.div`
border-radius: 50px 50px 0 0;
border-bottom: 2px solid black;
min-height: 11VH;
max-height: 40VH;
`
const BottomBars = styled.div`
border-radius: 0 0 40px 40px;
border-top: 3px solid black;
min-height: 10VH;
max-height: 40VH;
`
const Pokedex = styled.div`
display: flex;
flex-direction: column;
max-width: 50vw;
height: 95vh;
margin: auto;
margin-top: 1%;
`

const Botaoabrir = styled.button`
background-color: white;
border: 8px solid #b4e5ec;
border-radius: 50%;
width: 120px;
height: 120px;
position: absolute;
outline: none;
&:hover {
  background-color: #372A34;
};
`

const Tela = styled.section`
display: flex;
justify-content: center;
align-items: center;
background-color: #e0f5fe94;
border-right: 5px solid white;
border-left: 5px solid white;
position: relative; 
padding: 0.5px;
max-height:75vh;
max-width: 65vw;
`

class App extends Component {
  state = {
    VisorAtivo: false,
    DevAtivo: false,
    listaPokemons: [],
    imagemPokemon: '',
    pokeID: '',
  }

  componentDidMount() {
    this.pegarListaPokemons();
  }

  pegarListaPokemons = async () => {
    try {
      const resposta = await axios.get(`${baseUrl}/pokemon?limit=9`)
      this.setState({ listaPokemons: resposta.data.results })
    } catch (erro) {
      console.log(erro)
    }

  }

  AbrirVisor = () => {
    this.setState({ VisorAtivo: !this.state.VisorAtivo, DevAtivo: false })
  }


  AbrirPoke = () => {
    this.setState({ DevAtivo: true, VisorAtivo: false });
  }

  CarregarLista = () => {
    if (this.state.VisorAtivo) {
      return (
        <ListaPokes lista={this.state.listaPokemons} abrir={this.AbrirPoke} />
      )
    }
    else if (this.state.DevAtivo) {
      return (
        <DetalhesPokes lista={this.state.listaPokemons} voltar={this.AbrirVisor} />
      )
    }

    return (
      <Botaoabrir
        onClick={this.AbrirVisor}>
      </Botaoabrir>
    )
  }

  render() {

    return (
      <Pokedex>
        <TopBars className='top-bar'></TopBars>
        <Tela>
          {this.CarregarLista()}
        </Tela>
        <BottomBars className='bottom-bar'></BottomBars>
      </Pokedex>
    );
  }
}



export default App;
