import rootReducer from './reducers/rootReducer'
import { applyMiddleware, compose } from 'redux'
import { configureStore, createStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { enableES5 } from 'immer'
enableES5()

const middleWare = [thunk]
const middleWareEnhancer = applyMiddleware(...middleWare)
const enhasers = [middleWareEnhancer]

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...enhasers)
  : compose([...enhasers])

const persistConfig = {
  key: 'root',
  storage,
  version: 0,
}
const persisterRootReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persisterRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
