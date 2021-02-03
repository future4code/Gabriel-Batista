import React from 'react'
import { useHistory } from "react-router-dom";
import HomePage from './home/HomePage';
import { goTolistaviagem, goToHomePage } from './Routers';
import {HeaderBox} from './Styled'



const Header = () => {
  const history = useHistory();
  return (
    <HeaderBox>
    <button onClick={() => goToHomePage(history, "/")}>home</button>
    <button onClick={() => goTolistaviagem(history, "listaviagem")}>Lista</button>
    <HomePage></HomePage>
  </HeaderBox>
  )
}

export default Header
