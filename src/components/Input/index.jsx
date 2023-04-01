import React from 'react';
import { Error, InputWrapper } from './styles';

const Input = (props) => {
  const {
    onChange,
    className,
    value,
    errors,
    type,
    placeholder,
    title,
    ...rest
  } = props;
  return (
    <>
      <InputWrapper
        onChange={onChange}
        className={className}
        value={value}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {errors.firstName?.type === 'required' && (
        <Error role="alert" className="mb-0">
          {title} is required
        </Error>
      )}
    </>
  );
};

export default Input;
