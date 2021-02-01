import React from 'react'
import styled from 'styled-components'
import axios from "axios";
import { axiosConfig, baseUrl } from "../AxiosBasico"

const CadastroContainer = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
text-align: center;
align-items: center;
grid-row:2;
grid-column:2;

`
const Cadastro = styled.div`
display:flex;
align-items: center;
flex-direction:column;
justify-content: center;
text-align: center;
width: 30%;
margin:5% 0% 40% 0%;
border-color: black;
border-style:double;
padding:2%;
`
const BotaoSalvar = styled.button`
width: 60px;
height:35px;
margin: 10% 0% 0% 0%;
border-radius:10%;
&:hover {
  background-color: #E8E5DA;
};
`;

export class TelaDeRegistro extends React.Component {
    state = {
         emailInput: '',
        nomeInput: '',
      }

      criaUser = () => {
        const body = {
          name: this.state.nomeInput,
          email: this.state.emailInput
        }
        const request = axios.post(baseUrl, body , axiosConfig);
         request
          .then((resposta) => {
            alert("Criada com sucesso!");
            this.setState({ nomeInput: "" });
            this.setState({ emailInput: "" });
          })
          .catch((erro) => {
            alert("O Usuario Não pode ser Criado");
          });
      };
    
      
  inputNome = (e) => {
    this.setState({ nomeInput: e.target.value });
  };
  inputEmail = (e) => {
    this.setState({ emailInput: e.target.value });
  };
  render() {

    return (
        <CadastroContainer>
          <Cadastro>
            <label forhtml="name">Nome:</label>
            <input required="" id="name" name="name" type="text" onChange={this.inputNome} value={this.state.nomeInput} />
            <label forhtml="email">E-mail:</label>
            <input required="" id="email" name="email" type="email" onChange={this.inputEmail} value={this.state.emailInput} />
            <BotaoSalvar onClick={this.criaUser}>Salvar</BotaoSalvar>
          </Cadastro>
        </CadastroContainer>
    );
  }
}

export default TelaDeRegistro;