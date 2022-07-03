import { createReducer } from '@reduxjs/toolkit'
import { userCreateRates } from '../actions/userCreateRates'
import randomwinner from '../actions/randomWinner'
import objectOfRace from '../../helpers/objectOfRace'
const initialState = {
  rates: [],
}

const createRates = createReducer(initialState, (builder) => {
  builder
    .addCase(userCreateRates, (state, action) => {
      state.rates.push(action.payload)
    })
    .addCase(randomwinner, (state, action) => {
      state.rates.map((item) => {
        objectOfRace.time.map((objTime) => {
          console.log(objTime)
          if (objTime === item.time.getTime()) {
            console.log('found')
          }
        })
      })
    })
})

export default createRates
