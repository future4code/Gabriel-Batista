import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../App.css'
import { useProtectedPage } from '../hooks/Hooks';
import { DetailDiv, Detalhes } from '../Styled'


const TripDetailsPage = (Candidatos) => {
  useProtectedPage()
  const [Aprovados, setAprovados] = useState([]);

  const getTripsinfo = (id) => {
    const body = {
      "approve": true
    }
    axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-marques-epps/trips/${Candidatos.tripid}/candidates/${id}/decide`, body,
      {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((res) => {
        alert(res.data.message)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Detalhes>
      {console.log('Aprovados', Candidatos)}
      <h3>Aguardando Revisão</h3>
      {Candidatos.Candidatos.map((item) => {
        return (
          <DetailDiv style={{ justifyContent: "space-around", alignItems: "center" }}>
            <p>{item.name}</p>
            <button onClick={() => getTripsinfo(item.id)} >Aprovar</button>
            <button >Recusar</button>
          </DetailDiv>
        )
      })}

      <h3>Aprovados!!</h3>
      {Candidatos.Aprovados.map((item) => {
        return (
          <DetailDiv style={{ justifyContent: "space-around", alignItems: "center" }}>
            <p>{item.name}</p>
          </DetailDiv>
        )
      })}

    </Detalhes>
  )
}

export default TripDetailsPage
