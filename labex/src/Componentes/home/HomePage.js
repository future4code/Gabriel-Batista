import React from 'react'
import '../../App.css'
import { useHistory } from "react-router-dom";
import { goToLogin, goToRegister,goToLogout } from '../Routers';
import { BaseContainer, Buttons, HomeDiv } from '../Styled';




const HomePage = () => {
  const history = useHistory();

function logout() {
  localStorage.removeItem('token')
  alert('Deslogado com sucesso')
}

  return (
    <HomeDiv>
      <Buttons onClick={() => goToLogin(history, "login")}>login</Buttons>
      <Buttons onClick={() => logout()}>logout</Buttons>
      <Buttons onClick={() => goToRegister(history, "register")}>Register</Buttons>
    </HomeDiv>
  )
}

export default HomePage
