import React from 'react'
import { useHistory } from 'react-router-dom';
import '../../App.css'
import { goToAdm } from '../Routers'


const LoginPage = () => {
  const history = useHistory();
  return (
    
    <div>
     <input placeholder='nome'></input>
     <input placeholder='senha'></input>
     <button onClick={() => goToAdm(history, "admpage")}>entrar</button>
    </div>

  )
}

export default LoginPage
