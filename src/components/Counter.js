import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/counterSlice'
import { decrement } from '../redux/counterSlice'
import { useGetAllPostsQuery, useGetPostsByIdQuery } from '../redux/postsSlice'

export default function Counter() {
  // const count = useSelector(state => {
  //   console.log(state)
  //   return state.counter.count

  // })

  // one liner
  const count = useSelector(state => state.counter.count) // useSelector to use the state
  
  //To use the actions, those functions(incremenet, decrement, etc) we use the useDispatch function
  
  const dispatch = useDispatch();

  console.log(useGetAllPostsQuery)
  // const { data, isLoading, isError } = useGetAllPostsQuery()
  const { data, isLoading, isError } = useGetPostsByIdQuery(5)

  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {JSON.stringify(data)}
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}


    // const [count, setCount] = useState(0)

    // const increment = () => {
    //     setCount(count + 1)
    // }
    // const decrement = () => {
    //     setCount(prevValue => prevValue - 1)
    // }