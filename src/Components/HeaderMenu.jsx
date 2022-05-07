import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { DIRECTION_TYPE } from 'Route/directionTypes'
const StyledHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  a {
    padding-right: 24px;
    text-decoration: none;
    color: white;
    font-size: 30px;
    font-family: 'playRegular';
  }

  .active {
    color: green;
  }
`

const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <NavLink to={DIRECTION_TYPE.myprofil} activeclassname={'active'}>
        My Profil
      </NavLink>
      <NavLink to={DIRECTION_TYPE.createrate} activeclassname={'active'}>
        Create rates
      </NavLink>
      <NavLink to={DIRECTION_TYPE.history} activeclassname={'active'}>
        History of rates
      </NavLink>
    </StyledHeaderMenu>
  )
}

export default HeaderMenu
