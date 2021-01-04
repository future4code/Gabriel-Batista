import React from "react";
import styled from "styled-components";


const Body = styled.div`
display: flex;
flex-direction: column;
max-width: 95vw;
height: 80vh;
margin: auto;
align-items: center;
justify-content: center;
`


class Etapa2 extends React.Component {

  render() {
    return (
      <Body>
        <h3>ETAPA 2 - INFORMAÇÕES DP ENSINO SUPERIOR</h3>
        <p>5. Qual o Curso?</p>
        <input></input>
        <p>6. Qual a Unidade de ensino? </p>
        <input></input>
      </Body>
    );
  }
}


export default Etapa2;