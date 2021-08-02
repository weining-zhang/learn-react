import React from 'react';

import ThemeContextDemo from './ThemeContext';
import DynamicContextDemo from './dynamic-context';
import NestedContextDemo from './nested-context/index';

const ContextDemo = () => {
  return (
    <>
      <ThemeContextDemo/><br/>
      <DynamicContextDemo/><br/>
      <NestedContextDemo/>
    </>
  )
}

export default ContextDemo;