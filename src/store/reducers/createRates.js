import { createReducer } from '@reduxjs/toolkit'
import { userCreateRates } from '../actions/userCreateRates'

const initialState = {
  rates: [],
}

const createRates = createReducer(initialState, (builder) => {
  builder.addCase(userCreateRates, (state, action) => {
    state.rates.push(action.payload)
  })
})

export default createRates
