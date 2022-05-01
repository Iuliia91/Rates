import React from 'react'
import styled from 'styled-components'
import horse from 'assets/images/horse.png'

const StyledDetailOfHorse = styled.div`
  display: flex;
  flex*direction: row;
  img {
    width: 200px;
    color: red;
  }

  button {
    background: green;
  }
`

const DetailOfHorse = () => {
  return (
    <StyledDetailOfHorse>
      <img src={horse} />
      <div>
        <p>Our horses</p>
        <button>Look</button>
      </div>
    </StyledDetailOfHorse>
  )
}

export default DetailOfHorse
