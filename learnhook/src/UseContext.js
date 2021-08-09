import React, { useContext } from 'react';

export const themes = {
  light: {
    foreground: "#fff222",
    background: "#f22f22"
  },
  dark: {
    foreground: "#ffffff",
    background: "#ff66ff"
  }
};

const ThemeContext = React.createContext(themes.light);

// 中间组件
function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

function ThemeButton() {
  // 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值
  // 当前的 context 值由上层组件中距离当前组件最近的 <ThemeContext.Provider> 的 value prop 决定。

  // useContext(ThemeContext) 相当于 class 组件中的 static contextType = ThemeContext 
  // 或者 <ThemeContext.Consumer>

  // useContext(ThemeContext) 只是让你能够读取 context 的值以及订阅 context 的变化
  // 你仍然需要在上层组件树中使用 <ThemeContext.Provider> 来为下层组件提供 context。
  const theme = useContext(ThemeContext); // useContext 的参数必须是 context 对象本身
  
  return (
    <button style={{background: theme.background, color: theme.foreground}}>
      I am styled by theme context!
    </button>
  )
}

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

export default App;