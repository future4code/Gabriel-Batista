import axios from "axios";
import React, { useState, useEffect } from 'react'
import MainPage from "./componentes/MainPage";
import LIstaMatch from "./componentes/ListaMatch"
import { BasePageContainer, PageBox, HeaderBox, MatchsBox, baseUrl, ImgMatch, Logo } from './componentes/styled/styledComponents';

function App() {


  const [renderPage, setrenderPage] = useState(false)
  let [personInfo, setpersonInfo] = useState(false)


  const getPerson = () => {
    axios
      .get(`${baseUrl}/Gabriel/person`)
      .then(response => {
        setpersonInfo(response.data.profile)
      })
      .catch(err => {
        console.log(err);
      });
  };


  const likePerson = () => {
    const body = {
      "id": `${personInfo.id}`,
      "choice": true
    }
    axios.post(`${baseUrl}/Gabriel/choose-person`, body)
      .then(response => {
        getPerson()
      })
      .catch(err => {
        console.log(err);
      });
  };
  const dislikePerson = () => {
    getPerson()
  };


  useEffect(() => {
    if (personInfo === false) {
      getPerson()
    }

  }, [personInfo])



  const clickChangePage = () => {
    setrenderPage(!renderPage)
  }


  const changePage = () => {
    if (renderPage === true) {
      return (
        <LIstaMatch />
      )
    } else {
      return (
        <MainPage pInfo={personInfo} likePerson={likePerson} dislikePerson={dislikePerson} />
      )
    }
  }

  return (
    <PageBox>
      <BasePageContainer>
        <HeaderBox>
          <Logo src='https://i.imgur.com/JrNY5Qf.png'></Logo>
        </HeaderBox>
        <MatchsBox>
          <ImgMatch onClick={clickChangePage} src='https://i.imgur.com/VMTI8wl.png'></ImgMatch>
        </MatchsBox>
        {changePage()}
      </BasePageContainer>
    </PageBox>
  );
}

export default App;
