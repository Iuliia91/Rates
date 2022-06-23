import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Horses } from '../Layouts/InitialLayout/Components/ListOfHorses'
const StyledCreateRate = styled.div`
  .list {
    display: grid;
    height: 300px;
  }
`

const CreateRate = () => {
  const [open, setOpen] = useState(false)
  const handleID = (id) => {
    console.log(id)
  }
  return (
    <StyledCreateRate>
      <p onClick={() => setOpen(!open)}>Choose horse</p>
      {open && (
        <div className="list">
          <Horses handleID={handleID} />
        </div>
      )}
    </StyledCreateRate>
  )
}

export default CreateRate
