import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../Context/GlobalStateContext";

const GlobalState = (props) => {
  const [postList, setPostList] = useState([])
  const [postDetails, setPostDetails] = useState([])
  const [url, setUrl] = useState('')
  const [baseUrl] = useState('https://us-central1-labenu-apis.cloudfunctions.net/labEddit')
  const [detalhes, setDetalhes] = useState(false)
  const [msgBox, setMsgBox] = useState(false)
  const [login, setLogin] = useState(false);

    const upVote = (id) => {
      const body = {
              "direction":1
              }
    axios.put(`${baseUrl}/posts/${id}/vote`,body,
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    )
    .then((res) => {
      window.alert("Seu Voto foi Adicionado")
      getPostList()
    })
    .catch((err) => {
      console.log(err)
      window.alert("Efetue Login ou crie uma conta!")
    })
  };

    const downVote = (id) => {
      const body = {
        "direction":0
        }
      axios.put(`${baseUrl}/posts/${id}/vote`,body,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
      )
      .then((res) => {
        window.alert("Seu Voto foi Adicionado")
        getPostList()
      })
      .catch((err) => {
        console.log(err)
        window.alert("Efetue Login ou crie uma conta!")
      })
    };



    const upVoteComent = (id) => {
      const body = {
              "direction":1
              }
    axios.put(`${baseUrl}/posts/${postDetails.id}/comment/${id}/vote`,body,
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    )
    .then((res) => {
      window.alert("Seu Voto foi Adicionado")
      getPostDetails()
    })
    .catch((err) => {
      console.log(err)
      window.alert("Efetue Login ou crie uma conta!")
    })
  };

    const downVoteComent = (id) => {
      const body = {
        "direction":0
        }
      axios.put(`${baseUrl}/posts/${postDetails.id}/comment/${id}/vote`,body,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
      )
      .then((res) => {
        window.alert("Seu Voto foi Adicionado")
        getPostDetails()
      })
      .catch((err) => {
        console.log(err)
        window.alert("Efetue Login ou crie uma conta!")
      })
    };


  const getPostList = () => {
    axios.get(`${baseUrl}/posts`,
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    )
    .then((res) => {
      setPostList(res.data.posts)
     })
    .catch((err) => {
      console.log(err)
      })
  };

  const getPostDetails = (id) => {
    axios.get(`${baseUrl}/posts/${id}`,
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    )
    .then((res) => {
      setPostDetails(res.data.post)
      setDetalhes(!detalhes)
       })
    .catch((err) => {
      console.log(err)
      window.alert("Efetue Login ou crie uma conta!")
    })
  };
 
 


    const states = {login,postDetails,detalhes,postList,msgBox,url,baseUrl };
    const setters = { setLogin,setPostDetails,setDetalhes,setPostList,setMsgBox,setUrl };
    const requests = {upVoteComent,downVoteComent,getPostDetails, getPostList,downVote,upVote };
    const data = { states, setters, requests };
    
    return (
      <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
