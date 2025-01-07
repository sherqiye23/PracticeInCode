import { createSlice } from "@reduxjs/toolkit"

let local = JSON.parse(localStorage.getItem("count"))
const initialState = {
    count: local ? local : 0,
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        decrement: (state) => {
            state.count++
        },
        increment: (state) => {
            state.count--
        },
        reset: (state) => {
            state.count = 0
        },
        decrementByAmount: (state, action) => {
            state.count += action.payload
        },
        incrementByAmount: (state, action) => {
            state.count -= action.payload
        }
    }

})


export const { decrement, increment, decrementByAmount, incrementByAmount, reset } = CounterSlice.actions
export default CounterSlice.reducer