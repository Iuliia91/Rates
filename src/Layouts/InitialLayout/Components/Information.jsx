import React from 'react'
import styled from 'styled-components'
import list from 'assets/images/List.png'
import yers from 'assets/images/6420.png'
import redbull from 'assets/images/redbull.png'
//import Marquee from 'react-fast-marquee'
const StyledInformation = styled.div`
  max-width: 1300px;
  margin: auto;
  .overlay {
    background: red;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evently;

    position: relative;

    img {
      width: 150px;
      height: 70px;
      padding-right: 4em;
    }
  }
`

const Information = () => {
  return (
    <StyledInformation>
      <div className="img">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          labore eum voluptatum deserunt. Ab soluta ut cupiditate amet, suscipit
          consectetur laudantium similique, recusandae nisi repellendus
          voluptatibus veritatis fugiat dolorem optio ad quisquam nesciunt
          labore et facilis quasi animi sit vitae. Veritatis quis nulla eveniet
          est iure quam soluta expedita, voluptatem assumenda, similique
          laudantium eum quibusdam provident officiis accusantium inventore
          perferendis omnis esse quasi. Provident magnam autem est blanditiis
          voluptatibus incidunt modi tempora suscipit sint velit. Blanditiis est
          neque qui excepturi voluptate, saepe alias at quisquam quaerat ea
          quasi sequi cumque ex nisi iure dolore vitae. Dolorum voluptas nostrum
          deserunt assumenda!
        </p>
        {/* <Marquee ctyle={{ background: 'red' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui at
            sapiente magnam neque placeat delectus adipisci, illo accusantium
            distinctio voluptas!
          </p>
        </Marquee>*/}
      </div>
    </StyledInformation>
  )
}

export default Information
