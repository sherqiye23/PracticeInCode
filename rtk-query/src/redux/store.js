import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { SuppliersApi } from './suppliersApi'

export const store = configureStore({
  reducer: {
    [SuppliersApi.reducerPath]: SuppliersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SuppliersApi.middleware),
})

setupListeners(store.dispatch)