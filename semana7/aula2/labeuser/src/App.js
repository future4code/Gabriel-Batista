import React from 'react'
import styled from 'styled-components'
import axios from "axios";

const ContainerPrincipal = styled.div`
display: grid;
grid-template-columns: 17% 82.5%;
grid-template-rows: 5% 89% 5%;
position: relative; 
height:100vh;
width: 100vw;
gap: 0.5%;
`;

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
    listaAtiva: false,
    cadastroAtivo: false,
    ListaPessoas: [],
    emailInput: '',
    nomeInput: '',
    isToggleOn: true,
  }


  criaUser = () => {
    const body = {
      name: this.state.nomeInput,
      email: this.state.emailInput
    }

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "gabriel-marques-epps"
        }
      }
    );

    request
      .then((resposta) => {
        alert("Criada com sucesso!");
        this.carregarUsuarios();
        this.setState({ nomeInput: "" });
        this.setState({ emailInput: "" });
      })
      .catch((erro) => {
        alert("Nao consegui criar o Usuario :(");
      });
  };

  carregarUsuarios = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "gabriel-marques-epps"
        }
      }
    );

    request
      .then((resposta) => {
        this.setState({ ListaPessoas: resposta.data });
        console.log(resposta.data)
        console.log(this.state.ListaPessoas)
      })
      .catch((erro) => {

        alert("Impossivel localizar os Usuarios :(" + erro.message);
      });
  };

  componentDidMount = () => {
    this.carregarUsuarios();

  };

  inputNome = (e) => {
    this.setState({ nomeInput: e.target.value });
  };
  inputEmail = (e) => {
    this.setState({ emailInput: e.target.value });
  };

  MudarTela = () => {
    this.setState({ ListaAtiva: !this.state.ListaAtiva });
    this.setState({ isToggleOn: !this.state.isToggleOn });
    this.setState({ CadastroAtivo: !this.state.CadastroAtivo })
  };

  CarregarLista = () => {
    if (this.state.ListaAtiva) {
      return (
        <InputsContainer>
          <h2>Usuarios Cadastrados:</h2>
          {this.state.ListaPessoas.map(user => {
            return (
              <TarefaList>
                <Tarefa>
                  <p>{user.name}</p>
                </Tarefa>
              </TarefaList>
            )
          })}
        </InputsContainer>
      )
    }
    else {
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
      )
    }
  };


  render() {

    return (
      <ContainerPrincipal>
        <Menu>
          <BotaoMenu onClick={this.MudarTela}>{this.state.isToggleOn ? 'Lista de Usuarios' : 'Cadastro'}</BotaoMenu>
        </Menu>
        {this.CarregarLista()}
      </ContainerPrincipal>
    );
  }
}

export default App;
