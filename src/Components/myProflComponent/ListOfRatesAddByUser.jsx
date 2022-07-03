import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import WinnerNotDefined from './WinnerNotDefined'
const StyledListOfRatesAddByUser = styled.div``

const ListOfRatesAddByUser = (props) => {
  return (
    <StyledListOfRatesAddByUser>
      <WinnerNotDefined />
    </StyledListOfRatesAddByUser>
  )
}

export default ListOfRatesAddByUser
