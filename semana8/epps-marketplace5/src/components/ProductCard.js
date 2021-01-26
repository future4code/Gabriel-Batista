import React, { Component } from 'react'
import {ImageCard,PCard } from './Styled/StyledProductCard'
import {ProductCardItem} from './Styled/StyledProductPage'

export class ProductCard extends Component {

  render() {
    return (
      <div>

      <ProductCardItem>
          <PCard>{this.props.itemName}</PCard>
          <PCard>{this.props.itemPrice}</PCard>
          <ImageCard scr={this.props.itemUrl} alt="Imagem do produto" />     
      </ProductCardItem>
      </div>

    )
  }
}
