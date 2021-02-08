
import axios from 'axios';
import React, { useState } from 'react'
import { Formuser, Formbase, SelectPaises, OptionPaises, InputSobre, BasicInput,Buttons } from '../Styled'
import useForm from "../hooks/Hooks";
import '../../App.css'



const FormUsuario = (id) => {
  const [form, onChange, clear] = useForm({ name: "", age: "", profession: "", country: "" , applicationText: ""});
  const [paises, setpaises] = useState([]);


  const handleClick = (event) => {
    event.preventDefault();
    clear();
    applyToTrip()
  };


  const applyToTrip = () => {
    const body = {
      name: form.name,
      age: form.age,
      profession: form.profession,
      country: form.country,
      applicationText: form.applicationText,
    }
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-marques-epps/trips/${id.tripid}/apply`, body
      )
      .then((res) => {
        window.alert(res.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const getPaises = () => {
    axios
      .get(
        'https://restcountries.eu/rest/v2/all/')
      .then((res) => {
        setpaises(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const CarregarLista = () => {
    if (paises.length > 0) {
      return (
        <Formbase onSubmit={handleClick}>
          <h3>Cadastro Viajante</h3>
          <BasicInput
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Nome"
            type="text"
            pattern="[a-z / A-Z /ç]{3,}"
            title='Minimo de 4 caracteres'
            required
          />
          <BasicInput
            name="age"
            value={form.age}
            onChange={onChange}
            placeholder="Idade em anos"
            type="number"
            min={18}
            required
          />
          <InputSobre
            name="applicationText"
            value={form.applicationText}
            onChange={onChange}
            placeholder="Por qual motivo devemos te aprovar?"
            type="text"
            pattern="[a-z / A-Z /ç/,]{30,}"
            title='Minimo de 30 caracteres'
            required
          />
          <BasicInput
            name="profession"
            value={form.profession}
            onChange={onChange}
            placeholder="Qual sua profissão"
            type="text"
            pattern="[a-z / A-Z /ç]{10,}"
            title='Minimo de 10 caracteres'
            required
          />
          <SelectPaises
            name="country"
            value={form.country}
            onChange={onChange}
            type="text"
            required
          >
            <OptionPaises >Escolha Seu país</OptionPaises>
            {paises.map((item) => {
              return (
                <OptionPaises value={item.name}>{item.name}</OptionPaises>
              )
            })}

          </SelectPaises>
          <hr />
          <Buttons>Enviar</Buttons>
        </Formbase>
      )
    } else {
      getPaises()
    }
  }
  return (
    <Formuser>
      {CarregarLista()}
    </Formuser>
  )
}

export default FormUsuario
