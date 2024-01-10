// CounterComponent.js

import React, { useState } from 'react';

const CounterComponent = () => {
  // Define a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count by 1 (not going below 0)
  const increment = () => {
    setCount((prevCount) => Math.max(prevCount + 1, 0));
  };

  // Function to decrement the count by 1 (not going below 0)
  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  return ( 
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
