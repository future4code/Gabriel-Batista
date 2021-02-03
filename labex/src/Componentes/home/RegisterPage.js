import React from 'react'
import { BaseContainer } from '../Styled'

const RegisterPage = () => {
  return (
    <BaseContainer>
      <label>nome</label>
      <input placeholder='nome'></input>
      <label>senha</label>
      <input placeholder='senha'></input>
      <button>Enviar</button>
    </BaseContainer>
  )
}

export default RegisterPage
