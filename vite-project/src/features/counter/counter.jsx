import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Увеличение
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Уменьшение
        </button>
        <hr />

        <button
          aria-label="add some value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Увеличение на 10
        </button>
      </div>
    </div>
  )
}