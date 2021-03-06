import React, { useContext } from 'react'
import styled from 'styled-components'
import img4 from 'assets/images/imgSlider/img4.jpg'
import { useSelector } from 'react-redux'
import Slider from './Components/Slider'
import emblema from 'assets/images/44996.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Login from 'Scenes/Login'

import Zoom from 'react-reveal/Zoom'
import DetailOfRate from './Components/DetailOfRate'
import horse from 'assets/images/horse.png'
import statistic from 'assets/images/statistic.png'
import Information from './Components/Information'
import Registration from 'Scenes/Registration'
import { ModalContext } from 'HOC/GlobalModalProvider'
import old from 'assets/images/6420.png'
import VISA from 'assets/images/List.png'
import AboutProject from './Components/AboutProject'

const StyledInitialLayouts = styled.div`
  max-width: 1500px;
  margin: auto;
 
  height: 100%;
  position: relative;
  
  header {
    display: flex;
    width: 100%;
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(237, 28, 36);
    align-items: center;

    & img {
      width: 100px;
      height: 90px;
      border-radius: 50%;
      margin-left: 20px;
    }
    a,
    button {
      margin-right: 30px;
      text-decoration: none;
      color: white;
      font-size: 24px;
      background-color: transparent;
      border: none;
    }
    & div {
      display: flex;
      flex-direction: row;
     margin-right: 30px;
    }
  }

  main {
    display: block;
    position: relative;
    height: 45em;
    background-image: url(${img4});
    overflow: hidden;
    background-size: cover;

    // background: rgb(33, 60, 187);
    width: 100%;
    div {
      background: rgba(33, 60, 187, 0.5);
    }
  }

  & section {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    justify-content: space-evenly;
   
  }

  .text {
    
    margin: 30px auto;
    background-color: rgb(246, 246, 246);
    

 
    p {
      font-size: 18px;
      margin: 6px 0;
      color grey
    }

    img {
      heigth: 60px;
      width: 60px;
      text-align: center;
      
    }
  }
.section{
  width:80%;
  margin:auto;
}
.block_ofInf{
  margin-bottom:8em;
}
section{
  width:100%;
}
  footer {
   
    width: 100%;
    background: grb(75, 75, 75);
    padding:60px 0 10px 0;
    
    p {
      text-align: center;
      color: grey;

      margin: 0;
    }
  }

  @media screen and (max-width:800px){
    main{
      height: 40em;
    }
    .block_ofInf{
      flex-direction:column;
    }
    .information{
      margin:0;
    }
  }

  @media screen and (max-width: 500px){
    header{
      img{
        width:30%;
      }
      button{
      font-size: 20px;
      margin-right: 0;
    }
    }
    
  }
`

const InitialLayouts = () => {
  const openModal = useContext(ModalContext)
  const user = useSelector((state) => state.userReducer)

  const navigate = useNavigate()
  const handleOpenLoginWindow = () => {
    if (user.isLoggedIn) {
      console.log('user Login')
      return navigate('/myprofil')
    } else {
      openModal(<Login onClose={() => openModal()} />)
    }
  }

  const handleOpenRegistrationWindow = () => {
    if (user.isLoggedIn) {
      navigate('/myprofil')
    } else {
      openModal(<Registration onClose={() => openModal()} />)
    }
  }

  return (
    <StyledInitialLayouts>
      <header>
        <Zoom>
          <img src={emblema} alt="emblema" />
        </Zoom>

        <div>
          <button
            onClick={() => {
              handleOpenLoginWindow()
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              handleOpenRegistrationWindow()
            }}
          >
            Registrate
          </button>
        </div>
      </header>

      <main className="main">
        <div>
          <Slider />
        </div>
      </main>
      <section className="block_ofInf">
        <DetailOfRate horse={horse} text={'Our horses'} />
        <DetailOfRate horse={statistic} text={'Horse statistic'} />
      </section>

      <section className="section">
        <AboutProject />

        {/* */}
      </section>
      <section className="information">
        <Information />
      </section>
      <footer>
        <p>@2022PrusakovaIuliia</p>
        <p>iuliiaprusakova@gmail.com</p>
      </footer>
    </StyledInitialLayouts>
  )
}

export default InitialLayouts
