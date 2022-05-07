import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, NavLink, Link } from 'react-router-dom'
import HeaderMenu from 'Components/HeaderMenu'
import Zoom from 'react-reveal/Zoom'
import emblema from 'assets/images/44996.jpg'
const StyledMainLayouts = styled.div`

  margin: auto;
  height: 100%;
  background-color: rgb(246, 246, 246);
  header {
    display: flex;
    width: 100%;
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(237, 28, 36);

    section {
      margin: auto 30px;
      
      img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-left: 20px;
      }
    }
  }
 main {
    width: 85%;
    height: calc(100vh - 120px);
    overflow: auto;
    margin:auto;
    padding-top:100px;
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
          {' '}
          <Zoom>
            <img src={emblema} alt="emblema" />
          </Zoom>
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
