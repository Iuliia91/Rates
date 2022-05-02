import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from 'store/initStore'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import RootRouter from 'Route/RootRoute'
import GlobalModalProvider from 'HOC/GlobalModalProvider'
import GlobalStyledProvide from 'HOC/GlobalStyledProvider'
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <GlobalStyledProvide />
          <GlobalModalProvider>
            <RootRouter />
          </GlobalModalProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
