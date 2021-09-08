import React, { memo } from 'react';

const Button = ({onClickBtn, children}) => {
  return (
    <>
      <button onClick={onClickBtn}>{children}</button>&nbsp;&nbsp;&nbsp;
      <span>{Math.random()}</span>
    </>
  )
};

/**
 * 为什么使用了 React.memo 之后，Button1 和 Button3 每次渲染还是会更新？
 * https://juejin.cn/post/6844904101445124110#heading-3
 */
export default memo(Button);