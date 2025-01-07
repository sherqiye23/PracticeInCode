import './App.css'
import {useDispatch,useSelector} from "react-redux"
import { decrement, decrementByAmount, increment, incrementByAmount, reset } from './App/Slices/CounterSlices';
import { useEffect } from 'react';
import ToDos from './components/ToDos';

function App() {
 let dispatch = useDispatch()
 let {count} = useSelector(state => state.counter)
 useEffect(()=>{
  localStorage.setItem("count",JSON.stringify(count))
 },[count])
  return (
    <>
    <button onClick={()=>dispatch(incrementByAmount(5))}>-5</button>
    <button onClick={()=>dispatch(increment())}>-</button>
    <span>{count}</span>
    <button onClick={()=>dispatch(decrement())}>+</button>
    <button onClick={()=>dispatch(decrementByAmount(5))}>+5</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>

    <ToDos/>
    </>
  )
}

export default App
