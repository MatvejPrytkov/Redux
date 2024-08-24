import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import mortgageReducer from './features/mortgage/MortgageSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mortgage: mortgageReducer
  },
})