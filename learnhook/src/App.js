import React from 'react';

import UseMyStateDemo from './UseState';
import UseReducerDemo from './UseReducer';
import UseContextDemo from './UseContext';

const UseStateDemo = UseMyStateDemo;

function App() {
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`
  // })

  return (
    <div>
      <UseStateDemo /><br/><br/>
      <UseReducerDemo /><br/><br/>
      <UseContextDemo /><br/><br/>
    </div>
  )
}

export default App;
