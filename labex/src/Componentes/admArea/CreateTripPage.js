import axios from 'axios';
import React, { useState} from 'react'
import { useProtectedPage } from '../hooks/Hooks';
import { BaseContainer } from '../Styled'

const CreateTripPage = () => {
  useProtectedPage();
  const [name, setname] = useState("");
  const [planet, setplanet] = useState("");
  const [date, setdate] = useState(0);
  const [description, setdescription] = useState("");
  const [durationInDays, setdurationInDays] = useState(Number);
  
  const getName = (e) => {
    setname(e.target.value);
  };

  const getPlanet= (e) => {
    setplanet(e.target.value);
  };
  
  const getDate = (e) => {
    setdate(e.target.value);
  };
  
  const getDescription = (e) => {
    setdescription(e.target.value);
  };
  
  const getDurationInDays = (e) => {
    setdurationInDays(e.target.value);
  };
  const createViagem = () => {
    const body =
    {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays
    }

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
           // history.push('/admpage')
      })
      .catch((err) => {
        console.log(err)
        window.alert("Erro ao Criar Viagem")
      })
  }

  return (
    <BaseContainer>
      <input value={name} onChange={getName} placeholder="Nome" type='Text'></input>
      <input value={planet} onChange={getPlanet} placeholder="Planeta" type='Text'></input>
      <input value={date} onChange={getDate} placeholder="Data da partida" type='date'></input>
      <input value={description} onChange={getDescription} placeholder="Descrição" type='Text'></input>
      <input value={durationInDays} onChange={getDurationInDays} placeholder="Duração em dias"type='Number'></input>
      <button onClick={createViagem}> enviar </button>
    </BaseContainer>
  )
}

export default CreateTripPage
