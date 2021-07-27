import React from 'react';

export const ChildrenPropBorder = (props) => {
  // 有些组件无法提前知晓它们子组件的具体内容, 在 Sidebar（侧边栏）和 Dialog（对话框）等展现通用容器（box）的组件中特别容易遇到这种情况
  // 建议这些组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中
  // 这使得别的组件可以通过 JSX 嵌套, 将任意组件作为子组件传递给它们
  return (
    <div>
      {props.children}
    </div>
  )
};

const WelcomeDialog = () => {
  return ( 
    <ChildrenPropBorder>
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting props-children demo!
      </p>
    </ChildrenPropBorder>
  );
}

export default WelcomeDialog;