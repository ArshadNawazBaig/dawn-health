import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FaqList from '../components/FAQ';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/team';
import { Hero, SectionWrapper, FaqPageWrapper } from '../styles';
import Main from './../assets/faq/1.png';

const FaqPage = () => {
  return (
    <FaqPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center h-100vh">
            <Col md={6}>
              <Heading main="FAQ’s">about Our Wellness System</Heading>
              <Para>
                Answers to common questions about our approach to wellness and
                costs associated with it
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
            <Col md={5}>
              <SectionHeader className="pb-main" title="FAQ’s">
                Expertly Crafted Answers to Your Mental Wellness Related
                Questions
              </SectionHeader>
            </Col>
          </Row>
          <Row className="pb-main">
            <Col>
              <FaqList className="mb-3" />
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </FaqPageWrapper>
  );
};

export default FaqPage;
