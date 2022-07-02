import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Black from 'assets/images/listOfHorses/black.jpg'
import Green from 'assets/images/listOfHorses/green.png'
import Blue from 'assets/images/listOfHorses/blue.png'
import Pink from 'assets/images/listOfHorses/pink.png'
import Red from 'assets/images/listOfHorses/red.png'
import Yellow from 'assets/images/listOfHorses/yellowpng.png'
import img3 from 'assets/images/imgSlider/img2.jpg'
const StyledListOfHorses = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 0;
  align-items: center;
  padding: 100px 0;
  position: relative;
  border: 2px solid red;
  border-radius: 20px;
  background: rgba(33, 60, 187, 0.8);
  span {
    position: absolute;
    top: 0;
    right: 30px;
    color: white;
    font-size: 20px;
    margin-top: 5px;
  }
  .main {
    margin: auto;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      border-right: 1px solid rgba(0, 0, 0, 0.4);
    }

    p {
      text-align: center;
      color: white;
      font-size: 20px;
    }
  }
`

const StyledDiv = styled.div`
  background-image: url(${img3});
  border-radius: 20px;
`

const StyledHorses = styled.div`
  background: pink;
`
const listOFHorses = [
  { name: 'Black Horse', images: Black, id: 'Black' },

  { name: 'Red Horse', images: Red, id: 'Red' },
  { name: 'Pink Horse', images: Pink, id: 'Pink' },

  { name: 'Yellow Horse', images: Yellow, id: 'Yellow' },
]

export const Horses = (props) => {
  return (
    <>
      {' '}
      {listOFHorses.map((item, index) => (
        <div key={item.id}>
          <div
            className="main"
            onClick={() => (props.handleID ? props.handleID(item) : '')}
          >
            <img src={item.images} />
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </>
  )
}

const ListOFHorses = (props) => {
  return (
    <StyledDiv>
      <StyledListOfHorses>
        <span onClick={props.close}>Close</span>
        <Horses />
      </StyledListOfHorses>
    </StyledDiv>
  )
}

export default ListOFHorses
