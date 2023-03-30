import React from 'react';
import { HeadingWrapper, InnerMainHeading } from './styles';

const Heading = (props) => {
  const { main, className, children } = props;
  return (
    <HeadingWrapper className={className}>
      <InnerMainHeading>{main}</InnerMainHeading>
      {children}
    </HeadingWrapper>
  );
};

export default Heading;
