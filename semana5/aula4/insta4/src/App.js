import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Postar from './components/Postar/Postar';

class App extends React.Component {
  state = {
    ID: Date.now,
    nomeDoUsuario:"",
    fotoDoUsuario:"",
    postagemDoUsuario:"",
    listPost:[]
    }


  render() {
    return (
      <div className={'app-container'}>


        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?random=1'}
          fotoPost={'https://picsum.photos/200/150?random=1'}
        />
        <Post
          nomeUsuario={'Nome1'}
          fotoUsuario={'https://picsum.photos/50/50?random=2'}
          fotoPost={'https://picsum.photos/200/150?random=2'}
        />
        <Post
          nomeUsuario={'Nome2'}
          fotoUsuario={'https://picsum.photos/50/50?random=3'}
          fotoPost={'https://picsum.photos/200/150?random=3'}
        />
        <Postar

        />
      </div>
    );
  }
}

export default App;
