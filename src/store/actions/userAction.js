import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_ACTION } from '../actioTypes'
//export const userLoggedIn = createAction(USER_ACTION.loggIn)
export const userLoggedOut = createAction(USER_ACTION.loggOut)
/*export const userLoggedIn = (email, password, userName) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email,
          password,
          userName,
        }
      )

      return response.data
      console.log(response)
    } catch (e) {
      alert('error')
    }
  }
}*/
