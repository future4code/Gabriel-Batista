import React, { Component } from 'react';
import '../App.css';
import styled from "styled-components";
import linkedinimg from '../img/linkedin.png'
import axios from 'axios'
import { baseUrl } from './RecursosApi';


const Detalhes = styled.section`
display: grid;
justify-content: space-around;
align-items: center;
grid-template-columns: 48% 2% 48%;
grid-template-rows: 25vh 35vh 15vh;
align-items: center;
width: 99%;
height: 75vh;
`
const Status = styled.section`
display: grid;
grid-row: repeat(6,2vh);
grid-template-columns: repeat(5,1fr);
justify-content: space-around;
align-items: center;
width: 99%;
height: 99%;
`

const Foto = styled.div`
display: flex;
flex-direction: column;
color: black;
grid-row: 1;
width: 99%;
height: 99%;

`
const Sobre = styled.div`
color: black;
grid-row: 1 / 4;
grid-column: 3 / 3;
width: 99%;
height: 99%;
`
const Sobremim = styled.div`
color: black;
width: 99%;
height: 55%;
`
const Grafico = styled.div`
color: black;
grid-row: 2;
grid-column: 1;
width: 99%;
height: 80%;
align-items: center;
background-color: #93A3BC;
border-radius: 8%;
`
const Contato = styled.div`
color: black;
grid-row: 3 / 4;
grid-column: 1;
width: 99%;
height: 99%;
justify-items: center;
`

const Botaovoltar = styled.button`
color: black;
grid-row: 3 / 4;
grid-column: 2;
margin-left: 10%;
margin: 15vh 0% 0% -4vw ;
background-color: white;
border: 8px solid #b4e5ec;
border-radius: 50%;
width: 120px;
height: 120px;
outline: none;
&:hover {
  background-color: #372A34;
};
`


class DetalhesPokes extends Component {
  state = {
    pokeName: "bulbasaur",
    imgPoke: [],
  }

  selectTarefa = (name) => {
    this.props.lista.map((e) => {
      if (name === e.name) {
        this.setState({ pokeName: e.name }, () => {
                })
  console.log(this.state.pokeName);
          console.log(e.name);
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
          console.log(resposta.data.sprites.front_default)
          console.log(this.state.imgPoke)
        })

      }).catch((erro) => console.log(erro));
  };


  render() {
    return (
      <Detalhes>
        <Foto >
          <label className='texto'>{this.state.pokeName}</label>
          <div>
            <img className='moldura' src={this.state.imgPoke} />
          </div>
        </Foto>
        <Sobre >
          <label className='texto'>Detalhes</label>
          <Sobremim>
          </Sobremim>
          <label className='texto'>Pontos Fortes</label>
          <div>
            <li>
            </li>
            <li>
            </li>
          </div>
        </Sobre>
        <Grafico >
          <Status >
            <h3 className='texto'>Status</h3>
            <label className='Stats'>Vida</label>
            <label className='Stat1'> </label>
            <label className='Stats2'>Attack</label>
            <label className='Stat2'></label>
            <label className='Stats3'>Speed</label>
            <label className='Stat3'></label>
            <label className='Stats4'>Defense</label>
            <label className='Stat4'></label>
          </Status>
        </Grafico>
        <Botaovoltar onClick={this.props.voltar}>
          voltar
        </Botaovoltar>
      </Detalhes>
    );
  }
}



export default DetalhesPokes;
