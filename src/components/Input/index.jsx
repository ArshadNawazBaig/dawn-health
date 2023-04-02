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
    name,
    ...rest
  } = props;
  return (
    <>
      <InputWrapper onChange={onChange} placeholder={placeholder} {...rest} />
      {/* {errors[name]?.type === 'required' && (
        <Error role="alert" className="mb-0">
          {errors[name] && <span>This field is required</span>}
        </Error>
      )} */}
    </>
  );
};

export default Input;
