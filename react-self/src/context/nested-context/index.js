import React, { Component } from 'react';

import { NestedThemeContext } from './NestedThemeContext';
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
    this.state = {  }
  }
  render() { 
    return (
      // 整个 state 都被传递进 provider
      <NestedThemeContext.Provider>
        <Content />
      </NestedThemeContext.Provider>
    );
  }
}

export default NestedContextDemo;