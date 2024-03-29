import React, { useState, useCallback } from 'react';
import Button from './Button';

/**
 * 链接：
 * https://juejin.cn/post/6844904101445124110#heading-0
 */
const UseCallback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleClickBtn1 = () => {
    setCount1(count1 + 1);
  };

  const handleClickBtn2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <div>
        <Button onClickBtn={handleClickBtn1}>Button1</Button>
      </div>

      <div>
        <Button onClickBtn={handleClickBtn2}>Button2</Button>
      </div>

      <div>
        <Button
          onClickBtn={() => {
            setCount3(count3 + 1);
          }}
        >
          Button3
        </Button>
      </div>
    </div>
  )
};

export default UseCallback;
