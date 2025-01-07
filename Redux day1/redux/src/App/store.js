import { configureStore } from '@reduxjs/toolkit'

import CounterReducer from "./Slices/CounterSlices"
import ToDoReducer from "./Slices/ToDoSlices"

export const store = configureStore({
  reducer: {
    counter:CounterReducer,
    todos: ToDoReducer
  },
})