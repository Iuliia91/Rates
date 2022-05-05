import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import img4 from 'assets/images/imgSlider/img4.jpg'
import Slider from './Components/Slider'
import emblema from 'assets/images/44996.jpg'
import { Outlet, NavLink, Link } from 'react-router-dom'
import { DIRECTION_TYPE } from 'Route/directionTypes'
import Zoom from 'react-reveal/Zoom'
import DetailOfRate from './Components/DetailOfRate'
import horse from 'assets/images/horse.png'
import statistic from 'assets/images/statistic.png'
import Information from './Components/Information'
import Registration from 'Scenes/Registration'
import { ModalContext } from 'HOC/GlobalModalProvider'

const StyledInitialLayouts = styled.div`
  max-width: 1300px;
  margin: auto;
  height: 100%;
  position: relative;
  background-color: rgb(246, 246, 246);
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
    height: 400px;
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

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: grb(75, 75, 75);
    p {
      text-align: center;
      color: grey;

      margin: 0;
    }
  }
`

const InitialLayouts = () => {
  const openModal = useContext(ModalContext)

  const handleOpenListOfHors = () => {
    return openModal()
  }
  return (
    <StyledInitialLayouts>
      <header>
        <Zoom>
          <img src={emblema} alt="emblema" />
        </Zoom>

        <div>
          <NavLink to={DIRECTION_TYPE.login}>Login</NavLink>
          <button
            onClick={() => {
              openModal(<Registration />)
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
      <section>
        <DetailOfRate horse={horse} text={'Our horses'} />
        <DetailOfRate horse={statistic} text={'Horse statistic'} />
      </section>
      <section>
        <Information />
      </section>
      <footer>
        <p>@2022PrusakovaIuliia</p>
      </footer>
    </StyledInitialLayouts>
  )
}

export default InitialLayouts
