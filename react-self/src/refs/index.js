import React from 'react';

import ClassRefInput from './ClassRefInput';
import DomRefInput from './DomRefInput';
import ForwardRefButton from './ForwardRefButton';
import FunctionRefInput from './FunctionRefInput';

const RefsDemo = () => {
  return (
    <>
      <DomRefInput/>
      <ClassRefInput/>
      <FunctionRefInput/>
      <ForwardRefButton/>
    </>
  )
}

export default RefsDemo;