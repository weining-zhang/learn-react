import React, { Component } from 'react';

import { DynamicThemeContext, themes } from './DynamicThemeContext';

import DynamicThemeButton from './DynamicThemeButton';

//  一个使用 ThemedButton 的中间组件
function Toolbar(props) {
  return (
    <DynamicThemeButton onClick={props.changeTheme}>
      Dynamic Change Theme
    </DynamicThemeButton>
  );
}

// 动态使用 context 传递 theme
class DynamicContextDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState({
        theme:
          this.state.theme === themes.dark
            ? themes.light
            : themes.dark
      });
    }
  }
  render() {
    return (
      <>
        <DynamicThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </DynamicThemeContext.Provider>
      </>
    );
  }
}

export default DynamicContextDemo;