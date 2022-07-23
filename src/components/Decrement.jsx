import React from 'react'
import { Values } from '../StageManeger'

export default function Decrement() {
  const {decrementFunc}=Values()
  return (
    <div className='decrement' onClick={decrementFunc}>-</div>
  )
}
