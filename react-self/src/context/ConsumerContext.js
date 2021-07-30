import React from 'react';

import { ThemeContext } from './ThemeContext';

const ConsumerButton = () => {
  return (
    <ThemeContext.Consumer>
      {value => <button>{value}</button>}
    </ThemeContext.Consumer>
  )
}

export default ConsumerButton;