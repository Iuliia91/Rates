import { createReducer } from '@reduxjs/toolkit'
import { userCreateRates } from '../actions/userCreateRates'

const initialState = {
  rates: [],
}

const createRates = createReducer(initialState, (builder) => {
  builder.addCase(userCreateRates, (state, action) => {
    console.log(action.payload)
  })
})

export default createRates
