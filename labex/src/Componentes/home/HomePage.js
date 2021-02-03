import React from 'react'
import '../../App.css'
import { useHistory } from "react-router-dom";
import { goToLogin, goToRegister,goToLogout } from '../Routers';
import { BaseContainer } from '../Styled';




const HomePage = () => {
  const history = useHistory();

function logout() {
  localStorage.removeItem('token')
  alert('Deslogado com sucesso')
}

  return (
    <div>
      <button onClick={() => goToLogin(history, "login")}>login</button>
      <button onClick={() => logout()}>logout</button>
      <button onClick={() => goToRegister(history, "register")}>Register</button>
    </div>
  )
}

export default HomePage
