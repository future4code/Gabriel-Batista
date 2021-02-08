
import styled from   'styled-components'

export const HeaderBox = styled.section`
display:flex;
padding: 0.5vh;
justify-content:space-around;
align-items:center;
background-image:url('https://media3.giphy.com/media/aRJMSoJmD037wpHSOF/giphy.gif?cid=ecf05e472eb0dc862e78ee6ae180d3acee2f80831117d897&rid=giphy.gif');
background-position:initial;
background-repeat:no-repeat;
background-size:cover;
height:9vh;
`
export const BaseContainer = styled.section`
display:grid;
@media(max-width: 1680px) {
    max-height:91vh;
  }
grid-template-columns:25% 50% 25%;
width:auto;
height:90vh;
text-align: center;
align-items:center;
justify-content: space-around;
justify-items:center;
background-image:url('https://media3.giphy.com/media/aRJMSoJmD037wpHSOF/giphy.gif?cid=ecf05e472eb0dc862e78ee6ae180d3acee2f80831117d897&rid=giphy.gif');
background-position:initial;
background-repeat:no-repeat;
background-size:cover;

`
export const Detalhes = styled.section`
width:30vw;
height:46vh;
text-align: center;
border: groove;
align-items:center;
justify-content: space-around;
overflow:scroll;
overflow-x:hidden;
position:absolute;
padding:5px;
margin-left:67.5vw;
background-color:whitesmoke;
border-bottom-left-radius:5%;
border-bottom-right-radius:5%;
border-color: #004abe;
@media(max-width: 1680px) {
    max-height:91vh;
  }

`
export const Formuser = styled.section`
display:flex;
width:30vw;
height:46vh;
position:absolute;
flex-direction:column;
align-items:center;
@media(max-width: 1680px) {
    max-height:91vh;
  }
`
export const Formbase = styled.form`
display:flex;
border: groove;
flex-direction:column;
width:100%;
height:100%;
justify-content: space-around;
background-color:white;
grid-column:1;
align-items:center;
background-color:whitesmoke;
border-bottom-left-radius:5%;
border-bottom-right-radius:5%;
border-color: #004abe;
@media(max-width: 1680px) {
    max-height:91vh;
  }
`
export const FormCreat = styled.form`
display:flex;
flex-direction:column;
width:100%;
height:100%;
justify-content: space-evenly;
background-color:white;
grid-column:2;
align-items:center;
background-color:whitesmoke;
border-color: #004abe;
@media(max-width: 1680px) {
    max-height:91vh;
  }
`

export const Formlogin = styled.form`
display:grid;
width:30%;
height:40%;
justify-content: space-around;
grid-column:2;
color:white;
align-items:center;
border-color: #004abe;
background-image:url('https://media3.giphy.com/media/aRJMSoJmD037wpHSOF/giphy.gif?cid=ecf05e472eb0dc862e78ee6ae180d3acee2f80831117d897&rid=giphy.gif');
border-radius: 4px;
box-shadow: 1px 3px 3px 2px rgba(0, 0, 0, 0.24), 0 0 10px rgba(0, 0, 0, 22);
@media(max-width: 1680px) {
    max-height:91vh;
  }
`

export const DetailDiv = styled.section`
grid-column:3;
align-items:center;
/* display:flex; */
/* position:absolute; */
/* flex-direction:column; */
/* align-items:center;
 */
@media(max-width: 1680px) {
    max-height:91vh;
  }
`

export const ListiDiv = styled.section`
display:flex;
flex-direction:column;
padding:3%;
grid-column:2;
justify-content: space-around;
align-items:center;
background-color:whitesmoke;
width:100%;
box-shadow: 1px 30px 30px 20px rgba(0, 0, 0, 0.24), 0 0 10px rgba(0, 0, 0, 0.12);
/* border: groove; */
/* display:flex; */
/* position:absolute; */
/* flex-direction:column; */
/* align-items:center;
 */
@media(max-width: 1680px) {
    max-height:91vh;
  }
`

export const SelectPaises = styled.select`
 max-width:170px;
 overflow:hidden;
 
`
export const OptionPaises = styled.option`

 `

export const InputSobre = styled.input`
width:28vw;
height:5vh;
:hover{
    text-overflow:ellipsis;
}
/* display:flex; */
/* position:absolute; */
/* flex-direction:column; */
/* align-items:center;
 */
`
export const BasicInput = styled.input`
width:28vw;
/* display:flex; */
/* position:absolute; */
/* flex-direction:column; */
/* align-items:center;
 */
`
export const Buttons = styled.button`
border-color: #004abe;
border-radius: 4px;
box-shadow: 1px 3px 3px 2px rgba(0, 0, 0, 0.24), 0 0 10px rgba(0, 0, 0, 0.12);
cursor: pointer;
background: #004abe;
font-weight: 600;
padding: 5px ;
&:hover {
    background: whitesmoke;
    color:black;
    transition: all .4s ease-in-out;
}
color: white;
text-align: center;
font-size: 15px;
min-width: 12vw;
`




export const GifDiv = styled.section`
display:flex;
flex-direction:column;
width:100%;
height: 100%;
grid-column:1/4;
justify-content: space-around;
align-items:center;
background-color:whitesmoke;
@media(max-width: 1680px) {
    max-height:91vh;
  }
`
export const Homepage = styled.section`
display:flex;
flex-direction:column;
width:100%;
height: 90vh;
grid-column:1/4;
justify-content: space-around;
align-items:center;
background-color:black;
background-image:url('https://media3.giphy.com/media/aRJMSoJmD037wpHSOF/giphy.gif?cid=ecf05e472eb0dc862e78ee6ae180d3acee2f80831117d897&rid=giphy.gif');
background-position:initial;
background-repeat:no-repeat;
background-size:cover;
@media(max-width: 1680px) {
    max-height:91vh;
  }
`
export const AdmBack = styled.section`
display:flex;
flex-direction:column;
width:100%;
height: 100%;
grid-column:1/4;
align-items:center;
@media(max-width: 1680px) {
    max-height:91vh;
  }
`
export const SelectDiv = styled.section`
display:flex;
width:100%;
justify-content: space-around;
align-items:center;
background-color:black;
background-image:url('https://media3.giphy.com/media/aRJMSoJmD037wpHSOF/giphy.gif?cid=ecf05e472eb0dc862e78ee6ae180d3acee2f80831117d897&rid=giphy.gif');
@media(max-width: 1680px) {
    max-height:91vh;
  }
`


export const HomeVideo = styled.video`
@media(max-width: 1920px) {
    max-height:90vh;
    max-width:91vw;
  }
`
export const Titlehome = styled.h1`
font-family:'Bookman Old Style', serif;
line-height:1em;
color:#fff9d6;
font-size:24px;
`


export const HomeDiv = styled.section`
display:flex;
justify-content: space-around;
align-items:center;
background-color:black;
background-image:url('https://media3.giphy.com/media/aRJMSoJmD037wpHSOF/giphy.gif?cid=ecf05e472eb0dc862e78ee6ae180d3acee2f80831117d897&rid=giphy.gif');
@media(max-width: 1680px) {
    max-height:91vh;

  }
`
