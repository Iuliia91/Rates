import React from 'react'
import styled from 'styled-components'
import redbull from 'assets/images/redbull.png'
import Fiorentina from 'assets/images/Fiorentina.svg'
const StyledInformation = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  background: rgb(239, 239, 239);
  margin-bottom: 30px;
  position: relative;
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin: 40px 0;
    section {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0;
      // padding: 0;

      p {
        margin: 3px;
        font-family: playRegular;
      }

      img {
        width: 40px;
        padding: 4px;
      }
    }
  }
`

const Information = () => {
  return (
    <StyledInformation>
      <div>
        <section>
          <h1>Information</h1>
          <p>Registration</p>
          <p>Choose horse</p>
          <p>Choose time</p>
          <p>WIN</p>
          <p></p>
        </section>
        <section>
          <h1>Rules</h1>
          <p>You 18+</p>
          <p>Security</p>
        </section>
        <section>
          <h1>Our partner</h1>
          <img src={redbull} />
          <img src={Fiorentina} />
        </section>
      </div>
    </StyledInformation>
  )
}

export default Information
