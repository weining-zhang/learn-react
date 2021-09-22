import React from 'react';

import UseMyStateDemo from './UseState';
import UseReducerDemo from './UseReducer';
import UseContextDemo from './UseContext';
import UseCallbackDemo from './UseCallback/index';

import s from './App.module.css';

const UseStateDemo = UseMyStateDemo;

function App() {
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`
  // })

  return (
    <div>
      <h1 className={s.title}>UseStateDemo:</h1>
      <UseStateDemo />

      <h1 className={s.title}>UseReducerDemo:</h1>
      <UseReducerDemo />

      <h1 className={s.title}>UseContextDemo:</h1>
      <UseContextDemo />

      <h1 className={s.title}>UseCallbackDemo:</h1>
      <UseCallbackDemo />
    </div>
  )
}

export default App;
