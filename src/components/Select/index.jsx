import React from 'react';
import { OptionWrapper, SelectWrapper } from './styles';

const Select = (props) => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const { value, className, onChange } = props;
  return (
    <SelectWrapper value={value} onChange={onChange} className={className}>
      {options.map((option) => (
        <OptionWrapper key={option.value} value={option.value}>
          {option.label}
        </OptionWrapper>
      ))}
    </SelectWrapper>
  );
};

export default Select;
