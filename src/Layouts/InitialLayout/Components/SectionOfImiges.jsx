import React from 'react'
import styled from 'styled-components'
import AnimationImg from 'Components/AnimationImg'
import registrImg from 'assets/images/registration.png'
import money from 'assets/images/money.png'
const StyledSectionOfImiges = styled.div`
  heigth: 100%;
  .img1 {
    position: absolute;
    top: 0;
    right: 50px;
  }
  .text {
    position: absolute;
    top: 300px;
    right: 400px;
  }

  .img2 {
    position: absolute;

    top: 400px;
    right: 50px;
  }
`

const SectionOfImages = () => {
  const text = 'Create our rate'
  return (
    <StyledSectionOfImiges>
      <div className="img1">
        <AnimationImg img={registrImg} time={800} />
      </div>
      <div className="text">
        <AnimationImg text={text} time={1000} />
      </div>
      <div className="img2">
        <AnimationImg img={money} time={1500} />
      </div>
    </StyledSectionOfImiges>
  )
}

export default SectionOfImages
