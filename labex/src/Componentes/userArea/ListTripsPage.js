import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { BaseContainer, ListiDiv } from '../Styled'
import FormUsuario from './FormUsuario';
import TripDetailsPage from './TripDetailsPage';

const ListTripsPage = (viagemList) => {
  const history = useHistory();
  const [ids, setids] = useState('');
  const [inscreverse, setinscreverse] = useState(false);
  const [detalhes, setdetalhes] = useState(false);
  const [Candidatos, setCandidatos] = useState([]);
  const [tripid, settripid] = useState('');
  const [Aprovados, setAprovados] = useState([]);


  const CarregarLista = () => {
    if (inscreverse) {
      return (<FormUsuario ids={ids} />)
    } else if (detalhes) {
      return (<TripDetailsPage tripid={tripid} Candidatos={Candidatos} Aprovados={Aprovados}></TripDetailsPage>)
    }

  }

  const getTripsinfo = (id) => {
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
        setCandidatos(res.data.trip.candidates)
        setAprovados(res.data.trip.approved)
        setids(id)
        settripid(res.data.trip.id)
        })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <BaseContainer style={{ justifyContent: "space-around", alignItems: "center", overflow: 'scroll', overflowX: 'hidden' }}>
      {CarregarLista()}
      {viagemList.viagemList.map((item) => {
        return (
          <ListiDiv>
            <h2>{item.name}</h2>
            <p>Planeta: {item.planet}</p>
            <p>tempo de viagem: {item.durationInDays} dias</p>
            <p>data de lançamento: {item.date}</p>
            <p>{item.description}</p>
            <button onClick={() => { getTripsinfo(item.id) || setinscreverse(!inscreverse) || setdetalhes(false) }} >Inscrever-se</button>
            <button onClick={() => { getTripsinfo(item.id) || setdetalhes(!detalhes) || setinscreverse(false) }} >Ver Detalhes</button>
          </ListiDiv>
        )
      })}
    </BaseContainer>
  )
}

export default ListTripsPage
