import React, { Component } from 'react'
import { DivBox, DescriText, Buttons, SellerForm, FormTop, FormBottom } from './Styled/StyledSellers'
import axios from 'axios'
import { Inputs } from './Styled/StyledProductPage'
import { Selects } from './Styled/CarDetailsStyled'


export class SellersPage extends Component {
  state = {
    inputMarca: "",
    inputModelo: "",
    inputUrl: "",
    inputAno: "",
    inputPreco: "",
    inputFormaDePagamento: "",
    inputPrazoDeEntrega: "",
    inputCategoria: "",
    inputDescricao: ""
  }

  changeInputMarca = (e) => {
    this.setState({ inputMarca: e.target.value })
  }

  changeInputModelo = (e) => {
    this.setState({ inputModelo: e.target.value })
  }

  changeInputUrl = (e) => {
    this.setState({ inputUrl: e.target.value })
  }

  changeInputAno = (e) => {
    this.setState({ inputAno: e.target.value })
  }

  changeInputPreco = (e) => {
    this.setState({ inputPreco: e.target.value })
  }

  changeInputFormaDePagamento = (e) => {
    this.setState({ inputFormaDePagamento: e.target.value })
  }

  changeInputPrazoDeEntrega = (e) => {
    this.setState({ inputPrazoDeEntrega: e.target.value })
  }

  changeInputCategoria = (e) => {
    this.setState({ inputCategoria: e.target.value })
  }

  changeInputDescricao = (e) => {
    this.setState({ inputDescricao: e.target.value })
  }

  AddCarsForm = (e) => {
    e.preventDefault()
    const body = {
      name: this.state.inputMarca,
      imagen: this.state.inputUrl,
      description: this.state.inputDescricao,
      price: this.state.inputPreco,
      paymentMethod: this.state.inputFormaDePagamento,
      shipping: this.state.inputPrazoDeEntrega,
      Categoria: this.state.inputCategoria,
      Modelo: this.state.inputModelo
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars', body
    ).then(response => {
      this.setState({
        inputMarca: "",
        inputModelo: "",
        inputUrl: "",
        inputAno: "",
        inputPreco: "",
        inputFormaDePagamento: "",
        inputPrazoDeEntrega: "",
        inputCategoria: "",
        inputDescricao: ""
      })
      alert("Veículo cadastrado com sucesso!")
    }).catch(err => {
      alert("Houve um erro, tente novamente mais tarde...")
    })

  }

  render() {
    return (

      <SellerForm>
        <FormTop>

          <DivBox>
            <label htmlFor="input1"> Marca: </label>
            <Inputs
              id="input1"
              placeholder="Insira a marca do veículo"
              type="text"
              value={this.state.inputMarca}
              onChange={this.changeInputMarca}
            />
          </DivBox>

          <DivBox>
            <label htmlFor="input2"> Modelo: </label>
            <Inputs
              id="input2"
              placeholder="Insira o modelo do veículo"
              type="text"
              value={this.state.inputModelo}
              onChange={this.changeInputModelo} />
          </DivBox>

          <DivBox>
            <label htmlFor="input3"> Url: </label>
            <Inputs
              id="input3"
              placeholder="Insira a URL da imagem"
              type="text"
              value={this.state.inputUrl}
              onChange={this.changeInputUrl} />
          </DivBox>

          <DivBox>
            <label htmlFor="input4"> Ano: </label>
            <Inputs
              id="input4"
              placeholder="Insira o ano do veículo"
              type="number"
              value={this.state.inputAno}
              onChange={this.changeInputAno} />
          </DivBox>

          <DivBox>
            <label htmlFor="input5"> Preço: </label>
            <Inputs
              id="input5"
              placeholder="Ex: 25000"
              type="number"
              value={this.state.inputPreco}
              onChange={this.changeInputPreco} />
          </DivBox>

          <DivBox>
            <label htmlFor="input6"> Forma de Pagamento: </label>
            <Inputs
              id="input6"
              placeholder="À Vista, Cartão, PIX..."
              type="text"
              value={this.state.inputFormaDePagamento}
              onChange={this.changeInputFormaDePagamento} />
          </DivBox>

          <DivBox>
            <label htmlFor="input7"> Prazo de Entrega: </label>
            <Inputs
              id="input7"
              placeholder="Quantos dias?"
              type="number"
              value={this.state.inputPrazoDeEntrega}
              onChange={this.changeInputPrazoDeEntrega} />
          </DivBox>

          <DivBox>
            <label htmlFor="input8"> Categoria: </label>
            <Selects
              id="input8"
              placeholder="Esportivo, popular, pickup..."
              type="text"
              value={this.state.inputCategoria}
              onChange={this.changeInputCategoria} >
              <option value=""></option>
              <option value="Passeio">Passeio</option>
              <option value="Familia">Familia</option>
              <option value="Esportivo">Esportivo</option>
              <option value="Viagem">Viagem</option>
            </Selects>
          </DivBox>
        </FormTop>



        <FormBottom>
          <label htmlFor="textarea"> Descreva o veículo: </label>
          <DescriText
            id="textarea"
            rows="7"
            cols="60"
            placeholder="Descreva melhor a sua proposta de venda aqui."
            type="text"
            value={this.state.inputDescricao}
            onChange={this.changeInputDescricao}
          />
          <Buttons onClick={this.AddCarsForm}>Cadastrar</Buttons>
        </FormBottom>
      </SellerForm>

    )
  }
}
