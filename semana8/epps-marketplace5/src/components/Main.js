// import axios from 'axios'
import React, { Component } from 'react'
import { MainContainer, MainSearchBar } from './Styled/StyledMain'
import { ProductCardMain } from './ProductCardMain'




export class Main extends Component {
  state = {
    textInput: "",
  }

  onChangeInput = (e) => {
    this.setState({ textInput: e.target.value })
  }

  render() {

    return (
      <MainContainer>
        <MainSearchBar type="text" placeholder='Busque Seu Futuro Carro Aqui'
          onChange={this.onChangeInput}
          value={this.state.textInput}></MainSearchBar>
        <ProductCardMain goToDetail={this.props.goToDetail}  textInput={this.state.textInput} />
      </MainContainer>
    )
  }
}
