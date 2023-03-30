import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Para from '../components/Para';
import Select from '../components/Select';
import SubHeading from '../components/SubHeading';
import ValueCard from '../components/ValuesCard';

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Heading main="Sign up">
            Become part of the Dawn Health population Health network
          </Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <Para>
            Take the first step towards mental health resilience for your
            children and our communities.
          </Para>
        </Col>
      </Row>
      <Row>
        <Col>
          <SubHeading>Our Wellness Programs</SubHeading>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <ValueCard title="Compassion" icon={1} className="mt-4 mb-2">
            Encouraging kindness and understanding towards those facing mental
            health challenges.
          </ValueCard>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Input className="my-3" placeholder="Parent’s First Name" />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Select className="my-2" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>Click</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
