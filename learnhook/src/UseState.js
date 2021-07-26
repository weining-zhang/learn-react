import React, { useState } from 'react';

function useMyState() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');

  let handleOrangeClick = () => {
    setFruit('orange');
  }

  return (
    <div>
      <p>you clicked {count} times.</p>
      <button onClick={() => {setCount(count + 1)}}>
        Click me
      </button>

      <p>what fruit I choose is {fruit}.</p>
      <button onClick={() => {handleOrangeClick()}}>
        Change fruit
      </button>
    </div>
  )
}

export default useMyState;