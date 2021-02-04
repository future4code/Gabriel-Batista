import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useProtectedPage } from '../hooks/Hooks';
import { BaseContainer } from '../Styled'
import useForm from "../hooks/Hooks";

const CreateTripPage = () => {
  useProtectedPage();
  const history = useHistory();


  const [form, onChange, clear] = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  });
  const handleClick = (event) => {
    event.preventDefault();
    createViagem()
    console.log("BODY:", form);
    clear();
  };


  const createViagem = () => {
    const body = form

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-marques-epps/trips",
      body,
      {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
    )
      .then((res) => {
        window.alert("Nova viagem criada com sucesso!!!")
        history.push('/admpage')
      
      })
      .catch((err) => {
        console.log(err)
        window.alert("Erro ao Criar Viagem")
      })
  }

  return (
    <BaseContainer>
      <form onSubmit={handleClick}>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          type="text"
          required
        />
        <input
          name="planet"
          value={form.planet}
          onChange={onChange}
          placeholder="Nome do planeta"
          type="text"
          required
        />
        <input
          name="date"
          value={form.date}
          onChange={onChange}
          placeholder="Data da partida"
          type="date"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Insira os detalhes sobre a viagem!"
          type="text"
          required
        />
        <input
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          placeholder="Duração em dias"
          type="number"
          required
        />
        <button>Criar Viagem</button>
      </form>
    </BaseContainer>
  )
}

export default CreateTripPage
