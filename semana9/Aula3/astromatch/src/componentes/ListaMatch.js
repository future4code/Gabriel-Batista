import { ListMatchContainer, baseUrl, MatchPersonImg, MatchBox } from "./styled/styledComponents";
import axios from "axios";
import React, { useState, useEffect } from 'react'



export default function LIstaMatch() {

  const [matchList, setmatchList] = useState([])
  const [renderPageMatch, setrenderPageMatch] = useState(false)


  const getmatchList = () => {
    axios
      .get(`${baseUrl}/Gabriel/matches`)

      .then(response => {
        setmatchList(response.data.matches)

      })
      .catch(err => {
        console.log(err);
      });
  };

  const clearMatchList = () => {
    axios
      .put(`${baseUrl}/Gabriel/clear`)
      .then(response => {
        setrenderPageMatch(!renderPageMatch)
        alert("Você Desfez Todos os Seus Matches")
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (matchList.length === 0) {
      getmatchList()
    }
    else {
      setrenderPageMatch(!renderPageMatch)
    }
  }, [matchList])


  const changePage = () => {
    if (renderPageMatch === true) {
      return (
        <ListMatchContainer>
          <button onClick={clearMatchList}>Desfazer Todos os Matches</button>
          {matchList.map((Match) => {
            return (
              <MatchBox>
                <MatchPersonImg src={Match.photo} alt={'fotoMatch'}></MatchPersonImg>
                <p key={Match.id}> {Match.name}</p>
              </MatchBox>
            )
          })}
        </ListMatchContainer>
      )
    } else {
      return (
      <div style={{ gridColumn: "1/3",textAlign:"center"}}>
        <h2>Nenhum Novo Match</h2>
        <img  width="100%" src={"https://media.tenor.com/images/aafc827dad01b1f0974c5388674f8302/tenor.gif"}></img>
      </div>
    )
    }
  }



  return (
    <div style={{ gridColumn: "1/3", gridRow:'2',height:'450px', overflow:'scroll', overscrollBehavior:'auto', overflowX:'hidden'}}>
      {changePage()}
   </div>
  );
}


