import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import GlobalStateContext from '../Context/GlobalStateContext';
import { Detalhes, EmAlta } from './Styled'

function Destaques() {
  const { states, requests, setters } = useContext(GlobalStateContext);
  return (
    <EmAlta>
      <Detalhes>
        em alta1
         </Detalhes>
         <Detalhes>
        em alta2
         </Detalhes>
         <Detalhes>
        em alta3
         </Detalhes>
         <Detalhes>
        em alta4
         </Detalhes>
         <Detalhes>
        em alta5
         </Detalhes>
    </EmAlta>
  )
}

export default Destaques
