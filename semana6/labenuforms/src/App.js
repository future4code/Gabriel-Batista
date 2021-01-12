import './App.css';
import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import Home from "./components/Home";


const Body = styled.div`
display: flex;
flex-direction: column;
max-width: 95vw;
height: 80vh;
margin: auto;
align-items: center;
justify-content: center;
`


export default class App extends React.Component {
  state = {
    etapa: 0,
   };

  mostrarEtapa = () => {
    if (this.state.etapa <= 4) {
      this.setState({ etapa: this.state.etapa + 1 });
    } else {
      this.setState({ etapa: 0 });
    }
  };

  paginaAtual = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Home />;
    }
  };

  render() {
    const Proximo = this.state.etapa <= 3 && (
      <button onClick={this.mostrarEtapa}>Próximo</button>
    );
    return (
      <Body>
        {this.paginaAtual()}
        {Proximo}
       </Body>
    );
  }
}
