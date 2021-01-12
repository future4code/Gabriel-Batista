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

class Etapa1 extends React.Component {

  render() {
    return (
      <Body>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <p>1. Qual o seu nome?</p>
        <input></input>
        <p>2. Qual sua idade? </p>
        <input></input>
        <p>3. Qual seu email? </p>
        <input></input>
        <p>4. Qual a sua escolaridade?</p>
        <form action="/action_page.php">
          <input list="Ensino" name="Ensino" />
          <datalist id="Ensino">
            <option value="Ensino médio incompleto" />
            <option value="Ensino médio completo" />
            <option value="Ensino superior incompleto" />
            <option value="Ensino superior completo" />
          </datalist>
        </form>
      </Body>
    );
  }
}

export default Etapa1;