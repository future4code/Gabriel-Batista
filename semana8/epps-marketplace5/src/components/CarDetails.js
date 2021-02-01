import React, { Component } from 'react'
import {DescriText, DivBox} from './Styled/StyledSellers'
import {Inputs} from './Styled/StyledProductPage'
import { Detalhes, ProductStyled, DetalhesCarro, ButtonCard, Contato} from './Styled/CarDetailsStyled'

export class CarDetails extends Component {
  state = {
    DetailPage: true,
    ContatoPage: false,
    Car:this.props.Car,
  }

  ChangePage = () => {
    this.setState({
      DetailPage: !this.state.DetailPage,
      ContatoPage: !this.state.ContatoPage,
    })
    if (this.state.ContatoPage) {
      alert("Pedido Enviado, Entraremos em contato em Breve")
    }
  }

  ShowPage = () => {
    if (this.state.DetailPage) {
      return (
        <Detalhes>
          <img width='80%' src={this.state.Car.imagen}></img>
          <DetalhesCarro>
            <p><strong>Preço: </strong>R$ {this.state.Car.price},00</p>
            <p><strong>Marca/Modelo: </strong>{this.state.Car.name} - {this.state.Car.Modelo}</p>
            <p><strong>Prazo de Entrega (dias):</strong> {this.state.Car.shipping}</p>
            <p><strong>Descrição: </strong>{this.state.Car.description}</p>
            <p><strong>Forma de Pagamento: </strong>{this.state.Car.paymentMethod}</p>
          </DetalhesCarro>
        </Detalhes>
      )
    } else
      return (
        <Contato>
          <br></br>
          <DivBox>
            <label htmlFor="input1"> Nome: </label>
            <Inputs id="input1" />
          </DivBox>
          <DivBox>
            <label htmlFor="input2"> E-mail: </label>
            <Inputs id="input2" />
          </DivBox>
          <DivBox>
            <label htmlFor="input3"> Telefone: </label>
            <Inputs id="input3" />
          </DivBox>
          <DivBox>
            <p><label htmlFor="textarea"> Deixe uma mensagem: </label></p>
            <DescriText id="textarea" rows="7" cols="60" />
            <br />
          </DivBox>
        </Contato>
      )
  }
  render() {
    console.log(this.state.cars)
    return (

      <ProductStyled>
        {this.ShowPage()}
        <ButtonCard onClick={this.ChangePage}>{(this.state.DetailPage ? "Fale com o vendedor" : "Enviar")}</ButtonCard>
      </ProductStyled>


    )
  }
}
