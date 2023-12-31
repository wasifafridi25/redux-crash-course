import React from 'react'

export default function Counter2({counter}) {
  return (
    <div>
      <h1>The count is: {counter}</h1>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  )
}
