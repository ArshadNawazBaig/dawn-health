import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Button>Click</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
