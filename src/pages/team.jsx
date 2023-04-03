import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/team';
import { Hero, SectionWrapper, TeamPageWrapper } from '../styles';
import Main from './../assets/home/1.png';

const TeamPage = () => {
  return (
    <TeamPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center reverse">
            <Col md={6} className="wow animate__animated animate__fadeInLeft">
              <Heading main="dedicated Team">
                Empowering Mental Wellness for all Children
              </Heading>
              <Para>
                Breaking access to care barriers and fostering mental health
                resilience: Together, we're supporting mental health for all
                children.
              </Para>
            </Col>
            <Col
              md={6}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <img
                src={Main}
                className="img-fluid main-image"
                alt="main image"
              />
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={5} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader className="pb-main" title="Our Leadership Team">
                Let us guide you towards healing and resilience, one step at a
                time. With our team, you are never alone on your journey.
              </SectionHeader>
            </Col>
          </Row>
          <Row className="pb-main">
            {teamMembers.map((member) => (
              <Col sm={6} md={4} lg={3} className="mb-4" key={member.id}>
                <TeamCard
                  className="wow animate__animated animate__zoomIn"
                  name={member.name}
                  status={member.status}
                  alt={member.alt}
                  src={member.src}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </SectionWrapper>
    </TeamPageWrapper>
  );
};

export default TeamPage;
