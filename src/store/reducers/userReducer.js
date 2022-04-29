import userData from '../actions/userAction'

import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  user: '',
}

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(userData, (state, action) => {})
})

export default userReducer
