import React from 'react'
import styled from 'styled-components'
import Emblema from 'assets/images/emblema.png'
import { Outlet, NavLink, Link } from 'react-router-dom'
import { DIRECTION_TYPE } from 'Route/directionTypes'
import Zoom from 'react-reveal/Zoom'
import SectionOfImages from './Components/SectionOfImiges'
const StyledInitialLayouts = styled.div`
  max-width: 100%;
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
    img {
      width: 400px;
      height: 290px;
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
    height: 400px;
    display: flex;
    flex-direction: row;
    width: 50%;
    margin: 15%;
    div {
      margin-top: 50px;
      //weigth: 50%;
    }
  }
`

const InitialLayouts = () => {
  return (
    <StyledInitialLayouts>
      <header>
        <Zoom>
          <img src={Emblema} alt="emblema" />
        </Zoom>

        <div>
          <NavLink to={DIRECTION_TYPE.login}>Login</NavLink>
          <div>Registrate</div>
        </div>
      </header>
      <main>
        <div>
          <p>
            With <span>Bet300</span>
          </p>{' '}
          <p>you can made</p>
          <p>money</p>
        </div>
        <div>
          <SectionOfImages />
        </div>
      </main>
    </StyledInitialLayouts>
  )
}

export default InitialLayouts
