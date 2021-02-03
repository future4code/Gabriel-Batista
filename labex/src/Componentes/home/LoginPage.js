import React, { useState , useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import '../../App.css'
import { goToAdm } from '../Routers'
import { BaseContainer } from '../Styled';


export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      history.push("/admpage")
    }
  }, [history])

  const login = () => {
    const body = {
      email: email,
      password: password
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-marques-epps/login", body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        history.push('/admpage')
      })
      .catch((err) => {
        console.log(err)
        window.alert("Usuario ou Senha incorreta")
      })
  }

  return (
    <BaseContainer>
      <h1>Login</h1>
      <input value={email} onChange={handleEmail} placeholder="E-mail" />
      <input value={password} onChange={handlePassword} placeholder="Senha" />
      <button onClick={login}>Login</button>
    </BaseContainer>
  )
}
export default LoginPage
