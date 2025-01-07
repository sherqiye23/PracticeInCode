import React from 'react'
import { useDispatch } from 'react-redux'
import { completeToDo, deleteToDo } from '../App/Slices/ToDoSlices'
import  Swal  from 'sweetalert2';


function ToDo({af}) {
  let dispatch = useDispatch()

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
    dispatch(deleteToDo(id))
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  return (
      <li key={af.id} ><span style={{ textDecoration:  af.isComplete ? "line-through" : ""}}>{af.todo} </span> <button onClick={()=>handleDelete(af.id)} >Delete</button> <button onClick={()=>dispatch(completeToDo(af.id))}>{af.isComplete ? 'uncomplete' : "complete"}</button></li>
  )
}

export default ToDo
