import { configureStore } from '@reduxjs/toolkit'
import sysReducer from './sysSlice'


export const store = configureStore({
  reducer: {
    sys: sysReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store