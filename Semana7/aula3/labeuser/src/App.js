import React from 'react'
import styled from 'styled-components'
import axios from "axios";
import TelaDeRegistro from './Componentes/TelaDeRegistro'
import TelaLista from './Componentes/TelaLista'
import AxiosBasico, { axiosConfig, baseUrl } from "./AxiosBasico"

const ContainerPrincipal = styled.div`
display: grid;
grid-template-columns: 17% 82.5%;
grid-template-rows: 5% 89% 5%;
position: relative; 
height:100vh;
width: 100vw;
gap: 0.5%;
text-align: center;
justify-content: center;
`;

const BotaoMenu = styled.button`
width: 150px;
height:30px;
margin: 85% 0% 0% 0%;
&:hover {
  background-color: #E8E5DA;
};
`;
const Menu = styled.div`
display:grid;
align-items: flex-start;
text-align: center;
justify-content: center;
width: 100%;
border-color: black;
border-style:double;
grid-row: 1/4;
grid-column:1;
`


class App extends React.Component {
  state = {
    listaAtiva: true,
    ListaPessoas: [],
    isToggleOn: true,
  }


  MudarTela = () => {
    this.setState({ listaAtiva: !this.state.listaAtiva });
    this.setState({ isToggleOn: !this.state.isToggleOn });
  };


  CarregarLista = () => {
    if (this.state.ListaAtiva) {
      return (
        <TelaLista lista={this.state.ListaPessoas} carregarUsuarios={this.carregarUsuarios} />
      )
    }
    else {
      return (
        <TelaDeRegistro />
      )
    }
  };


  render() {

    return (
      <ContainerPrincipal>
        <h1>LabeUsers</h1>
        <Menu>
          <BotaoMenu onClick={this.MudarTela}>{this.state.isToggleOn ? 'Lista de Usuarios' : 'Cadastro'}</BotaoMenu>
        </Menu>
        {this.state.listaAtiva ? <TelaDeRegistro /> : <TelaLista lista={this.state.ListaPessoas} />}
      </ContainerPrincipal>
    );
  }
}

export default App;
