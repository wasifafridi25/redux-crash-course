import React, { useState } from 'react'
import Counter2 from './Counter2'

export default function Counter() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(prevValue => prevValue - 1)
    }
  return (
    <div>
      <h1>The count is: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Counter2 counter={counter} setCounter={setCounter}/>
    </div>
  )
}
