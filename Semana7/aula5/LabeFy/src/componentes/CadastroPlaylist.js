import React, { Component } from 'react';
import '../App.css';
import styled from "styled-components";
import ListaMusica from './DetalhesPlaylist';
import axios from 'axios'
import { axiosConfig, baseUrl } from './RecursosApi';

const ContainerRegistro = styled.section`
display: grid;
text-align: center;
align-items: center;
width: 20vw;
height:45vh;
grid-column: 2;
grid-row: 1;
`


class Cadastro extends Component {
  state = {
    inputPlaylist: '',
    inputNome: '',
    inputArtista: '',
    inputLink: '',
  }

  inputPlaylist = (e) => {
    this.setState({ inputPlaylist: e.target.value });
  };
  inputNome = (e) => {
    this.setState({ inputNome: e.target.value });
  };
  inputArtista = (e) => {
    this.setState({ inputArtista: e.target.value });
  };
  inputLink = (e) => {
    this.setState({ inputLink: e.target.value });
  };


  createUser = () => {
    const body = {
      name: this.state.inputPlaylist,
      }

    axios.post(baseUrl, body, axiosConfig)
    .then((res) => {
      alert("Usuário criado com sucesso!!")
      this.setState({inputName: '', inputEmail: ''})
    })
    .catch((err) => {
      alert("Erro: usuário não pode ser criado :(")
    })
  }


  render() {

    return (
      <ContainerRegistro>
        <h2>Crie suas playlists</h2>
        <label forhtml="name">Nome da Nova playList</label>
        <input required="" id="name" name="name" type="text" onChange={this.inputPlaylist} value={this.state.inputPlaylist} />
        <button onClick={this.criaUser}>criar</button>
        <label forhtml="email">Nome Musica</label>
        <input required="" id="nmusic" type="text" onChange={this.inputNome} value={this.state.inputNome}/>
        <label forhtml="email">Cantor/Banda</label>
        <input required="" id="artista"  type="text" onChange={this.inputArtista} value={this.state.inputArtista}/>
        <label forhtml="email">Link.Mp3</label>
        <input required="" id="link"  type="text" onChange={this.inputLink} value={this.state.inputLink}/>
        <button onClick={this.criaUser}>Salvar</button>
      </ContainerRegistro>
    );
  }
}



export default Cadastro;
