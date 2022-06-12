import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from 'Layouts/MainLauot'

import CreateRate from 'Components/CreateRate'
import MyProfil from 'Scenes/MyProfil'
import InitialLayouts from 'Layouts/InitialLayout/InitialLayouts'
import { DIRECTION_TYPE } from './directionTypes'

const RootRouter = () => {
  return (
    <Routes>
      <Route index element={<InitialLayouts />} />

      <Route path="/" element={<MainLayout />}>
        <Route path={DIRECTION_TYPE.myprofil} element={<MyProfil />} />

        <Route path={DIRECTION_TYPE.createrate} element={<CreateRate />} />
      </Route>
    </Routes>
  )
}

export default RootRouter
