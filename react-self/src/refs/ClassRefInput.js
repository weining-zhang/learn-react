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
    // 当 ref 属性用于自定义 class 组件时，ref 对象接收「组件的挂载实例」作为其 current 属性
    this.textInput.current.focusTextInput();
  }

  render() { 
    return <DomRefInput ref={this.textInput} />;
  }
}

export default ClassRefInput;