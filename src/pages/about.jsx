import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import SubHeading from '../components/SubHeading';
import { Hero, SectionWrapper, AboutPageWrapper } from '../styles';
import Main from './../assets/about/1.png';
import Main2 from './../assets/about/2.png';
import Partner1 from './../assets/about/s1.png';
import Partner2 from './../assets/about/s2.png';
import Partner3 from './../assets/about/s3.png';
import Partner4 from './../assets/about/s4.png';
import Partner5 from './../assets/about/s5.png';
import Partner6 from './../assets/about/s6.png';

const AboutPage = () => {
  return (
    <AboutPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center reverse h-100vh">
            <Col md={5} className="wow animate__animated animate__fadeInLeft">
              <Heading main="About Us">
                Our Families are Behind Our Brand
              </Heading>
              <Para>
                Family comes first for all of us. Our team comprises of
                passionate, highly diverse, educated, and experienced
                professionals who are committed to creating a better tomorrow
                for our children by nurturing their mental health resilience
                today.
              </Para>
            </Col>
            <Col md={1}></Col>
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
          <Row className="align-items-center pb-main">
            <Col
              md={6}
              className="text-start wow animate__animated animate__fadeInLeft"
            >
              <img src={Main2} className="img-fluid" alt="main image" />
            </Col>
            <Col md={6} className="wow animate__animated animate__fadeInRight">
              <SubHeading>Our Story</SubHeading>
              <Para>
                Founded in 2023 by classmates at Harvard Medical School, Dawn
                Health is a mental health care venture with a mission to empower
                adolescents in taking charge of their mental health and help
                parents/guardians build better relationships with their
                children.
              </Para>
              <Para>
                Our use-friendly digital wellness solution offers effective
                screening, monitoring, and care management systems to
                proactively prevent mental health crises, reduce care costs, and
                eliminate barriers to access care.
              </Para>
            </Col>
          </Row>
          <Row>
            <Col md={5} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader className="pb-main" title="Our Proud Partners">
                Collaborating to build a better future, our partners are the
                cornerstone of our success. Together, we strive for excellence.
              </SectionHeader>
            </Col>
          </Row>
          <Row className="pb-main">
            <Col
              sm={6}
              md={4}
              className="mb-4 wow animate__animated animate__zoomIn"
            >
              <img src={Partner1} className="img-fluid" alt="main image" />
            </Col>
            <Col
              sm={6}
              md={4}
              className="mb-4 wow animate__animated animate__zoomIn"
            >
              <img src={Partner2} className="img-fluid" alt="main image" />
            </Col>
            <Col
              sm={6}
              md={4}
              className="mb-4 wow animate__animated animate__zoomIn"
            >
              <img src={Partner3} className="img-fluid" alt="main image" />
            </Col>
            <Col
              sm={6}
              md={4}
              className="mb-4 wow animate__animated animate__zoomIn"
            >
              <img src={Partner4} className="img-fluid" alt="main image" />
            </Col>
            <Col
              sm={6}
              md={4}
              className="mb-4 wow animate__animated animate__zoomIn"
            >
              <img src={Partner5} className="img-fluid" alt="main image" />
            </Col>
            <Col
              sm={6}
              md={4}
              className="mb-4 wow animate__animated animate__zoomIn"
            >
              <img src={Partner6} className="img-fluid" alt="main image" />
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </AboutPageWrapper>
  );
};

export default AboutPage;
