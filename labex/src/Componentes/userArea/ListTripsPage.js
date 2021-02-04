import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { BaseContainer } from '../Styled'
import FormUsuario from './FormUsuario';
import TripDetailsPage from './TripDetailsPage';

const ListTripsPage = (viagemList) => {
  const history = useHistory();
  const [ids, setids] = useState('');
  const [increverse, setincreverse] = useState(false);
  const [detalhes, setdetalhes] = useState(false);
  const [Aprovados, setAprovados] = useState([]);
  const [Candidatos, setCandidatos] = useState([]);

  const CarregarLista = () => {
    if (increverse) {
      return (<FormUsuario ids={ids} />)
    }else {
      return(<TripDetailsPage Candidatos={Candidatos}></TripDetailsPage>)
    }
    
  }

  const getTripsinfo = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-marques-epps/trip/${ids}`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        setAprovados(res.data.trip.approved)
        setCandidatos(res.data.trip.candidates)
        console.log('object', res.data.trip.candidates)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  

  return (
    <BaseContainer style={{ justifyContent: "space-around", alignItems: "center", overflow: 'scroll', overflowX: 'hidden'}}>
      {CarregarLista()}
      {viagemList.viagemList.map((item) => {
        return (
          <div>
            <h2>{item.name}</h2>
            <p>Planeta: {item.planet}</p>
            <p>tempo de viagem: {item.durationInDays} dias</p>
            <p>data de lançamento: {item.date}</p>
            <p>{item.description}</p>
            <button onClick={() => { setids(item.id) || setincreverse(!increverse) }} >Inscrever-se</button>
            <button onClick={() => { setids(item.id) || setincreverse(!increverse) || getTripsinfo()}} >Ver Detalhes</button>
          </div>
        )
      })}
    </BaseContainer>
  )
}

export default ListTripsPage
