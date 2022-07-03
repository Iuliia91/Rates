import React, { useState } from 'react'
import styled from 'styled-components'

export const ModalContext = React.createContext(false)

const StyledGlobalModalProvider = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: rgb(0, 0, 0, 0.5);
  .modal {
    max-width: 900px;
    width: 50%;
    position: absolute;
    display: flex;
    align-content: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    padding: 10px 20px;
    transform: translate(-50%, -50%);
  }

  .modalContext {
    margin: auto;
    text-align: center;
    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 20px;

      p {
        margin: auto;
      }
    }
  }
`

const GlobalModalProvider = (props) => {
  const [modalContext, setModalContext] = useState()
  console.log(modalContext)
  return (
    <React.Fragment>
      {!!modalContext && (
        <StyledGlobalModalProvider>
          <div className="modal">{modalContext}</div>
        </StyledGlobalModalProvider>
      )}

      <ModalContext.Provider value={setModalContext}>
        {props.children}
      </ModalContext.Provider>
    </React.Fragment>
  )
}

export default GlobalModalProvider
