import React, { Component } from 'react';

import { ChildrenPropBorder } from './ChildrenProp';

const Dialog = (props) => {
  return (
    <ChildrenPropBorder>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </ChildrenPropBorder>
  )
}

// 在 class 组件中使用组合
class ClassChildrenProp extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { 
      login: 'user'
    };
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleClick() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render() { 
    return ( 
      <Dialog
        title="welcome"
        message="welcome to ClassChildrenProp"
      >
        <input
          placeholder="please input your name"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>
          点我登录
        </button>
      </Dialog>
    );
  }
}

export default ClassChildrenProp;