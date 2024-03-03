import { configureStore } from '@reduxjs/toolkit'
import changeBgColor from '../Redux-Actions/changeBgColor'

export const store = configureStore({
  reducer: {
    color: changeBgColor,
  },
})