import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

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

export default App;
