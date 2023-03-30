import React from 'react';
import { ParaWrapper } from './styles';

const Para = (props) => {
  const { className, children } = props;
  return <ParaWrapper className={className}>{children}</ParaWrapper>;
};

export default Para;
