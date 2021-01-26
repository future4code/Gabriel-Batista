import styled from  'styled-components'

export const SellerForm = styled.div`
display:grid;
grid-template-rows: 50% 50%;
grid-template-columns:1fr;
width: auto;
height:100%;

`
export const FormTop = styled.div`
Display: grid;
grid-template-columns: repeat(4,1fr);
justify-content:center;
text-align:center;
align-items:center;
justify-items:center;
width: 100vw;
height:100%;
cursor: pointer;
`

export const FormBottom= styled.div`
display:flex;
flex-direction:column;
text-align:center;
align-items:center;
justify-content:space-around;
outline:none;
`

export const LastButton = styled.p`
margin: auto;
margin-left: 22%;
`
export const Buttons = styled.button`
  background-color: white;
  border-color: #004abe;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
  color: #004abe;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  padding: 5px ;
  display:flex;
  justify-content:center;
  &:hover {
    background: #e9f0f7;
    transition: all .4s ease-in-out;
  }
`;
export const DescriText = styled.textarea`
border-radius: 10px;
padding:10px;
outline:none;
width:50vw;
height:20vh;
`
export const DivBox = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
text-align:center;
outline:none;
`
