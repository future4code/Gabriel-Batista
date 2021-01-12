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

class Final extends React.Component {

  render() {
    return (
      <Body>
        <h2>Obrigado Pelas Informações!</h2>
        <h4>Nos Vemos em breve</h4>
       </Body>
    );
  }
}


export default Final;