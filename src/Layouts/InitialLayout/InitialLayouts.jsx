import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img4 from 'assets/images/imgSlider/img4.jpg'
import Slider from './Components/Slider'
import emblema from 'assets/images/44996.jpg'
import { Outlet, NavLink, Link } from 'react-router-dom'
import { DIRECTION_TYPE } from 'Route/directionTypes'
import Zoom from 'react-reveal/Zoom'
import SectionOfImages from './Components/SectionOfImiges'
import DetailOfHorse from './Components/DetailOfHorse'
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
    a {
      margin-right: 30px;
      text-decoration: none;
      color: white;
      font-size: 24px;
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
`

const InitialLayouts = () => {
  return (
    <StyledInitialLayouts>
      <header>
        <Zoom>
          <img src={emblema} alt="emblema" />
        </Zoom>

        <div>
          <NavLink to={DIRECTION_TYPE.login}>Login</NavLink>
          <div>Registrate</div>
        </div>
      </header>

      <main className="main">
        <div>
          <Slider />{' '}
        </div>
        {/*  <p>
            With <span>Bet300</span>
          </p>{' '}
          <p>you can made</p>
          <p>money</p>
       
        <div>
          <SectionOfImages />
        </div>*/}
      </main>
      <section>
        <DetailOfHorse />
      </section>
    </StyledInitialLayouts>
  )
}

export default InitialLayouts
