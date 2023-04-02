import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Error, InputWrapper } from '../Input/styles';
import { Col, Row } from 'react-bootstrap';
import { OptionWrapper, SelectWrapper } from '../Select/styles';
import Button from '../Button';

const options = [
  { value: 'IL', label: 'IL' },
  { value: 'MA', label: 'MA' },
  { value: 'MN', label: 'MN' },
  { value: 'TX', label: 'TX' },
  { value: 'VA', label: 'VA' },
];

const childrenOptions = [
  { value: '0', label: 'None' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];

function Form() {
  const [numChildren, setNumChildren] = useState([]);
  const handleNumChildrenChange = (event) => {
    const length = event.target.value;
    const arr = Array.from({ length }, (_, index) => index + 1);
    setNumChildren(arr);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={6} className="mb-4">
          <InputWrapper
            {...register('parentFirstName', { required: true })}
            placeholder="Parent's First Name"
          />
          {errors.parentFirstName && <Error>This field is required</Error>}
        </Col>
        <Col md={6} className="mb-4">
          <InputWrapper
            {...register('parentLastName', { required: true })}
            placeholder="Parent's Last Name"
          />
          {errors.parentLastName && <Error>This field is required</Error>}
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <InputWrapper
            {...register('phoneNumber', { required: true })}
            placeholder="Cell phone number"
          />
          {errors.phoneNumber && <Error>This field is required</Error>}
        </Col>
        <Col md={6} className="mb-4">
          {/* <InputWrapper
            {...register('state', { required: true })}
            placeholder="State"
          /> */}
          <SelectWrapper
            {...register('state', { required: true })}
            placeholder="State"
          >
            <OptionWrapper value="" disabled selected>
              State
            </OptionWrapper>
            {options.map((option) => (
              <OptionWrapper key={option.label} value={option.value}>
                {option.label}
              </OptionWrapper>
            ))}
          </SelectWrapper>
          {errors.state && <Error>This field is required</Error>}
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <InputWrapper
            {...register('email', { required: true })}
            placeholder="Email Address"
          />
          {errors.email && <Error>This field is required</Error>}
        </Col>
        <Col md={6} className="mb-4">
          <SelectWrapper
            {...register('numOfChildern', { required: true })}
            placeholder="numOfChildern"
            onChange={handleNumChildrenChange}
          >
            <OptionWrapper value="" disabled selected>
              Number of children
            </OptionWrapper>
            {childrenOptions.map((option) => (
              <OptionWrapper key={option.label} value={option.value}>
                {option.label}
              </OptionWrapper>
            ))}
          </SelectWrapper>
          {errors.numOfChildern && <Error>This field is required</Error>}
        </Col>
      </Row>
      <Row>
        {numChildren?.map((child) => (
          <Col md={6} className="mb-4" key={child}>
            <InputWrapper
              {...register(`child${child}Age`, { required: true })}
              placeholder={`Child ${child} Age`}
              type="number"
            />
            {errors[`child${child}Age`] && (
              <Error>This field is required</Error>
            )}
          </Col>
        ))}
      </Row>

      <label>Do you have insurance?</label>
      <div className="d-flex align-items-center">
        <label className="d-flex align-items-center me-4">
          <input
            className="me-2"
            type="radio"
            {...register('hasInsurance', { required: true })}
            value="yes"
            checked
          />
          Yes
        </label>
        <label className="d-flex align-items-center">
          <input
            className="me-2"
            type="radio"
            {...register('hasInsurance', { required: true })}
            value="no"
          />
          No
        </label>
      </div>
      {errors.hasInsurance && <span>This field is required</span>}

      <Button className="mt-4" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Form;
