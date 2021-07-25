import React, { useRef } from 'react';

/* 
  函数内部使用 ref 属性
*/
const FunctionRefInput = (props) => {
  // const refContainer = useRef(initialValue);
  // useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数「initialValue」
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return ( 
    <div>
      <input
        type={Text}
        ref={textInput}
      />
      <input
        type="button"
        value="函数内部使用ref"
        onClick={handleClick}
      />
    </div>
  );
}

export default FunctionRefInput;