import React from 'react';

/* 
  使用 React.forwardRef 来获取传递给它的 ref
*/
const ForwardRefButton = (props) => {
  // 1、我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量。
  const ref = React.createRef();

  // 3、React 传递 ref 给 forwardRef 内函数 (props, ref) => ...，作为其第二个参数。
  const FancyButton = React.forwardRef((props, ref) => (
    // 4、我们向下转发该 ref 参数到 <button ref={ref}>，将其指定为 JSX 属性。
    <button ref={ref}>
      {props.children}
    </button>
  ))

  return ( 
    // 2、我们通过指定 ref 为 JSX 属性，将其向下传递给 <FancyButton ref={ref}>。
    <FancyButton ref={ref}>Click me!</FancyButton>
  );

  // 5、当 ref 挂载完成，ref.current 将指向 <button> DOM 节点。
}

export default ForwardRefButton;