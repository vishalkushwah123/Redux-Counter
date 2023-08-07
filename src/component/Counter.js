import React from 'react'
import '../App.css'
import {useSelector, useDispatch} from 'react-redux'
import {increament, decreament} from '../reducer/reducer'
function Counter() {
const count = useSelector((state)=> state.counter.count)
const dispatch = useDispatch()
    return (
        <div className="container">
        <div className='counter'>
            <button onClick={()=>dispatch(increament())}>+</button>
            <h5>{count}</h5>
            <button onClick={()=>dispatch(decreament())}>-</button>
        </div>
        </div>
    )
}

export default Counter
