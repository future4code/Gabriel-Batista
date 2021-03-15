import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import GlobalStateContext from '../Context/GlobalStateContext';
import { FooterBox, BasicInput, Buttons, PostList, Formbase, InputText, DisplayDivCreatPost, DisplayDivPosts, DetailDiv, VoteBox, ImgShadow, CommentBox, Counter, Loading } from './Styled'
import PostDetailsPage from './PostDetailsPage'
import useForm from "./hooks/Hooks";
import '../App.css'

function PostsList() {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [form, onChange, clear] = useForm({ title: "", text: "" });


  let scrollToElement = async () => {
    document.getElementById('01').scrollIntoView();
  }


  useEffect(() => {
    requests.getPostList()

  }, [requests])

  const handleClick = (event) => {
    event.preventDefault();
    clear();
    creatPost()
  };

  const creatPost = () => {
    const body = {
      text: form.title,
      title: form.text
    }
    axios.post(`${states.baseUrl}/posts`, body,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    )
      .then((res) => {
        console.log('object', res)
      })
      .catch((err) => {
        console.log(err)
        window.alert("Efetue Login ou crie uma conta!")
      })
  };

  const CarregarLista = () => {
    if (states.detalhes) {
      return (<PostDetailsPage />)
    } else if (states.postList) {
      return (
        <PostList id="01">
            {localStorage.token ? 
          <Formbase onSubmit={handleClick}>
            <DisplayDivCreatPost>
              <h4>Novo Post</h4>
              <label> Titulo </label>
              <BasicInput
                name="title"
                value={form.title}
                onChange={onChange}
                placeholder="title"
                type="text"
                title='Minimo de 4 caracteres'
                required
              />
              <InputText
                name="text"
                value={form.text}
                onChange={onChange}
                placeholder="Insira aqui o texto desejado"
                type="text"
                required
              />
              <Buttons>Enviar</Buttons>
            </DisplayDivCreatPost>
          </Formbase>
               : 
            <h2>Faça login para visualizar os Conteúdos</h2>
            }
          {
            states.postList.map((item) => {
              return (
                <DetailDiv key={item.id}>
                  <DisplayDivPosts>
                    <h2>{item.username}</h2>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </DisplayDivPosts>
                  <VoteBox>
                    <ImgShadow src={'https://i.imgur.com/plqiRVk.png'} onClick={() => { requests.upVote(item.id) }} />
                    <strong>
                      <p>{item.votesCount}</p>
                    </strong>
                    <ImgShadow src={'https://i.imgur.com/FLkct0T.png?1'} onClick={() => { requests.downVote(item.id) }} />
                  </VoteBox>
                  <CommentBox>
                    <strong>
                      <Counter onClick={() => { requests.getPostDetails(item.id) }}>{item.commentsCount}</Counter>
                    </strong>
                  </CommentBox>
                </DetailDiv>
              )
            })}
        </PostList>)
    }
  }
  return (
    <Loading>
      {CarregarLista()}
      <FooterBox>
        <Buttons onClick={scrollToElement}>Voltar ao Topo</Buttons>
      </FooterBox>
    </Loading>

  )
}

export default PostsList



