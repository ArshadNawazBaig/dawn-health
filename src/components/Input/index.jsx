import React from 'react';
import { InputWrapper } from './styles';

const Input = (props) => {
  const { onChange, className, value, type, placeholder } = props;
  return (
    <InputWrapper
      onChange={onChange}
      className={className}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
