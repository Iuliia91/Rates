import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Table from './Table'
const StyledWinnerNotDefined = styled.div``

const WinnerNotDefined = (props) => {
  const dataWithRates_WinnerNotDefined = useSelector(
    (state) => state.createRates.rates
  )
  console.log(dataWithRates_WinnerNotDefined)
  return (
    <StyledWinnerNotDefined>
      <Table dataList={dataWithRates_WinnerNotDefined} />
    </StyledWinnerNotDefined>
  )
}

export default WinnerNotDefined
