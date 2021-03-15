import React, {  useEffect, useContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import {  Buttons, Formlogin, PopBox } from '../Styled';
import useForm from "../hooks/Hooks";
import GlobalStateContext from '../../Context/GlobalStateContext';


export const LoginPage = () => {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const history = useHistory()
  const [form, onChange, clear] = useForm({ email: "", password: "" });
 
  const handleClick = (event) => {
    event.preventDefault();
    login()
    clear();
  };


  const login = () => {

    axios.post(`${states.baseUrl}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        setters.setLogin(false)
        window.alert(`Bem Vindo ${res.data.user}` )
      })
      .catch((err) => {
        console.log(err)
        window.alert("Usuario ou Senha incorreta")
      })
  }

  return (
    <PopBox>
      <Formlogin onSubmit={handleClick}>
        <h3>Login</h3>
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
        <Buttons>Login</Buttons>
      </Formlogin>
    </PopBox>
  )
}
export default LoginPage
