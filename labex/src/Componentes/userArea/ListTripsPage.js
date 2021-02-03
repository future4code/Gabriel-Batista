
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BaseContainer } from '../Styled'
import TripDetailsPage from './TripDetailsPage';
import FormUsuario from './FormUsuario';

const ListTripsPage = (viagemList) => {
  const [ids, setids] = useState('');
  const [detalhes, setdetalhes] = useState(false);
  const [increverse, setincreverse] = useState(false);


 const CarregarLista = () => {
    if (detalhes) {
      return (<TripDetailsPage/>)
     
    }else if (increverse){
      return(<FormUsuario/>)
    }
  }


  return (
    <BaseContainer style={{ justifyContent: "space-around", alignItems: "center", overflow: 'scroll', overflowX: 'hidden', gridColumn:'1/2' }}>
      {viagemList.viagemList.map((item) => {
        return (
          <div>
            {CarregarLista()}
            <h2>{item.name}</h2>
            <p>Planeta: {item.planet}</p>
            <p>tempo de viagem: {item.durationInDays} dias</p>
            <p>data de lançamento: {item.date}</p>
            <p>{item.description}</p>
            <button onClick={() => { setids(item.id) }, () => {setdetalhes(!detalhes)}} >Ver Detalhes</button>
            <button onClick={() => {setincreverse(!increverse)}} >Inscrever-se</button>
          </div>
        )
      })}
      {console.log('item.id', ids)}
    </BaseContainer>
  )
}

export default ListTripsPage
