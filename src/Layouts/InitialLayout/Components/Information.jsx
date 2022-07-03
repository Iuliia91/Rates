import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from '../../../Scenes/Login'
import { ModalContext } from '../../../HOC/GlobalModalProvider'
//import Marquee from 'react-fast-marquee'
const StyledInformation = styled.div`
  max-width: 1500px;
  margin: auto;
  width: 100%;
  .img {
    background: red;
    width: 100%;
  }
  .titel {
    width: 100%;
    font-size: 50px;
    color: white;
    padding: 10px 0;
    text-align: center;
  }
  .img:hover {
    background: rgba(33, 60, 187);
  }

  @media screen and (max-width: 800px) {
    .titel {
      padding: 0;
      font-size: 2.5em;
    }
  }
`

const Information = () => {
  const openModal = useContext(ModalContext)
  const user = useSelector((state) => state.userReducer)
  const navigate = useNavigate()
  const handleNavigate = () => {
    if (user.isLoggedIn) {
      navigate('/createrate')
    } else {
      openModal(<Login onClose={() => openModal()} />)
    }
  }

  return (
    <StyledInformation onClick={() => handleNavigate()}>
      <div className="img">
        <p className="titel">PLAY NOW!!!!!</p>
      </div>
    </StyledInformation>
  )
}

export default Information
