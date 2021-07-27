import React from 'react';

import ChildrenProp from './ChildrenProp';
import HoleChildrenProp from './HoleChildrenProp';
import SpecificDialog from './SpecialChildrenProp';
import ClassChildrenProp from './ClassChildrenProp';

const Containment = () => {
  return (
    <>
      <ChildrenProp/>
      <HoleChildrenProp/>
      <SpecificDialog/>
      <ClassChildrenProp/>
    </>
  );
}

export default Containment;