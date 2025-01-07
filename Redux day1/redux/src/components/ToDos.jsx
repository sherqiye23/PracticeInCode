import React, { useEffect } from 'react'
import ToDo from './ToDo'
import {useDispatch,useSelector} from "react-redux"
import { useState } from 'react'
import { addToDo } from '../App/Slices/ToDoSlices'
function ToDos() {
    let [inp, setInp] = useState("")
    let dispatch = useDispatch()
    let {toDo} = useSelector((state) => state.todos)

useEffect(()=>{
  localStorage.setItem("toDo",JSON.stringify(toDo))
},[toDo])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addToDo(inp))
        setInp("")
    }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
      <input value={inp} type="text" onChange={(e) => setInp(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
    <ol>
      {
        toDo.map((af) => (
            <ToDo af={af} key={af.id}/>
        ))
      }
    </ol>
    </div>
  )
}

export default ToDos
