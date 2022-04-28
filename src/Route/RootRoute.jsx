import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from 'Layouts/MainLauot'
import { DIRECTION_TYPE } from './directionTypes'
const RootRouter = () => {
  return (
    <Routes>
      <Route index element={<MainLayout />} />
    </Routes>
  )
}

export default RootRouter
