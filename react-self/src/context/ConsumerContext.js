import React from 'react';

import { ThemeContext } from './ThemeContext';

const ConsumerButton = () => {
  return (
    /* 
      // 在函数式组件中订阅 context
      // 这种方法需要一个函数作为子元素。这个函数接收当前的 context 值，并返回一个 React 节点。
      // 传递给函数的 value 值等价于组件树上方离这个 context 最近的 Provider 提供的 value 值。如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue
    */
    <ThemeContext.Consumer>
      {value => <button>{value}</button>}
    </ThemeContext.Consumer>
  )
}

export default ConsumerButton;