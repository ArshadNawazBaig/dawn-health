import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Para from '../components/Para';
import Button from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { Hero, SectionWrapper, SignupPageWrapper } from '../styles';
import Main from './../assets/signup/1.png';
import Main2 from './../assets/signup/2.png';
import { useForm } from 'react-hook-form';
import Select from '../components/Select';

const SignupPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <SignupPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center h-100vh">
            <Col md={6}>
              <Heading main="Sign up here to">
                Become part of the Dawn Health population Health network
              </Heading>
              <Para>
                Take the first step towards mental health resilience for your
                children and our communities.
              </Para>
            </Col>
            <Col md={6} className="text-end">
              <img src={Main} className="img-fluid" alt="main image" />
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row className="pb-main">
            <Col md={5} className="text-end">
              <img src={Main2} className="img-fluid" alt="main image" />
            </Col>
            <Col md={1}></Col>
            <Col md={6}>
              <SectionHeader className="pb-main" title="Sign Up">
                Don't let your children and family suffer in silence - reach out
                to us for understanding, empowerment, and nurtured resilience.
              </SectionHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6}>
                    <Input
                      title="Parent's First Name"
                      {...register('firstName', { required: true })}
                      errors={errors}
                      aria-invalid={errors.firstName ? 'true' : 'false'}
                      placeholder="Parent’s First Name"
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      title="Parent's Last Name"
                      {...register('lastname', { required: true })}
                      errors={errors}
                      aria-invalid={errors.lastname ? 'true' : 'false'}
                      placeholder="Parent’s Last Name"
                    />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md={6}>
                    <Input
                      title="Cell phone number"
                      {...register('cell', { required: true })}
                      errors={errors}
                      aria-invalid={errors.cell ? 'true' : 'false'}
                      placeholder="Phone Number"
                    />
                  </Col>
                  <Col md={6}>
                    <Select
                      {...register('state', { required: true })}
                      errors={errors}
                      aria-invalid={errors.cell ? 'true' : 'false'}
                      placeholder="State"
                      name="State"
                    />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md={6}>
                    <Input
                      title="Email Address"
                      {...register('email', { required: true })}
                      errors={errors}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      title="Number of children"
                      {...register('children', { required: true })}
                      errors={errors}
                      aria-invalid={errors.children ? 'true' : 'false'}
                      placeholder="Number of children"
                    />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md={12}>
                    <Input
                      title="Ages of children"
                      {...register('ages', { required: true })}
                      errors={errors}
                      aria-invalid={errors.ages ? 'true' : 'false'}
                      placeholder="Ages of children"
                    />
                    <Button type="submit" className="mt-4">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </SignupPageWrapper>
  );
};

export default SignupPage;
