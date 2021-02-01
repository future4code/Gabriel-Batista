import React, { Component } from 'react';
import '../App.css';
import styled from "styled-components";
import axios from 'axios'
import { baseUrl } from './RecursosApi';

const Telapokes = styled.section`
display: grid;
grid-template-columns: repeat(3,90%);
grid-template-rows: repeat(3,20fr);
align-items: center;
justify-content: space-around;
align-items: center;
max-width: 18vw;
height: 75vh;
`

const Cardpokes = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 92%;
height: 93%;
margin-left: 4%;
border-radius: 20%;
background-color: #CCDDE2;
&:hover {
  background-color: #93A3BC;}`;



class ListaPokes extends Component {
  state = {
    pokeName: "bulbasaur",
    imgPoke: [],
  }

  selectTarefa = (name) => {
    this.props.lista.map((e) => {
      if (name === e.name) {
        this.setState({ pokeName: e.name }, () => {
          console.log('this.state.pokeName :>> ', this.state.pokeName);
          console.log('ename :>> ', e.name);
        })

      }
    })
  }
  componentDidMount() {
    this.pegarImagem();
  }

  pegarImagem = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokeName}`)
      .then((resposta) => {
        this.setState({ imgPoke: resposta.data.sprites.front_default }, () => {
             })
        console.log(this.state.imgPoke)

      }).catch((erro) => console.log(erro));
  };

  render() {

    return (
      <Telapokes >
        {this.props.lista.map((pokemon) => {
          return (
            <Cardpokes onClick={this.props.abrir}>
              <img src={this.state.imgPoke} alt={""} />
              <p onClick={() => this.selectTarefa(pokemon.name)} key={pokemon.url} value={pokemon.url}>{pokemon.name}</p>
            </Cardpokes>
          )
        })}

      </Telapokes>
    );
  }
}



export default ListaPokes;
