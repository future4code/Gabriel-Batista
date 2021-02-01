import React from 'react'
import styled from 'styled-components'
import axios from "axios";
import { axiosConfig, baseUrl } from "../AxiosBasico"
import DetalhesUsuario from './DetalhesUsuario'

const TarefaList = styled.ul`
display:flex;
flex-direction:column;
padding: 0;
text-align: center;
justify-content: center;
`

const Tarefa = styled.li`
text-align: center;
list-style: none; 
`

const InputsContainer = styled.section`
text-align: center;
grid-row:2;
grid-column:2;
`

const BotaoDelete = styled.button`
width: 60px;
height:25px;
/* margin: 10% 0% 0% 0%; */
border-radius:10%;
&:hover {
  background-color: #E8E5DA;
};
`;

export class TelaLista extends React.Component {

  state = {
    ListaPessoas: [],
    deletar: false,
    userId: '',
    useremail: '',
    username: ''
  }

  carregarUsuarios = () => {
    const request = axios.get(baseUrl, axiosConfig);
    request
      .then((resposta) => {
        this.setState({ ListaPessoas: resposta.data });
      })
      .catch((erro) => {

        alert("Impossivel localizar os Usuarios :(" + erro.message);
      });
  };
  componentDidMount = () => {
    this.carregarUsuarios();
  };

  deleteUser = (id) => {
    this.setState({ deletar: !this.state.deletar })
    this.state.deletar ? axios.delete(`${baseUrl}/${id}`, axiosConfig)
      .then((res) => {
        this.carregarUsuarios();
        this.setState({ deletar: false })
      })
      .catch((err) => {
      }) : alert("Tem certeza que deseja deletar? caso sim clique novamente no botão")
  }

  selectTarefa = (id) => {
    this.state.ListaPessoas.map((taref) => {
      if (id === taref.id) {
        return (
        this.setState({ userId: taref.id }),
        console.log(this.state.userId),
        this.carregarDetalhes()
        )
      }
    })

  }
  carregarDetalhes = () => {
    const request = axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.userId}`, axiosConfig);
    request
      .then((resposta) => {
        alert("localizado :)");
        this.setState({ userId: '' });
        console.log(resposta);
        // console.log(this.state.username)
      })
      .catch((erro) => {

        alert("Impossivel localizar os Usuarios :(" + erro.message);
      });
  };

  render() {

    return (
      <InputsContainer>
        <h2>Usuarios Cadastrados:</h2>
        {this.state.ListaPessoas.map(user => {
          return (
            <TarefaList>
              <Tarefa>
                <p onClick={() => this.selectTarefa(user.id)}>{user.name}</p>
                <BotaoDelete onClick={() => { this.deleteUser(user.id) }} >Apagar</BotaoDelete>
              </Tarefa>
            </TarefaList>
          )
        })}
      </InputsContainer>

    );
  }
}

export default TelaLista;