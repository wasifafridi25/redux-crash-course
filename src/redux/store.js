import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import { postApi } from './postsSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [postApi.reducerPath]: postApi.reducer,
  },

  //for caching purpose - for better performance when fetching api
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})