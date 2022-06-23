import rootReducer from './reducers/rootReducer'
import { applyMiddleware, compose } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { enableES5 } from 'immer'
enableES5()

const middleWare = [thunk]
const middleWareEnhancer = applyMiddleware(...middleWare)
const enhasers = [middleWareEnhancer]

const persistConfig = {
  key: 'root',
  storage,
  version: 0,
}
const persisterRootReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persisterRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: enhasers,
})

export const persistor = persistStore(store)
