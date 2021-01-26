// import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'

export const AboutBaseContainer = styled.div`
display: grid;
grid-template-columns:repeat(3,30%) ;
flex-direction: column;
background-color:#f5f5f6;
width: 100%;
height: 70vh;
align-items:center;
justify-content:space-around;
`
export const Sobre = styled.div`
display: flex;
flex-direction: column;
background-color:#f5f5f6;
width: 95%;
height: 70vh;
text-align:justify;
align-items:center;
justify-content:center;
`

export const FAQ = styled.div`
display: flex;
flex-direction: column;
background-color:#f5f5f6;
width: 95%;
height: 70vh;
text-align:justify;
align-items:center;
justify-content:center;
`

export const Institucional = styled.div`
display: flex;
flex-direction: column;
background-color:#f5f5f6;
width: 95%;
height: 70vh;
text-align:justify;
align-items:center;
justify-content:center;
`




export class AboutUs extends Component {

  render() {

    return (
      <AboutBaseContainer>
        <Sobre>
          <h2>Sobre nós</h2>
          <p>A FutureCar é uma startup voltada à compra e venda de veículos usados. Pensando em inovar no mercado, na FutureCar as pessoas buscam os automóveis dos sonhos de acordo com sua necessidade específica: carros esportivos, carros populares, pickups, microvans e super luxo.</p>
          <p> A experiência é a mesma de visitar uma concessionária! Em nosso site, você acessa todas as informações de forma rápida, confiável e transparente. É só escolher o modelo preferido e fale com o vendedor!</p>
          <p> A ideia da FutureCar é ser uma alternativa digital e desburocratizada às tradicionais, exigindo uma comunicação mais moderna e que passe segurança.</p>
        </Sobre>
        <Institucional>
          <h2>Institucional</h2>
          <p>Há mais de 10 anos na estrada, fomos a primeira startup brasileira a inovar na forma de comprar e vender carros online. Especialista no segmento, temos como combustível a paixão em promover a conquista do seu sonho automotivo e a vontade de oferecer sempre a melhor e mais segura experiência de compra e venda online ;)</p>
          <p><strong>Missão: </strong>Conectar pessoas às melhores condições e informações, e criar meios para que façam a melhor escolha na hora de comprar, vender e usar um veículo.</p>
          <p><strong>Visão: </strong>Para que você possa se mover do melhor jeito. O seu jeito ;)</p>
          <p><strong>Valores: </strong>A ideia é estar ajudar as pessoas a comprar e vender sem dor de cabeça ou simplesmente entender um pouco mais sobre carros.</p>
        </Institucional>
        <FAQ>
          <h2>F.A.Q</h2>
          <p><strong>1.      Como funciona a compra? Posso ver o carro?</strong></p>
          <p>  Nós oferecemos as duas opções. O comprador pode agendar uma visita e conhecer o veículo, inclusive com test drive, mas o comprador pode também optar por conhecer o carro de forma online, e também comprá-lo sem sair de casa. A visita online é feita através de chamada de vídeo por um dos consultores da FutureCar!</p>
          <p><strong>2.      Posso devolver o carro?</strong></p>
          <p>Na opção de compra 100% online, é possível devolver o veículo em 10 dias a contar da data de efetiva entrega. Uma condição é que o veículo esteja nas mesmas condições de entrega.</p>
        </FAQ>
      </AboutBaseContainer>
    )
  }
}
