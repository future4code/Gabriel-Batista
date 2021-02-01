import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter} from '../styles'
import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [valorContadorComent, setValorContadorComent] = useState(0)
  const [valorContadorCurtida, setValorContadorCurtida] = useState(0)
  const [comentList, setComentList] = useState([])
  let [inputComent, setInputComent] = useState('')
  let [comentArea, setComentArea] = useState(false)
  let [imgCurtida, setImgCurtida] = useState(iconeCoracaoBranco)

  const onClickCurtida = () => {
    if (imgCurtida === iconeCoracaoBranco) {
      setImgCurtida(iconeCoracaoPreto)
      setValorContadorCurtida(valorContadorCurtida + 1)
    } else {
      setImgCurtida(iconeCoracaoBranco)
      setValorContadorCurtida(valorContadorCurtida - 1)
    }

  };
  const onClickComentario = () => {
    setComentArea(comentArea = !comentArea)
  };

  const showComentario = () => {
    if (comentArea === true) {
      return (<SecaoComentario  enviarComentario={enviarComentario}  comentList={comentList} />)
    }
  }

  const enviarComentario = (comentario) => {
    const newList = [...comentList]
    newList.push(comentario)
    setComentList(newList)
    setValorContadorComent(valorContadorComent + 1)
  
   }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={imgCurtida}
          onClickIcone={onClickCurtida}
          valorContador={valorContadorCurtida}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={comentList.length}
        />
      </PostFooter>
      {showComentario()}
    </PostContainer>
  )
}

export default Post