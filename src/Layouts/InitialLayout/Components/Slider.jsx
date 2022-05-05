import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import Reveal from 'react-reveal/Reveal'
import img1 from 'assets/images/imgSlider/img1.jpg'
import img2 from 'assets/images/imgSlider/img2.jpg'
import img3 from 'assets/images/imgSlider/img3.jpg'
import img4 from 'assets/images/imgSlider/img4.jpg'
import Registration from 'Scenes/Registration'
import { ModalContext } from 'HOC/GlobalModalProvider'
const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;

  .slider_item {
    display: flex;
    flex-direction: row;
  }
  img {
    width: 40%;
    padding: 40px;
    margin: auto 0;
    border-radius: 40px;
    display: block;
    float: right;
    object-fit: cover;
  }

  .active {
    position: absolute;
    width: 45%;
    top: 0;
    right: 0;

    width: 100%;
    margin: 0;
    padding: 0;
    transition: all 0.2s;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      text-align: center;
      margin: auto;
      position: relative;
    }

    .parallelogram {
      width: 200px;

      background-color: rgb(237, 28, 36);
      margin-bottom: 20px;
    }
  }

  .block3 {
    display: block;
    height: 50px;
    width: 270px;
    background: rgba(0, 6, 159);
    border-radius: 30px;
    margin-top: 30px;
    p {
      font-size: 30px;
      font-family: 'playRegular';
      color: white;
      padding: 0;
      text-align: center;
      margin: 0 auto;
    }
  }
  p {
    color: white;
    font-family: 'playRegular';
    margin: 20px auto 40px;
    font-size: 50px;
    text-align: center;
  }

  .nonActive {
    display: none;
    transform: translateX(100%);
  }
`

const img = [
  { text: 'Registrary NOW', images: img1 },
  { text: 'Create your rate', images: img2 },
  { text: 'and...', images: img3 },
  { text: 'WIN!!!!', images: img4 },
]
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const openModal = useContext(ModalContext)
  useEffect(() => {
    setInterval(() => {
      setActiveIndex((current) =>
        current === img.length - 1 ? 0 : current + 1
      )
    }, 5000)
    return () => clearInterval()
  }, [])
  return (
    <StyledSlider>
      <div className="slider_item">
        {img.map((item, index) => (
          <div
            key={index}
            className={activeIndex === index ? 'active' : 'nonActive'}
          >
            <div>
              <Flip left>
                <div className="parallelogram">
                  <p>Rates</p>
                </div>
              </Flip>

              <Fade left>
                <p>{item.text}</p>
              </Fade>

              <div className="block3">
                <p
                  onClick={() => {
                    openModal(
                      <div>
                        <header>
                          <p>Registration</p>
                          <span
                            onClick={() => {
                              openModal()
                            }}
                          >
                            X
                          </span>
                        </header>
                        <Registration close={() => openModal()} />
                      </div>
                    )
                  }}
                >
                  Registration
                </p>
              </div>
            </div>

            <Zoom>
              <img src={item.images} />
            </Zoom>
          </div>
        ))}
      </div>
    </StyledSlider>
  )
}

export default Slider
