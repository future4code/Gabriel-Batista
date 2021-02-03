import React from 'react'
import { useHistory } from "react-router-dom";
import { useProtectedPage } from '../hooks/Hooks';
import { goTolistaviagem, goTocriarnovaviagem } from '../Routers';
import { BaseContainer } from '../Styled';
const AdmPage = () => {
  const history = useHistory();
  useProtectedPage();
  return (
    <BaseContainer>
      <button onClick={() => goTolistaviagem(history, "listaviagem")}>Lista</button>
      <button onClick={() => goTocriarnovaviagem(history, "criarnovaviagem")}>Criar</button>
    </BaseContainer>
  )
}

export default AdmPage
