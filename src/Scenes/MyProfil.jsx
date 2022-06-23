import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import AboutUser from 'Components/myProflComponent/AboutUser'
import { userLoggedIn } from '../store/actions/userAction'
const StyledMyProfil = styled.div``

const MyProfil = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.userReducer)

  useEffect(() => {
    if (!user.isLoggedIn) {
      return navigate('/')
    }
  })

  return (
    <React.Fragment>
      <AboutUser />
    </React.Fragment>
  )
}

export default MyProfil
