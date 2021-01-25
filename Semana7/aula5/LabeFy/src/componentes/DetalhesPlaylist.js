import React, { Component } from 'react';
import '../App.css';
import styled from "styled-components";
import axios from 'axios'
import { axiosConfig, baseUrl } from './RecursosApi';

const Listas = styled.section`
display: grid;
align-items: center;
align-items: center;
height:75vh;
`
const Tarefa = styled.li`
display:flex;
flex-direction:column;
padding: 0;
text-align: center;
grid-column:1;
text-align: center;
list-style: none; 
`


class ListaMusica extends Component {
  state = {
    playListName: '',
    playListdata: [],
  }

  pegarplayList = async () => {
    axios.get(`${baseUrl}/${this.props.nome}/tracks`, axiosConfig)
      .then((resp) => {
        this.setState({ playListdata: resp.data.result.tracks })
        console.log('playListdata :>> ', this.state.playListdata);

      }).catch((erro) => console.log(erro));
  };





  componentWillReceiveProps() {
    this.pegarplayList();
  }

  render() {

    return (
      <Listas>
        <Tarefa>
          <h3>Suas Musicas</h3>
          {this.state.playListdata.map((playList) => {
            return (
              <div onClick={this.props.abrir}>
                <p>Nome: {playList.name}</p>
                <p>Banda: {playList.artist}</p>
                <audio controls src={playList.url}></audio>
             
              </div>
            )
          })}
        </Tarefa>
      </Listas>
    );
  }
}



export default ListaMusica;
