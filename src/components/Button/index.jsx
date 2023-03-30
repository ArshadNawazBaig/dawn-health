import React from 'react';
import { ButtonWrapper } from './styles';

const Button = (props) => {
  const { onClick, className, children } = props;
  return (
    <ButtonWrapper onClick={onClick} className={className}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
