import React, { useState } from 'react'
import Button from './Button';

import "./Counter.css"

const Counter = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className='Counter-container'>
      <h2>Counter: {counter}</h2>
      <Button onClick={() => setCounter(counter + 1)} text="+1" />
      <Button onClick={() => setCounter(counter - 1)} text="-1" />
    </div>
  )
}

export default Counter