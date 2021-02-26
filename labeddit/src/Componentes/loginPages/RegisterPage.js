import React, { useContext } from 'react'
import axios from 'axios'
import { Buttons, Formlogin, PopBox } from '../Styled';
import useForm from '../hooks/Hooks';
import GlobalStateContext from '../../Context/GlobalStateContext';


const RegisterPage = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "", username: "" });
  const { states } = useContext(GlobalStateContext);

  const handleClick = (event) => {
    event.preventDefault();
    clear();
  };

  const Register = () => {
    axios.post(`${states.baseUrl}/signup`, form)
      .then((res) => {
        alert('Usuario criado com sucesso')
        console.log('res', res)
      })
      .catch((err) => {
        console.log(err)
        window.alert("Algo Deu Errado Verifique os Dados e tente Novamente")
      })
  }

  return (
    <PopBox>
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
        <input
          name="username"
          value={form.username}
          onChange={onChange}
          placeholder="username"
          type="text"
          required />
        <Buttons onClick={Register}>Criar</Buttons>
      </Formlogin>
    </PopBox>
   )
}

export default RegisterPage
