import { createReducer } from '@reduxjs/toolkit'
import { userCreateRates } from '../actions/userCreateRates'
import randomwinner from '../actions/randomWinner'
const initialState = {
  rates: [],
}

const createRates = createReducer(initialState, (builder) => {
  builder
    .addCase(userCreateRates, (state, action) => {
      console.log(action.payload.date)
      state.rates.push(action.payload)
    })
    .addCase(randomwinner, (state, action) => {
      console.log(action.payload)
    })
})

export default createRates
