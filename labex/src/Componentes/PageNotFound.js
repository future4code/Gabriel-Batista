import React from 'react'
import { useHistory } from "react-router-dom";
import { BaseContainer } from './Styled'



const PageNotFound = () => {
  const history = useHistory();
  return (
    <BaseContainer style={{ justifyContent: "space-around", alignItems: "center" }}>
      <h2>404 Error Page Not Found</h2>
    </BaseContainer>
  )
}

export default PageNotFound
