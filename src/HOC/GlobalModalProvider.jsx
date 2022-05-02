import React, { useState } from 'react'
import styled from 'styled-components'

export const ModalContext = React.createContext()

const StyledGlobalModalProvider = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 9000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /*.modal {
    position:relativ;
    display: flex;
    align-items: center;
    justify-content: center;
    background:#FFFFFF;
    box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);
    border-radius: 10px;
    );

    border-radius: 20px;
    width: 50%;
    height: 400px;
    position: absolute;
  }*/
`

const GlobalModalProvider = (props) => {
  const [modalContext, setModalContext] = useState()

  return (
    <React.Fragment>
      {!modalContext && (
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
