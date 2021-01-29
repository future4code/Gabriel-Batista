import styled from 'styled-components'
import animation from '../../App.css'
export const baseUrl =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch";

export const Logo = styled.img`
width: 50%;
`

export const BasePageContainer = styled.section`
display:grid;
grid-template-rows: 10% 90%;
grid-template-columns: 87% 13%;
background-color:#f5f5f6;
width: 400px;
height:550px;
align-items:center;
justify-content:center;
`

export const PageBox = styled.section`
display: grid;
width: 100%;
height:100%;
align-items:center;
justify-content:center;
margin-top:15vh;
`
export const Dislike = styled.img`
width: 20%;
height: 80%;
border-radius: 50%;
box-shadow: 0 0px 31px rgba(0, 0, 0, 0.99);
color: #004abe;
cursor: pointer;
justify-content:center;
&:hover {
    animation:shake-bottom 1.5s infinite;
    box-shadow: 0 0 31px rgba(150, 0, 0, 1);
}
`
export const Like = styled.img`
width: 20%;
height: 80%;
border-radius: 50%;
box-shadow: 0 0px 31px rgba(0, 0, 0, 0.99);
cursor: pointer;
&:hover {
    animation: heartbeat 1.5s infinite;
    box-shadow: 0 0 31px rgba(255, 0, 0, 1);
}
`
export const MainpageContainer = styled.section`
width:100%;
height:100%;
display: grid;
grid-template-rows: 78% 22%;
grid-template-columns: 100%;
grid-column:1/3;
grid-row:2;
`
export const ProfileBox = styled.section`
justify-content: center;
align-items:center;
text-align:center;
padding:2%;
`
export const ImgProfile = styled.div`
width: 100%;
height:70%;
background-position:center;
background-repeat:no-repeat;
background-size:contain;
`
export const ImgMatch = styled.img`
width: 95%;
border-radius: 10%;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
cursor: pointer;
&:hover {
    background: lightgray;
    transition: all .4s ease-in-out;
}
`
export const HeaderBox = styled.section`
width: 100%;
display:flex;
justify-content: center;
align-items:center;
text-align:center;
border-bottom: 1px solid lightgray;
grid-column:1/3;
grid-row:1;
`
export const MatchsBox = styled.section`
justify-content: center;
align-items:center;
text-align:center;
width:50px;
display:flex;
grid-row:1;
grid-column:2;
`
export const LikeBox = styled.section`
display:flex;
justify-content:space-evenly;
grid-column:1;
grid-row:2;
`


export const ListMatchContainer = styled.section`
display: flex;
width:90%;
flex-direction:column;
text-align:center;
list-style:none;
padding:5%;
grid-column:1/3;
grid-row:2;
`
export const MatchBox = styled.section`
display: grid;
grid-template-columns: 30% 70%;
height:150%;
max-width:50vw;
align-items:center;
text-align:center;
padding:5%;
border-bottom: 1px solid lightgray;

`

export const MatchPersonImg = styled.img`
width: 50%;
border-radius: 48%;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
cursor: pointer;
&:hover {
    background: lightgray;
    width: 125%;
}
`