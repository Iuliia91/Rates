import React, { useState } from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom'
const StyledAnimationImg = styled.div`
  img {
    width: 400px;
    height: 350px;
  }
  p {
    font-size: 40px;
    color: blue;
  }
`

const AnimationImg = (props) => {
  const [showImg, setShowImg] = useState(false)
  const [showText, setShowText] = useState(false)
  const images = props.img
  const time = props.time
  const text = props.text
  setTimeout(() => {
    if (images) {
      setShowImg(true)
    } else if (text) {
      setShowText(true)
    }
  }, time)

  return (
    <StyledAnimationImg>
      <div>
        {showImg && (
          <Zoom>
            <img src={images} />
          </Zoom>
        )}
      </div>
      <div>
        {showText && (
          <Zoom>
            <p>{text}</p>
          </Zoom>
        )}
      </div>
    </StyledAnimationImg>
  )
}

export default AnimationImg
