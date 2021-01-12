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

class Etapa3 extends React.Component {

  render() {
    return (
      <Body>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <p>7. Por que você não terminou um curso de graduação?</p>
        <input></input>
        <p>8. você fez algum curso complementar? </p>
        <form action="/action_page.php">
          <input list="Ensino" name="Ensino" />
          <datalist id="Ensino">
            <option value="Curso técnico" />
            <option value="Curso técnico" />
            <option value="Não fiz curso complementar" />
          </datalist>
        </form>
      </Body>
    );
  }
}


export default Etapa3;