import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slice'

export const store = configureStore({
  reducer: {
    Register: counterReducer,
  },
})