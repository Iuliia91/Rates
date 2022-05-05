import { userLoggedIn, userLoggedOut } from '../actions/userAction'

import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  userName: '',
  userEmail: '',
  password: '',
  isLoggedIn: false,
}

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userLoggedIn, (state, action) => {
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
      state.password = action.payload.password
      state.isLoggedIn = action.payload.isLoggedIn
    })
    .addCase(userLoggedOut, (state, payload) => {
      state.userName = ''
      state.userEmail = ''
      state.password = ''
      state.isLoggedIn = false
    })
})

export default userReducer
