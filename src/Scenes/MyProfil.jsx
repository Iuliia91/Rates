import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import AboutUser from 'Components/myProflComponent/AboutUser'
const StyledMyProfil = styled.div``

const MyProfil = () => {
  return (
    <React.Fragment>
      <AboutUser />
    </React.Fragment>
  )
}

export default MyProfil
