import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledAboutUser = styled.div`
  .welcome > p {
    text-align: center;
    font-size: 35px;
    font-family: 'playRegular';
    span {
      font-size: 40px;
      text-transform: capitalize;
    }
  }
`

const AboutUser = () => {
  const [foto, setFoto] = useState('')
  const user = useSelector((state) => state.userReducer)
  const rates = useSelector((state) => state.createRates.rates)
  console.log(rates)
  return (
    <StyledAboutUser>
      <section className="welcome">
        <p>
          Hello, <span>{user.user.userName}</span>
        </p>
        {rates.length === 0 ? (
          <p>Your dont have any history of rates</p>
        ) : (
          <p>You won</p>
        )}
      </section>
      <div></div>
    </StyledAboutUser>
  )
}

export default AboutUser
