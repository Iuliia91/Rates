import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { DIRECTION_TYPE } from 'Route/directionTypes'
const StyledHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  a {
    padding-right: 25px;
    text-decoration: none;
    color: white;
    font-size: 24px;
  }
`

const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <NavLink to={DIRECTION_TYPE.myprofil}>My Profil</NavLink>
      <NavLink to={DIRECTION_TYPE.createrate}>Create rates</NavLink>
      <NavLink to={DIRECTION_TYPE.myprofil}>History of rates</NavLink>
    </StyledHeaderMenu>
  )
}

export default HeaderMenu
