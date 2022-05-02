import React from 'react'
import styled from 'styled-components'

const StyledDetailOfHorse = styled.div`
  display: flex;
  flex-direction: row;
  width: 33%;
  justify-content: space-between;
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
    font-size: 20px;
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
`

const DetailOfRate = (props) => {
  return (
    <StyledDetailOfHorse>
      <img src={props.horse} />
      <div>
        <p>{props.text}</p>
        <button>
          <p>Look</p>
        </button>
      </div>
    </StyledDetailOfHorse>
  )
}

export default DetailOfRate
