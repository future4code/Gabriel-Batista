import React from 'react'
import { useHistory } from "react-router-dom";
import { goTolistaviagem, goTocriarnovaviagem } from '../Routers';
const AdmPage = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => goTolistaviagem(history, "listaviagem")}>Lista</button>
      <button onClick={() => goTocriarnovaviagem(history, "criarnovaviagem")}>Criar</button>
    </div>
  )
}

export default AdmPage
