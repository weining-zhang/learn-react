import React from 'react';

import { ThemeContext } from './ThemeContext';

const ConsumerButton = () => {
  return (
    // 这种方法需要一个函数作为子元素（function as a child）。这个函数接收当前的 context 值，并返回一个 React 节点
    <ThemeContext.Consumer>
      {value => <button>{value}</button>}
    </ThemeContext.Consumer>
  )
}

export default ConsumerButton;