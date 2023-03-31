import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Para from '../components/Para';
import Logo from './../assets/logo/dark-logo.png';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col sm={6}>
            <div>
              <img src={Logo} alt="Footer logo" />
            </div>
            <Para>
              Nurturing mental health resilience in adolescents for a stronger
              future.
            </Para>
          </Col>
          <Col sm={2}>
            <Title>Company</Title>
            <ReLink>Partners</ReLink>
            <ReLink>Careers</ReLink>
            <ReLink>Contact us</ReLink>
          </Col>
          <Col sm={2}>
            <Title>Resources</Title>
            <ReLink>Services</ReLink>
            <ReLink>Releases</ReLink>
          </Col>
          <Col sm={2}>
            <Title>Support</Title>
            <ReLink>FAQs</ReLink>
            <ReLink>Terms & Conditions</ReLink>
            <ReLink>Privacy Policy</ReLink>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
