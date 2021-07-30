import React from 'react';

// 少数情况下，可能需要在一个组件中预留出几个“洞”
const SplitPane = (props) => {
  return (
    <div className="splitpane">
      <div className="splitpane-left">
        {/* 这种情况下，我们可以不使用 props.children，而是自行约定：将所需内容传入 props，并使用相应的 prop */}
        {/* 分别传入 props.left 和 props.right */}
        {props.left}
      </div>
      <div className="splitpane-right">
        {props.right}
      </div>
    </div>
  );
};

const LeftChild = () => {
  return (
    <div>i'm left</div>
  )
}

const RightChild = () => {
  return (
    <div>i'm right</div>
  )
}

const HoleChildrenProp = () => {
  return ( 
    <SplitPane
      left={<LeftChild/>}
      right={<RightChild/>}
    />
  );
}

export default HoleChildrenProp;