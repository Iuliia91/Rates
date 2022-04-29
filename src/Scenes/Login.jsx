import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Horses from '../assets/images/hors.png'
const StyledLogin = styled.div`
  background-color: white;
  display: block;
  height: 100px;
`

const Login = () => {
  return (
    <StyledLogin>
      <img src={Horses} />
      <div>Login</div>
    </StyledLogin>
  )
}

export default Login
