import {
  userLoggedIn,
  userLoggedOut,
  userRegistration,
} from '../actions/userAction'

import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isLoggedIn: false,
}

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userLoggedIn.fulfilled, (state, action) => {
      console.log(action.payload)
      if (action.payload) {
        state.user = { ...action.payload }
        state.isLoggedIn = true
      }
    })
    .addCase(userRegistration.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = { ...action.payload }
        state.isLoggedIn = true
      }
    })
    .addCase(userLoggedOut, (state, payload) => {
      state.userName = ''
      state.userEmail = ''
      state.password = ''
      state.isLoggedIn = false
    })
})

export default userReducer
