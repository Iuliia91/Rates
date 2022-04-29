import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, NavLink, Link } from 'react-router-dom'
import HeaderMenu from 'Components/HeaderMenu'
import { DIRECTION_TYPE } from 'Route/directionTypes'
import Login from '../Scenes/Login'

const StyledMainLayouts = styled.div`
  max-width: 1300px;
  margin: auto;
  height: 100%;
  background-color: rgb(246, 246, 246);
  header {
    display: flex;
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(237, 28, 36);

    section {
      margin: auto 30px;
      a {
        text-decoration: none;
        color: white;
        font-size: 24px;
      }
    }
  }
  main {
    width: 100%;
    height: calc(100vh - 120px);
    overflow: auto;
  }
  footer {
    background-color: rgb(214, 214, 214);
    height: 60px;
    position: relative;

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) }
    }
  }
`
const MainLayout = () => {
  return (
    <StyledMainLayouts>
      <header>
        <section>
          <HeaderMenu />
        </section>
        <section>
          <NavLink to={DIRECTION_TYPE.login}>Login</NavLink>
        </section>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>@PrusakovaIuliia</p>
      </footer>
    </StyledMainLayouts>
  )
}

export default MainLayout
