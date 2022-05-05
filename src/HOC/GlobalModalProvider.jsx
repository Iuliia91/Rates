import React, { useState } from 'react'
import styled from 'styled-components'

export const ModalContext = React.createContext(false)

const StyledGlobalModalProvider = styled.div`
  margin: 0 auto;
  position: absolute;
  overflow: hidden;
  top: 0;

  z-index: 9000;
  max-width: 1300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    width: 80%;
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
