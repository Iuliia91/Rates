import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink, Outlet } from 'react-router-dom'
const StyledHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
`

const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <li>My profil</li>
    </StyledHeaderMenu>
  )
}

export default HeaderMenu
