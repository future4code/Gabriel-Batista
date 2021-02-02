import React from 'react'
import '../../App.css'
import { useHistory } from "react-router-dom";
import { goToLogin, goToRegister } from '../Routers';




const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => goToLogin(history, "login")}>login</button>
      <button onClick={() => goToRegister(history, "register")}>Register</button>
    </div>
  )
}

export default HomePage
