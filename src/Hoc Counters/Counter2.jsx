import React from 'react'
import Hoc from './Hoc'
function Counter2({Count,handleClick}) {
  return (
    <div>
        <h1>Counter 2</h1>
        <h1>{Count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Hoc(Counter2)