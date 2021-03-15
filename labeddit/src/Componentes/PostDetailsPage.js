import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useProtectedPage } from './hooks/Hooks';
import { BasicInput, Buttons, DetailDiv, DisplayDivCreatPost, DisplayDivPosts,  Formbase, ImgShadow, InputText, PostList, VoteBox,Loading, CommentBox, Counter } from './Styled'
import useForm from "./hooks/Hooks";
import GlobalStateContext from '../Context/GlobalStateContext';
import axios from 'axios';

const PostDetailsPage = () => {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [form, onChange, clear] = useForm({ text: "" });
  const [postDetails, setPostDetails] = useState()

  useProtectedPage();
  const history = useHistory();

// useEffect(() => {
//   getPostDetails()
// }, [])
  const handleClick = (event) => {
    event.preventDefault();
    creatPost()
    clear();
  };
  const creatPost = () => {
    const body = {
      text: form.text   
    }
    axios.post(`${states.baseUrl}/posts/${states.postDetails.id}/comment`, body,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    )
      .then((res) => {
        window.alert("enviado com sucesso")
        console.log('object', res)
      })
      .catch((err) => {
        console.log(err)
        window.alert("Erro get")
      })
  };


  return (
    <PostList id="01">
    <Buttons onClick={() => { setters.setDetalhes(!states.detalhes)}}  >Voltar Para Home</Buttons>
    <DetailDiv key={states.postDetails.id}>
      <DisplayDivPosts>
        <h2>{states.postDetails.username}</h2>
        <h4>{states.postDetails.title}</h4>
        <p>{states.postDetails.text}</p>
      </DisplayDivPosts>
      <VoteBox>
        <ImgShadow src={'https://i.imgur.com/plqiRVk.png'} onClick={() => { requests.upVote(states.postDetails.id) }} />
        <strong>
          <p>{states.postDetails.votesCount}</p>
        </strong>
        <ImgShadow src={'https://i.imgur.com/FLkct0T.png?1'} onClick={() => { requests.downVote(states.postDetails.id) }} />
      </VoteBox>
    </DetailDiv>
    <Formbase onSubmit={handleClick}>
      <DisplayDivCreatPost>
        <h4>Novo Comentario</h4>
        <InputText
          name="text"
          value={form.text}
          onChange={onChange}
          placeholder="Insira aqui seu comentário"
          type="text"
          required
        />
        <Buttons>Enviar</Buttons>
      </DisplayDivCreatPost>
    </Formbase>
    {
       states.postDetails.comments.map((item) => {
        return (
          <DetailDiv key={item.id}>
             <DisplayDivPosts>
              <h2>{item.username}</h2>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </DisplayDivPosts>
            <VoteBox>
              <ImgShadow src={'https://i.imgur.com/plqiRVk.png'} onClick={() => { requests.upVoteComent(item.id) }} />
              <strong>
                <p>{item.votesCount}</p>
              </strong>
              <ImgShadow src={'https://i.imgur.com/FLkct0T.png?1'} onClick={() => { requests.downVoteComent(item.id) }} />
            </VoteBox>
           </DetailDiv>
        )
      })
    }
  </PostList>
  )
}

export default PostDetailsPage
