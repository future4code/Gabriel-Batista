import React from "react";
import styled from "styled-components";


const Body = styled.div`
display: flex;
flex-direction: column;
max-width: 95vw;
height: 40vh;
margin: auto;
align-items: center;
justify-content: center;
`

class Etapa1 extends React.Component {

  render() {
    return (
      <Body>
        <h1>Bem vindo ao LabeForms</h1>
        <h3>Vamos Começar?</h3>
            </Body>
    );
  }
}

export default Etapa1;