import React, { useState } from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
	overflow:scroll;
	overflow-x:none;
`

const InputComment = styled.textarea`
    margin-bottom: 5px;
	min-height:10vh;
`
const ListBox = styled.div`
	display: flex;
    width: 100%;
	align-items:center;
	max-width:50%;
	height:55vh;
	/* max-height:30vh;	 */
	flex-direction:column;
`

const List = styled.li`
    width: 250px;
	text-align:left;
	list-style:none;
	border: 1px solid gray;
	border-radius: 4px;
 	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
	padding:5%;
`

const Text = styled.p`
    max-width: 250px;
	word-break: break-all;
`


const SecaoComentario = (props) => {

	let [inputComent, setInputComent] = useState('')

	const onChangeComentario = (event) => {
		setInputComent(event.target.value)
		
	}

	return (
		<CommentContainer>
			<ListBox>
				<InputComment
					className={'input-comentario'}
					placeholder={'Comentário'}
					onChange={onChangeComentario}
					
				/>
				<button onClick={ () => {props.enviarComentario(inputComent)}}>Enviar</button>
				<h3>Comentarios</h3>
				{props.comentList.map((coments) => {
					return (					
							<List Key={Date.now}>
								<Text>{coments}</Text>
							</List>
					)
				})}
			</ListBox>
		</CommentContainer>
	)
}


export default SecaoComentario