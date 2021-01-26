import React, { Component } from 'react'
import axios from 'axios'
import { Selects } from './Styled/CarDetailsStyled'
import { ProductStyledItem, ProductStyled, ProductMenu, ProductSearch, ProductCardItem, Inputs } from './Styled/StyledProductPage'
import { ContainerCard, PCard, ImageCard, ButtonCard } from './Styled/StyledProductCard'
import { MainSearchBar } from './Styled/StyledMain'

export class ProductPage extends Component {
  state = {
    productlist: [],
    inputMin: 1,
    inputMax: 500000,
    inputText: '',
    inputDate: 500,
    inputTipo: 'Passeio',
  }

  componentDidMount() {
    this.getAllCars()
  }

  getAllCars = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars')
      .then((response) => {
        this.setState({ productlist: response.data.cars })
        console.log(response.data.cars)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  onChangeFilterMin = (e) => {
    this.setState({ inputMin: e.target.value })
  }

  onChangeFilterMax = (e) => {
    this.setState({ inputMax: e.target.value })
  }

  onChangeFilterText = (e) => {
    this.setState({ inputText: e.target.value })
  }

  onChangeFilterDate = (e) => {
    this.setState({ inputDate: e.target.value })
  }

  onChangeFiltertipo = (e) => {
    this.setState({ inputTipo: e.target.value })
  }

  ListaFiltrada = () => {
    const listaFiltradaNome = this.state.productlist.filter(item => item.name.includes(this.state.inputText))
    const listaFiltradaTipo = listaFiltradaNome.filter(item => item.Categoria == this.state.inputTipo)
    const listaFiltradaMin = listaFiltradaTipo.filter(item => item.price >= this.state.inputMin)
    const listaFiltradaMax = listaFiltradaMin.filter(item => item.price <= this.state.inputMax)
    const listaFiltradaDate = listaFiltradaMax.filter(item => item.shipping <= this.state.inputDate)
    return listaFiltradaDate
  }

  render() {
    const ListaFiltrada = this.ListaFiltrada()

    return (
      <ProductStyled>
        <ProductMenu>
          <label for="vmax">Tipos De Veículos</label>
          <Selects id="objetivo"  value={this.state.inputTipo}
            onChange={this.onChangeFiltertipo} >
            <option value="Passeio">Passeio</option>
            <option value="Familia">Familia</option>
            <option value="Esportivo">Esportivo</option>
            <option value="Viagem">Viagem</option>
          </Selects>
          <label for="entrega">Entrega:</label>
          <Inputs
            value={this.state.inputDate}
            onChange={this.onChangeFilterDate}
            type="number" placeholder='insira o número de dias' id="entrega" />
          <label for="vmin">Valor Mínimo</label>
          <Inputs
            value={this.state.inputMin}
            onChange={this.onChangeFilterMin}
            type="number"
            min='0'
            id="vmin" />
          <label for="vmax">Valor Máximo</label>
          <Inputs
            value={this.state.inputMax}
            onChange={this.onChangeFilterMax}
            type="number"
            min="0"
            id="vmax" />
        </ProductMenu>
        <ProductSearch>
          <MainSearchBar onChange={this.onChangeFilterText} type="text" id="título" placeholder="Busque seu carro" />
        </ProductSearch>
        <ProductCardItem>
          <ProductStyledItem>
            {ListaFiltrada.map((item) => {
              return (
                <ContainerCard>
                  <ImageCard src={item.imagen} />
                  <PCard>{item.name} - {item.Modelo}</PCard>
                  <PCard>R$ {item.price},00</PCard>
                  <ButtonCard onClick={() => this.props.goToDetail(item)}>Comprar</ButtonCard>
                </ContainerCard>
              )
            })}


          </ProductStyledItem>
        </ProductCardItem>
      </ProductStyled>

    )
  }
}

