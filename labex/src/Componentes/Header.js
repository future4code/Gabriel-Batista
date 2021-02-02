import React from 'react'
import { useHistory } from "react-router-dom";
import { goTolistaviagem, goToHomePage } from './Routers';


const Header = () => {
  const history = useHistory();
  return (
    <div>teste
    <button onClick={() => goToHomePage(history, "/")}>home</button>
    <button onClick={() => goTolistaviagem(history, "listaviagem")}>Lista</button>
  </div>
  )
}

export default Header
