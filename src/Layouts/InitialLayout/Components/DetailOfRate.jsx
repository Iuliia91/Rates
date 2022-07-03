import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ModalContext } from 'HOC/GlobalModalProvider'
import ListOFHorses from './ListOfHorses'
const StyledDetailOfHorse = styled.div`
  display: flex;
  flex-direction: row;
  width: 33%;
  justify-content: space-between;
  margin: auto;
  text-align: center;
  img {
    width: 210px;
    height: 120px;
    color: red;
    margin: 20px auto;
  }
  &div {
    display: flex;
  }
  p {
    font-size: 2em;
    font-weight: 900;
    color: grb(75, 75, 75);
    font-family: playRegular;
  }
  button {
    width: 130px;
    border: none;
    outline: none;
    background: green;
    border-radius: 10px;

    p {
      font-size: 25px;
      margin: 14px 0;
      color: white;
    }
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 50px;
    img {
      margin: 0;
      width: 8em;
      height: 6em;
    }
    p {
      font-size: 16px;
    }
  }
`

const DetailOfRate = (props) => {
  const [textInformation, setTextInformation] = useState(props.text)
  const openModal = useContext(ModalContext)
  const handleOpenDetail = () => {
    if (textInformation == 'Our horses') {
      console.log('horses')
      return openModal(
        <ListOFHorses
          close={() => {
            openModal()
          }}
        />
      )
    }
  }

  return (
    <StyledDetailOfHorse>
      <img src={props.horse} />
      <div>
        <p>{props.text}</p>
        <button onClick={handleOpenDetail}>
          <p>Look</p>
        </button>
      </div>
    </StyledDetailOfHorse>
  )
}

export default DetailOfRate
