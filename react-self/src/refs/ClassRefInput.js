import React, { Component } from 'react';
import DomRefInput from './DomRefInput';

/* 
  为 class 组件添加ref
*/
class ClassRefInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput()
  }

  render() { 
    return ( 
      <DomRefInput ref={this.textInput} />
    );
  }
}

export default ClassRefInput;