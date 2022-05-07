import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
const StyledMyProfil = styled.div``

const MyProfil = () => {
  const user = useSelector((state) => state.userReducer)
  console.log(user)
  return <div>My Profil</div>
}

export default MyProfil
