import React, { Component } from 'react';
import '../App.css';
import styled from "styled-components";
import ListaMusica from './DetalhesPlaylist';
import axios from 'axios'
import { axiosConfig, baseUrl } from './RecursosApi';

const Listas = styled.section`
display: grid;
grid-template-columns:30% 70%;
grid-template-rows: 80% 20%;
align-items: center;
/* justify-content: start; */
width: 100vw;
height:75vh;
grid-column: 2;
grid-row: 1;
`
const ContainerMusica = styled.section`
display: grid;
align-items: center;
grid-column: 2;
grid-row: 1;
`

const Tarefa = styled.li`
display:flex;
flex-direction:column;
padding: 0;
grid-column:1;
text-align: center;
list-style: none; 
grid-column: 1;
`
const Info = styled.section`
display:flex;
flex-direction:column;
padding: 0;
grid-column:1;
text-align: center;
list-style: none; 
grid-column: 1;
`


class Lista extends Component {
  state = {
    playListName: '',
    deletar: false,
  }
  selectTarefa = (id) => {
    this.props.lista.map((e) => {
      if (id === e.id) {
        this.setState({ playListName: e.id }, () => {
        })
      }
    })
  }
  CarregarLista = () => {
    if (this.state.playListName != '') {
      return (
        <ListaMusica nome={this.state.playListName}></ListaMusica>
      )
    }
  }

  // deleteUser = () => {
  //    axios.delete(`${baseUrl}/${this.state.playListName}`, axiosConfig)
  //     .then((res) => { this.setState({ deletar: !this.state.deletar })
  //              })
  //     .catch((err) => { console.log(err)}) 
  // }

  render() {

    return (
      <Listas>
        <Tarefa>
          <h3>Suas playlists</h3>
          {this.props.lista.map((playList) => {
            return (
              <div>
                <p onClick={() => this.selectTarefa(playList.id)} key={playList.url} value={playList.url}>{playList.name}</p>
                <button >deletar</button>
              </div>
            )
          })}
        </Tarefa>
        <Info>
          <p>clique duas vezes no nome para mostrar a lista de musicas</p>
        </Info>
        <ContainerMusica>
          {this.CarregarLista()}
        </ContainerMusica>
      </Listas>
    );
  }
}



export default Lista;
