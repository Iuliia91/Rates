import { combineReducers } from 'redux'
import createRates from './createRates'
import userReducer from '../reducers/userReducer'

const rootReducer = combineReducers({
  userReducer,
  createRates,
})

export default rootReducer
