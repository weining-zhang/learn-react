import React from 'react';

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
    </ChildrenPropBorder>
  )
};

// 有时候会把一些组件看作是其他组件的特殊实例，比如 SpecificDialog 可以说是 Dialog 的特殊实例
const SpecificDialog = () => {
  return ( 
    <Dialog
      title="welcome"
      message="thank you for visiting special-children-prop demo"
    />
  );
}

export default SpecificDialog;