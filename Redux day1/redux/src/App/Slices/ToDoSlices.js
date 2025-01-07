
import { createSlice } from '@reduxjs/toolkit'

let local = JSON.parse(localStorage.getItem("toDo"))
const initialState = {
    toDo: local ? local : []
}


export const ToDoSlice = createSlice({
    name: "toDo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            let newTodo = {
                id: state.toDo.length+1,
                todo: action.payload,
                isComplete: false
            }

                state.toDo = [...state.toDo,newTodo]
        },
        deleteToDo:(state,action)=>{
            let filter = state.toDo.filter(filter => filter.id != action.payload)
            state.toDo = [...filter]
            
        },
        completeToDo:(state,action)=>{
                let find = state.toDo.find(state => state.id == action.payload)
                    find.isComplete = !find.isComplete
            
        }
    }
})

export const { addToDo,deleteToDo,completeToDo } = ToDoSlice.actions
export default ToDoSlice.reducer