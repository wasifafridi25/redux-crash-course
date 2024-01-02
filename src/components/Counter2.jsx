import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counterSlice'

export default function Counter2({}) {
  //get the state
  const count = useSelector(state => state.counter.count)
  //use the actions(functions) using useDispatch
  const dispatch = useDispatch()
  const amount = 20;

  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/*payload is the amount you are sending along with the action which is incrementByAmount */}
      {/* we are dispatching the incrementByAmount action and sending payload which is 20/amount */}
      <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by {amount}</button>
    </div>
  )
}
