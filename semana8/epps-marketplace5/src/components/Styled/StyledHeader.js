import styled from 'styled-components'

export const HeaderContainer = styled.div`
display: grid;
grid-template-rows:40% 60%;
width: 100vw;
height: 100%;
align-items: center;
justify-content: center;
`

export const HeaderStyled = styled.div`
background-color: #9b0000;
width: 100vw;
height: 100%;
align-items: center;
justify-content: center;
grid-row:1;
`
export const HeaderBar = styled.div`
display:flex;
background-image: url("https://i.imgur.com/8ADpvrB.png");
background-color:#d50000;
width: 100vw;
height: 100%;
align-items: center;
justify-content:space-between;
grid-row:0;
`
export const MidlleStyled = styled.div`
display:flex;
width: 100vw;
height: 10%;
align-items: center;
justify-content: space-between;
`

export const Button = styled.p`
border-color: #004abe;
border-radius: 4px;
box-shadow: 1px 3px 3px 2px rgba(0, 0, 0, 0.24), 0 0 10px rgba(0, 0, 0, 0.12);
cursor: pointer;
font-weight: 600;
padding: 5px ;
&:hover {
    background: #6D6D6D;
    transition: all .4s ease-in-out;
}
color: white;
text-align: center;
font-size: 30px;
min-width: 12vw;
`

export const ImgLogo = styled.img`
width: 25%;
margin-bottom: 4%;
`
export const ImgBandeira = styled.img`
width: 28%;
margin-bottom: 5%;
`