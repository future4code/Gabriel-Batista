import React, { Component } from 'react'
import { HeaderBar, Button, ImgLogo, HeaderStyled, HeaderContainer, ImgBandeira } from './Styled/StyledHeader'


export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderStyled>
        </HeaderStyled>
        <HeaderBar>   
        <ImgBandeira src="https://i.imgur.com/8XSUODo.png" />
          <Button onClick={this.props.home}>FUTURECAR</Button>
          <Button onClick={this.props.sell}>VENDA</Button>
          <Button onClick={this.props.buy}>COMPRA</Button>
          <ImgLogo src="https://i.imgur.com/L33bCT9.png" />
          </HeaderBar>
      </HeaderContainer>
    );
  }
}