import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../App.css'
import { useProtectedPage } from '../hooks/Hooks';
import { BaseContainer, Detalhes } from '../Styled'


const TripDetailsPage = (id) => {
  const [Aprovados, setAprovados] = useState([]);
  const [Candidatos, setCandidatos] = useState([]);

 useProtectedPage()

 useEffect(() => {
  getTripsinfo()
}, [])

  
  const getTripsinfo = () => {
    axios
    .get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-marques-epps/trip/${id}`,
      {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
      )
      .then((res) => {
        setAprovados(res.data.trip.approved)
        setCandidatos(res.data.trip.candidates)
        console.log('res.data', res.data.trip.candidates)
      })
      .catch((err) => {
        console.log(err)
      })
  }



  return (
    
    <Detalhes>
    {console.log('Aprovados', Aprovados)}
    {console.log('Candidatos', Candidatos)}
     detalhes box
    </Detalhes>
  )
}

export default TripDetailsPage
