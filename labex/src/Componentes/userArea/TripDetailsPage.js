import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../App.css'
import { useProtectedPage } from '../hooks/Hooks';
import { Detalhes } from '../Styled'


const TripDetailsPage = (Candidatos) => {
  useProtectedPage()


  return (

    <Detalhes>

      {Candidatos.Candidatos.map((item) => {
        return (
          <div style={{ justifyContent: "space-around", alignItems: "center" }}>
             <p>{item.name}</p>
            <button >Aprovar</button>
            <button >Recusar</button>
          </div>
        )
      })}

    </Detalhes>
  )
}

export default TripDetailsPage
