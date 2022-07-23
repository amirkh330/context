import React from 'react'
import { Values } from '../StageManeger'

export default function Increment() {
  const {incrementFunc}=Values()

  return (
    <div className='increment' onClick={incrementFunc}>+</div>
  )
}
