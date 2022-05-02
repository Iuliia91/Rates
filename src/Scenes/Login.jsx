import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledLogin = styled.div`
  background-color: white;
  display: block;
  height: 100px;
`

const Login = () => {
  return (
    <StyledLogin>
      <header>
        <p>Welcome back to HorsRate</p>
        <span>X</span>
      </header>
      <main></main>
    </StyledLogin>
  )
}

export default Login
