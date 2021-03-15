
import styled from 'styled-components'

export const HeaderBox = styled.section`
display:flex;
width:100%;
height:100%;
justify-content: space-evenly;
text-align: center;
align-items:center;
justify-items:center;
grid-row:1;
`
export const FooterBox = styled.section`
position:absolute;
margin: 0 10% 10% 80%;
width:120px;
background:transparent;
`
export const BaseContainer = styled.section`
display:grid;
grid-template-rows:15% 81% 5%;
width:99vw;
height:100vh;
text-align: center;
align-items:center;
justify-items:center;
`
export const BaseBox = styled.section`
display:grid;
width:100%;
height:100%;
padding-left:1%;
grid-template-rows:20% 80%;
grid-template-columns:80% 20%;
grid-row:2;
grid-column:1;
overflow-x:hidden;
`

export const Loading = styled.section`
grid-row:2;
grid-column:1/3;
background-image:url('https://cdn.dribbble.com/users/219797/screenshots/2708406/loading.gif');
background-position:bottom;
background-repeat:no-repeat;
`
export const PostList = styled.section`
display:flex;
flex-direction:column;
height:100%;
width:100%;
align-items:center;
align-self:center;
gap:2%;
grid-row:2;
z-index:1000 ;
background-size:5ch;
`
export const EmAlta = styled.section`
display:flex;
align-items:center;
justify-content: space-around;
grid-row:1;
grid-column:1/3;
`
export const Detalhes = styled.section`
display:flex;
flex-direction:column;
border: groove;
width:100%;
height:85%;
text-align: center;
align-items:center;
justify-content: space-around;
background-color:white;
grid-column:1;
border-radius:5%;
:hover{
  transform: scale(1.1);
  box-shadow: 1px 3px 30px 2px rgba(0, 0, 0, 0.24)
}
`
export const DetailDiv = styled.section`
display:grid;
grid-template-rows:80% 40px;
grid-template-columns:15% 85%;
border: groove;
background-color:white;
width:70%;
min-height:50%;
grid-column:1;
border-radius:5%;
:hover{
  transform: scale(1.1);
  box-shadow: 1px 3px 30px 2px rgba(0, 0, 0, 0.24)
}
`
export const ImgShadow = styled.img`
max-width:100px;
max-height:50px;
border-radius:15%;
:hover{
  transform: scale(1.2);
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
background-color:white;
width:70%;
height:auto;
grid-column:1;
border-radius:5%;
:hover{
  transform: scale(1.1);
  box-shadow: 1px 3px 30px 2px rgba(0, 0, 0, 0.24)
}
`
export const DisplayDivCreatPost = styled.section`
display:grid;
width:100%;
height:auto;
padding:1%;
justify-items:center;
`
export const DisplayDivPosts = styled.section`
flex-direction:column;
width:98%;
height:auto;
padding:1%;
grid-column:2;
overflow:hidden;
`
export const VoteBox = styled.div`
display :flex;
flex-direction:column;
width:50%;
max-height:100px;
justify-content:center;
align-self:center;
text-align:center;
padding-left:10%;
grid-column:1;
grid-row:2/1;
`
export const CommentBox = styled.div`
display:grid;
height:auto;
width:50%;
grid-column:1;
grid-row:2;
padding-left:10%;
color:whitesmoke;
background-image:url('https://i.imgur.com/deXbSla.png');
background-position:right;
background-repeat:no-repeat;
background-size:5ch;
:hover{
  transform: scale(1.2);
}
`
export const Counter = styled.div`
display:grid;
height:100% ;
padding:10%
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
display:flex;
flex-direction:column;
width:100%;
height:100%;
justify-content: space-evenly;
color:black;
align-items:center;
box-shadow: 1px 3px 3px 2px rgba(0, 0, 0, 0.24), 0 0 10px rgba(0, 0, 0, 22);
border-radius:5%;
`

export const PopBox = styled.section`
position:absolute;
display:flex;
flex-direction:column;
width:45%;
height: 35%;
margin: 75% 0% 0% 0%;
background-color:whitesmoke;
z-index:1000;
border-radius:5%;
`

export const InputText = styled.textarea`
width:35vw;
height:15vh;
`
export const BasicInput = styled.input`
width:20vw;
`

export const MainSearchBar = styled.input`
background-color: white;
background-image: url('https://i.imgur.com/Gq7tAG0.png');
background-position: 1% 75%;
background-repeat: no-repeat;
background-size:4.5%;
margin-top: 1%;
border-radius: 20px;
text-align:center;
width: 50vw;
height: 20px;
outline:none;
&:hover {
  background-color: whitesmoke;
};
`
export const Buttons = styled.button`
border-color: #004abe;
border-radius: 4px;
box-shadow: 1px 3px 3px 2px rgba(0, 0, 0, 0.24), 0 0 10px rgba(0, 0, 0, 0.12);
cursor: pointer;
background: #004abe;
font-weight: 600;
padding: 3px ;
&:hover {
    background: whitesmoke;
    color:black;
    transition: all .4s ease-in-out;
}
color: white;
text-align: center;
font-size: 15px;
min-width: 8vw;
`
