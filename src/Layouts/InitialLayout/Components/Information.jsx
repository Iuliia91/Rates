import React from 'react'
import styled from 'styled-components'
import list from 'assets/images/List.png'
import yers from 'assets/images/6420.png'
import redbull from 'assets/images/redbull.png'

const StyledInformation = styled.div`
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evently;

    position: relative;

    img {
      width: 200px;
      height: 100px;
      padding-right: 4em;
    }
  }
`

const Information = () => {
  return (
    <StyledInformation>
      <div className="img">
        <img src={list} />

        <img src={yers} />
        <img src={redbull} />
      </div>
    </StyledInformation>
  )
}

export default Information
