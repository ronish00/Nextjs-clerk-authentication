"use client"

import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(prev => prev + 1)}>Clicked {count} times</button>
  )
}

export default Counter
