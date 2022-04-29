import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from 'Layouts/MainLauot'
import Login from 'Scenes/Login'
import CreateRate from 'Components/CreateRate'
import MyProfil from 'Components/MyProfil'
import { DIRECTION_TYPE } from './directionTypes'
const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path={DIRECTION_TYPE.myprofil} element={<MyProfil />} />
        <Route path={DIRECTION_TYPE.login} element={<Login />} />
        <Route path={DIRECTION_TYPE.createrate} element={<CreateRate />} />
      </Route>
    </Routes>
  )
}

export default RootRouter
