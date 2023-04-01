import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import { Hero, SectionWrapper, SignupPageWrapper } from '../styles';
import Main from './../assets/signup/1.png';
import Main2 from './../assets/signup/2.png';

const SignupPage = () => {
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
          <Row>
            <Col md={5} className="text-end">
              <img src={Main2} className="img-fluid" alt="main image" />
            </Col>
            <Col md={1}></Col>
            <Col md={6}>
              <SectionHeader className="pb-main" title="Sign Up">
                Don't let your children and family suffer in silence - reach out
                to us for understanding, empowerment, and nurtured resilience.
              </SectionHeader>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </SignupPageWrapper>
  );
};

export default SignupPage;
