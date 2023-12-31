import React, { useState } from 'react'

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
    </div>
  )
}
