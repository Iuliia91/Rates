import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { CreateRates } from '../actioTypes'
export const userCreateRates = createAction(CreateRates.userCreateRate)
