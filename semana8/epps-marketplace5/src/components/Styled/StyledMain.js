import styled from  'styled-components'

export const MainContainer = styled.div`
display: grid;
width: 100vw;
height: 100%;
align-items:center;
justify-items:center;
justify-content:center;
`
export const MainStyled = styled.div`
display:grid;
grid-template-rows: repeat(2,1fr);
grid-template-columns:repeat(3,1fr);
height:45vh;
align-items:center;
justify-content:center;
row-gap:10%;
overflow:scroll;
overflow-x: hidden;
`

export const FiltroQuantidade = styled.h2`
margin:20px;
`
export const MainSearchBar = styled.input`
background-color: white;
background-image: url('https://i.imgur.com/Gq7tAG0.png');
background-position: 1% 75%;
background-repeat: no-repeat;
background-size:4.5%;
text-align:center;
margin-top: 20px;
border-radius: 20px;
width: 50vw;
height: 40px;
outline:none;
&:hover {
  background-color: whitesmoke;
};
`