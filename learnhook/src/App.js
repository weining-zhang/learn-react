import React, { useState, useEffect, useContext } from 'react';
import useMyState from './UseState';

const MyUseState = useMyState;

const themes = {
  light: {
    foreground: "#fff222",
    background: "#f22f22"
  },
  dark: {
    foreground: "black",
    background: "#ff66ff"
  }
};

const ThemeContext = React.createContext(themes.light);

// function Toolbar(props) {
//   return (
//     <ThemedButton />
//   )
// }

// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{background: theme.background, color: theme.foreground}}>
//       I am styled by theme context!
//     </button>
//   )
// }

function App() {
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`
  // })

  return (
    <div>
      <MyUseState />
      <ThemeContext.Provider value={themes.dark}> {/* 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定 */}
        {/* <Toolbar /> */}
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
