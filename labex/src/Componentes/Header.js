import React from 'react'
import { useHistory } from "react-router-dom";
import HomePage from './home/HomePage';
import { getPaises } from './hooks/Hooks';
import { goTolistaviagem, goToHomePage } from './Routers';
import {Buttons, HeaderBox} from './Styled'



const Header = () => {
  const history = useHistory();
  return (
    <HeaderBox>
    <Buttons onClick={() => goToHomePage(history, "/")}>home</Buttons>
    <Buttons onClick={() => goTolistaviagem(history, "listaviagem")}>Lista</Buttons>
    <HomePage></HomePage>
  </HeaderBox>
  )
}

export default Header
