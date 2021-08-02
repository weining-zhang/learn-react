import React, { Component } from 'react';

import { NestedThemeContext } from './NestedThemeContext';
import { themes } from '../dynamic-context/DynamicThemeContext';
import NestedThemeToggleButton from './NestedThemeButton';

function Content() {
  return (
    <div>
      <NestedThemeToggleButton />
    </div>
  )
}

class NestedContextDemo extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState({
        theme: 
          this.state.theme === themes.light
            ? themes.dark
            : themes.light,
      })
    };

    // State 也包含了更新函数，因此它会被传递进 context provider
    this.state = {  
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  render() { 
    return (
      // 整个 state 都被传递进 provider 
      <NestedThemeContext.Provider value={this.state}>
        <Content />
      </NestedThemeContext.Provider>
    );
  }
}

export default NestedContextDemo;