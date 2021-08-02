import React from 'react';

import { NestedThemeContext } from './NestedThemeContext';

function NestedThemeToggleButton() {
  // Theme Toggler 按钮不仅仅只获取 theme 值，
  // 它也从 context 中获取到一个 toggleTheme 函数
  return (
    <NestedThemeContext.Consumer>
      {({theme, toggleTheme}) => {
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}
        >
          Nested Toggle Theme
        </button>
      }}
    </NestedThemeContext.Consumer>
  );
}

export default NestedThemeToggleButton;