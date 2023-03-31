import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Para from '../Para';
import Logo from './../../assets/logo/dark-logo.png';
import { CopyRight, FooterWrapper, ReLink, Title, Text } from './styles';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <Row>
            <Col sm={6}>
              <ReLink to="/">
                <img src={Logo} alt="Footer logo" />
              </ReLink>
              <Para className="text-white intro">
                Nurturing mental health resilience in adolescents for a stronger
                future.
              </Para>
            </Col>
            <Col sm={2}>
              <Title>Company</Title>
              <ReLink to="/about">Partners</ReLink>
              <ReLink to="/career">Careers</ReLink>
              <ReLink to="/signup">Contact us</ReLink>
            </Col>
            <Col sm={2}>
              <Title>Resources</Title>
              <ReLink to="/">Services</ReLink>
              <ReLink to="/">Releases</ReLink>
            </Col>
            <Col sm={2}>
              <Title>Support</Title>
              <ReLink to="/faqs">FAQs</ReLink>
              <ReLink to="/">Terms & Conditions</ReLink>
              <ReLink to="/">Privacy Policy</ReLink>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
      <CopyRight>
        <Container>
          <Row>
            <Col>
              <Text>
                All Copyright © 2023 - Dawn Health . All Right Reversed{' '}
              </Text>
            </Col>
          </Row>
        </Container>
      </CopyRight>
    </>
  );
};

export default Footer;
