import { configureStore } from '@reduxjs/toolkit'
import  currentQueryReducer  from '../features/currentQuerySlice'
import  searchQueryReducer  from '../features/searchQuerySlice'
import { kinopoiskApi } from '../services/kinopoiskAPI'

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    currentQuerySlice: currentQueryReducer,
    searchQuerySlice: searchQueryReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
})


