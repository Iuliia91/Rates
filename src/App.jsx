import React from 'react'
import { Provider } from 'react-redux'
//import { store, persist } from 'store/initStore'
///import { PersistGate } from 'redux-persist/integration/react'
//import { BrowserRouter } from 'react-router-dom'
import RootRouter from 'Route/RootRoute'
import MainLayout from 'Layouts/MainLauot'
import GlobalStyledProvide from 'HOC/GlobalStyledProvider'
const App = () => {
  // return <RootRouter />
  return (
    <React.Fragment>
      <GlobalStyledProvide />
      <MainLayout />
    </React.Fragment>
  )
}

export default App
