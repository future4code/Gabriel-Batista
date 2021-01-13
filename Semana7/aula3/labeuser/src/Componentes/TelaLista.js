import React from 'react'
import styled from 'styled-components'
import axios from "axios";
import AxiosBasico, { axiosConfig, baseUrl } from "../AxiosBasico"

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

const InputsContainer = styled.div`
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
    deletar: false
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
    this.state.deletar ?   axios.delete(`${baseUrl}/${id}`, axiosConfig)
    .then((res) => {
      this.carregarUsuarios();
       })
    .catch((err) => {
      console.log(err)
      console.log(id)
    }) : alert("cacelado")
  }
  render() {

    return (
      <InputsContainer>
        <h2>Usuarios Cadastrados:</h2>
        {this.state.ListaPessoas.map(user => {
          return (
            <TarefaList>
              <Tarefa>
                <p>{user.name}</p>
                <BotaoDelete onClick={() => {this.deleteUser(user.id)}} >Apagar</BotaoDelete>
              </Tarefa>
            </TarefaList>
          )
        })}
      </InputsContainer>

    );
  }
}

export default TelaLista;