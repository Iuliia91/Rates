import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from 'store/initStore'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import RootRouter from 'Route/RootRoute'
import MainLayout from 'Layouts/MainLauot'
import GlobalStyledProvide from 'HOC/GlobalStyledProvider'
const App = () => {
  // return <RootRouter />
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <GlobalStyledProvide />
          <RootRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
