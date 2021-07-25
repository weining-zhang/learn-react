import React, { Component } from 'react';

/* 
  为 DOM 元素添加ref
*/
class DomRefInput extends Component {
  constructor(props) {
    super(props);

    // 创建 ref
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 通过 current 属性访问 ref
    this.textInput.current.focus()
  }

  render() {
    return (
      <div>
        <input
          type={Text}
          ref={this.textInput}
        />
        <input
          type="button"
          value="DOM元素添加ref"
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}

export default DomRefInput;