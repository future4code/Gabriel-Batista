import React from 'react'
import '../../App.css'
import { Homepage, HomeVideo,Titlehome } from '../Styled'
import clip from '../../Video/video.mp4';



const Welcome = () => {

  return (
    <Homepage >
      <HomeVideo autoPlay loop muted >
        <source src={clip} type='video/mp4' />
        <source src={clip} type="video/ogg" />
      </HomeVideo>
      <Titlehome>As Estrelas ao seu alcance</Titlehome>
    </Homepage>
  )
}

export default Welcome
