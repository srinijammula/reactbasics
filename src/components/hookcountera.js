import React,{useState} from 'react'

function Hookcountera() {
    const initialCount=0
    const[count,setCount]=useState(initialCount)
    return (
        <div>
            <h3>Count {count}</h3>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default Hookcountera
