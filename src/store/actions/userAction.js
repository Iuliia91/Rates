import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_ACTION } from '../actioTypes'

export const userLoggedOut = createAction(USER_ACTION.loggOut)

export const userLoggedIn = createAsyncThunk(
  USER_ACTION.loggIn,

  async (item) => {
    console.log(item)
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email: item.email,
          password: item.password,
          userName: item.userName,
        }
      )
      console.log(response)
      return { ...response.data.user }
    } catch (e) {
      console.log(e)
      alert(e.response.data.message)
    }
  }
)

export const userRegistration = createAsyncThunk(
  'user_registrated',

  async (item) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/registration',
        {
          email: item.email,
          password: item.password,
          userName: item.userName,
        }
      )

      return response
    } catch (e) {
      console.log(e.response.data.message, 'we here')
      alert(e.response.data.message)
    }
  }
)
