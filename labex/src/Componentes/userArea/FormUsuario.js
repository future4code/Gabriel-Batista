
import axios from 'axios';
import React from 'react'
import { BaseContainer, Formuser, Formbase } from '../Styled'
import useForm from "../hooks/Hooks";
import { useHistory } from 'react-router-dom';

const FormUsuario = (ids) => {
  const [form, onChange, clear] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" });


  const handleClick = (event) => {
    event.preventDefault();
    applyToTrip()
    console.log("BODY:", form);
    clear();
  };


  const applyToTrip = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-marques-epps/trips/${ids.ids}/apply`, form
      )
      .then((res) => {
        window.alert(res.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
  };




  return (
    <Formuser>
      <Formbase onSubmit={handleClick}>
        <hr />
        <h3>Cadastro Viajante</h3>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          type="text"
          required
        />
        <hr />
        <input
          name="age"
          value={form.age}
          onChange={onChange}
          placeholder="Idade em anos"
          type="number"
          min={18}
          required
        />
        <hr />
        <textarea
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
          placeholder="Por qual motivo devemos te aprovar?"
          type="text"
          required
        />
        <hr />
        <input
          name="profession"
          value={form.profession}
          onChange={onChange}
          placeholder="Qual sua profissão"
          type="text"
          required
        />
        <hr />
        <select
          name="country"
          value={form.country}
          onChange={onChange}
          placeholder="Qual Seu pais de origen"
          type="text"
          required
        >

          <option value="brasil">brasil</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <hr />
        <button>Enviar</button>
      </Formbase>
    </Formuser>
  )
}

export default FormUsuario
