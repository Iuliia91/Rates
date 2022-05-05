import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from 'Layouts/MainLauot'
import Login from 'Scenes/Login'
import CreateRate from 'Components/CreateRate'
import MyProfil from 'Components/MyProfil'
import InitialLayouts from 'Layouts/InitialLayout/InitialLayouts'
import { DIRECTION_TYPE } from './directionTypes'
import { userLoggedIn } from 'store/actions/userAction'
import { useSelector } from 'react-redux'
import Registration from 'Scenes/Registration'
import { ModalContext } from 'HOC/GlobalModalProvider'
const RootRouter = () => {
  const user = useSelector((state) => state.userReducer)
  const openModal = useContext(ModalContext)

  console.log(user.isLoggedIn)
  const getUserStartOPage = (component) => {
    if (user.isLoggedIn) {
      return <Navigate to={DIRECTION_TYPE.myprofil} />
    } else {
      return component
    }
  }
  const renderForLoggedInUser = (component) => {
    if (user.isLoggedIn) {
      return component
    } else {
      return <InitialLayouts />
    }
  }

  return (
    <Routes>
      <Route index element={<InitialLayouts />} />

      <Route path="/" element={renderForLoggedInUser(<MainLayout />)}>
        <Route path={DIRECTION_TYPE.myprofil} element={<MyProfil />} />

        <Route path={DIRECTION_TYPE.createrate} element={<CreateRate />} />
      </Route>
    </Routes>
  )
}

export default RootRouter
