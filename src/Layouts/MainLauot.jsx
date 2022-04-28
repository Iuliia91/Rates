import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import HeaderMenu from 'Components/HeaderMenu'

const StyledMainLayouts = styled.div`
  max-width: 1300px;

  background-color: red;
  margin: auto;
`
const MainLayout = () => {
  return (
    <StyledMainLayouts>
      <header>
        <section>
          <HeaderMenu />
        </section>
        <section></section>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Hello</footer>
    </StyledMainLayouts>
  )
}

export default MainLayout
