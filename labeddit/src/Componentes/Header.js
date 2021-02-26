import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import GlobalStateContext from '../Context/GlobalStateContext';
import { HeaderBox, Buttons, MainSearchBar } from './Styled';
import LoginPage from './loginPages/LoginPage'
import RegisterPage from './loginPages/RegisterPage'

const Header = () => {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [inscreverse, setinscreverse] = useState(false);

  const CarregarLista = () => {
    if (inscreverse) {
      return (<RegisterPage />)
    } else if (states.login) {
      return (<LoginPage />)
    }
  }
  const logout = () => {
    localStorage.removeItem("token")
    window.alert("Deslogado com Sucesso")
    requests.getPostList()
  }

  return (
    <HeaderBox>
      <MainSearchBar></MainSearchBar>
      <Buttons onClick={() => { setinscreverse(false) || setters.setLogin(!states.login) }}>{states.login ? 'Voltar' : 'Entrar'}</Buttons>
      {localStorage.token ?
        <Buttons onClick={() => { logout() }}>Logout</Buttons>
        :
        null
      }
      <Buttons onClick={() => { setters.setLogin(false) || setinscreverse(!inscreverse) }}> {inscreverse ? 'Voltar' : 'Registrar-se'}</Buttons>
      {CarregarLista()}
    </HeaderBox>
  )
}

export default Header
