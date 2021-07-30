import React, { Component } from 'react';

import ConsumerButton from './ConsumerContext';

/* 
  // const MyContext = React.createContext(defaultValue);
  // 订阅了 context 的那个组件会从组件树中离它最近的那个匹配的 Provider 中读取到当前的 context 值
  // 没有匹配到 Provider 时，默认值 defaultValue 才生效。注意: 将 undefined 传递给 Provider 的 value 时，Consumer 组件的 defaultValue 不会生效
*/
// 1、为当前的 theme 创建一个 context（“light”为默认值, 并不一定是被传递的值）
export const ThemeContext = React.createContext('light');
ThemeContext.displayName = 'MyDisplayName'; // 给 context 设置在 React DevTools 中显示的名字

const Toolbar = () => {
  return (
    // 3、中间的组件再也不必指明往下传递 theme 了
    <div>
      <ThemedButton/>
    </div>
  )
}

const Button = (props) => {
  return (
    <>
      <button>{props.theme}</button>
      <ConsumerButton/>
    </>
  )
}

class ThemedButton extends Component {
  // static contextType = ThemeContext; // 💡 使用 static 类属性初始化 contextType（public class fields 语法）

  render() { 
    // 5、React 会往上找到最近的 theme Provider，然后使用它的值
    return <Button theme={this.context} />;
  }
}

/* 
  // 挂载在 ThemedButton class 上的「contextType」属性会被重赋值为一个由 React.createContext() 创建的 Context 对象
  // 【只订阅单一 context 的情况】: contextType 属性能让你使用「this.context」来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中
  // 也可以使用实验性的 public class fields 语法用 static 属性初始化 contextType，如上 ⬆️
*/
// 4、指定「contextType」读取当前的 theme context
ThemedButton.contextType = ThemeContext;

const ThemeContextDemo = () => {
  return ( 
    /* 
      // 每个 Context 对象都会返回一个 Provider React 组件，它允许 Consumer 组件订阅 context 的变化
      // Provider 接收一个 value 属性，传递给 Consumer 组件。1.一个 Provider 可以和多个 Consumer 组件有对应关系 2.多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据
      // 当 Provider 的 value 值发生变化时，它内部的所有 Consumer 组件都会重新渲染。Provider 及其内部 consumer 组件都不受 shouldComponentUpdate 函数限制
    */
    // 2、使用一个 Context.Provider 来将当前的 theme 传递给以下的组件树
    <ThemeContext.Provider value="dark">
      <Toolbar/>
    </ThemeContext.Provider>
  );
}

export default ThemeContextDemo;