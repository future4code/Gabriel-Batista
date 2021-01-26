import styled from  'styled-components'

export const ProductCardItem = styled.div`
align-items:center;
justify-content:space-around;
text-align:center;
`
export const DivBox = styled.div`
text-align:center;
grid-row:2;
`
export const Quantidade = styled.div`
text-align:center;
padding-bottom:2%;
`
export const ProductStyled = styled.div`
display:grid;
grid-template-columns:20% 80%;
grid-template-rows:20% 80%;
width: 100vw;
height:100%;
align-items:center;
justify-content:space-between;
z-index:0;
`
export const ProductListStyled = styled.div`
display:grid;
grid-template-rows: repeat(3,1fr);
grid-template-columns:repeat(3,1fr);
width: auto;
height:100%;
align-items:center;
justify-content:space-between;
`
export const ProductSearch = styled.div`
text-align:center;
grid-column:2;
grid-row: 1;
`
export const ProductMenu = styled.div`
display:flex;
flex-direction:column;
width: 100%;
height:100%;
text-align:center;
align-items:center;
justify-content:space-evenly;
grid-column:1;
grid-row: 1/3;
border: 1px solid black;
z-index:10;
`
export const Inputs = styled.input`
width: 15vw;
height:4vh;
border-radius: 10px;
text-align:center;
outline:none;
`

export const ProductStyledItem = styled.div`
display:grid;
grid-template-columns:repeat(3,30%);
height:55vh;
align-items:center;
justify-content:space-around;
overflow:scroll;
overflow-x: hidden;
z-index:0;
`