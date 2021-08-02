import React, { Component } from 'react';

import { DynamicThemeContext } from "./DynamicThemeContext";

class DynamicThemedButton extends Component {
  render() { 
    let props = this.props;
    let theme = this.context;
    
    return (  
      <button
        {...props}
        style={{color: 'green', backgroundColor: theme.background}}
      />
    );
  }
}
DynamicThemedButton.contextType = DynamicThemeContext;

export default DynamicThemedButton;