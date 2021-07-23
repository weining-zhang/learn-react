import React, { useRef } from 'react';

/* 
  函数内部使用 ref 属性
*/
const FunctionRefInput = (props) => {
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