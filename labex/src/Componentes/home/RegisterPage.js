import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import '../../App.css'
import { BaseContainer, Buttons, Formlogin, GifDiv } from '../Styled';
import useForm from '../hooks/Hooks';


const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const handleClick = (event) => {
    event.preventDefault();
      clear();
  };


  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      history.push("/admpage")
    }
  }, [history])

  const login = () => {

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-marques-epps/signup", form)
      .then((res) => {
       alert('Usuario criado com sucesso')
        history.push('/admpage')
      })
      .catch((err) => {
        console.log(err)
        window.alert("Usuario ou Senha incorreta")
      })
  }

  return (
    <BaseContainer>
      <GifDiv>
      <Formlogin onSubmit={handleClick}>
           <h3>Criar Nova conta</h3>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
            type="email"
            required />
          <input
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            type="password"
            required />
          <Buttons onClick={login}>Login</Buttons>
        </Formlogin>
      </GifDiv>
    </BaseContainer>
  )
}

export default RegisterPage
