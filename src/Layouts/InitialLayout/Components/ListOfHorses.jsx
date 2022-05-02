import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Black from 'assets/images/listOfHorses/black.jpg'
import Green from 'assets/images/listOfHorses/green.png'
import Blue from 'assets/images/listOfHorses/blue.jpg'
import Pink from 'assets/images/listOfHorses/pink.jpg'
import Red from 'assets/images/listOfHorses/red.jpg'
import Yellow from 'assets/images/listOfHorses/yellow.jpg'
const StyledListOfHorses = styled.div``

const listOFHorses = [
  { name: 'Black Horse', images: Black },
  { name: 'Green Horse', images: Green },
  { name: 'Red Horse', images: Red },
  { name: 'Pink Horse', images: Pink },
  { name: 'Blue Horse', images: Blue },
  { name: 'Yellow Horse', images: Yellow },
]

const ListOFHorses = () => {
  return <StyledListOfHorses></StyledListOfHorses>
}

export default ListOFHorses
