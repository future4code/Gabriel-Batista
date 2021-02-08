import React from 'react'
import { useHistory } from "react-router-dom";
import { useProtectedPage } from '../hooks/Hooks';
import { goTolistaviagem, goTocriarnovaviagem } from '../Routers';
import { AdmBack, BaseContainer, Buttons, HomeVideo,SelectDiv } from '../Styled';
import clip from '../../Video/video.mp4';
const AdmPage = () => {
  const history = useHistory();
  useProtectedPage();
  return (
    <BaseContainer>
      <AdmBack>
        <SelectDiv>
          <Buttons onClick={() => goTolistaviagem(history, "listaviagem")}>Lista De viagens Abertas</Buttons>
          <Buttons onClick={() => goTocriarnovaviagem(history, "criarnovaviagem")}>Criar Nova viagem</Buttons>
        </SelectDiv>
        <HomeVideo autoPlay loop muted >
          <source src={clip} type='video/mp4' />
          <source src={clip} type="video/ogg" />
        </HomeVideo>
      </AdmBack>
    </BaseContainer>
  )
}

export default AdmPage

