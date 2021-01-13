import React from 'react'
import styled from 'styled-components'
import axios from "axios";
import { axiosConfig, baseUrl } from "../AxiosBasico"

const TarefaList1 = styled.ul`
display:flex;
flex-direction:column;
padding: 0;
text-align: center;
justify-content: center;
`

const Tarefa1 = styled.li`
text-align: center;
list-style: none; 
`

const InputsContainer1 = styled.div`
text-align: center;
grid-row:2;
grid-column:2;
`

export class DetalhesUsuario extends React.Component {

  state = {
    ListaPessoas: [],
    deletar: false,
    userId: this.props.idUsuario
  }

  carregarDetalhes = () => {
    const request = axios.get(`${baseUrl}/${this.state.userId}`, axiosConfig);
    request
      .then((resposta) => {
        alert("localizado :)");
        this.setState({ userId: '' })
      })
      .catch((erro) => {

        alert("Impossivel localizar os Usuarios :(" + erro.message);
      });
  };

  render() {

    return (<div>
      {/* {this.carregarDetalhes()} */}
    </div>
    );
  }
}

export default DetalhesUsuario;