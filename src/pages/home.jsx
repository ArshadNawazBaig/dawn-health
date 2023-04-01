import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../components/Button';
import GetStarted from '../components/GetStarted';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';
import ValueCard from '../components/ValuesCard';
import {
  Card,
  Hero,
  HomePageWrapper,
  InnerCard,
  SectionWrapper,
  WellnessInner,
  WellnessWrapper,
} from '../styles';
import Main from './../assets/home/1.png';
import Main2 from './../assets/home/2.png';
import Main3 from './../assets/home/3.png';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center h-100vh">
            <Col md={6}>
              <Heading main="Mental health">
                Nurturing Mental Health resilience
              </Heading>
              <Para>
                Dawn Health provides parents, guardians, and secondary education
                institutions with the tools to nurture mental health resilience,
                create stronger relationships with their children, help keep
                them engaged in school, and see them thrive.
              </Para>
              <Button className="mt-3">Explore More</Button>
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
            <Col md={12}>
              <SectionHeader
                className="pb-main"
                title="Experience our story in motion "
              >
                Families connect with us
              </SectionHeader>
              <iframe
                width="100%"
                height="603"
                src="https://www.youtube.com/embed/iilnY08udm0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={5}>
              <SectionHeader className="pb-main" title="Our Wellness Programs">
                Our care pathways focus on address symptoms at a pre-crisis
                level and build mental health resilience through therapy and
                metabolic health.
              </SectionHeader>
            </Col>
          </Row>
          {/* <Row>
            <Col md={12}>
              <WellnessWrapper>
                <WellnessInner className="d-flex justify-content-between">
                  <Card>1</Card>
                  <InnerCard className="d-flex justify-content-between">
                    <Card>2</Card>
                    <Card>3</Card>
                  </InnerCard>
                  <Card>4</Card>
                </WellnessInner>
              </WellnessWrapper>
            </Col>
          </Row> */}
          <Row>
            <Col md={12} className="wellness-wrapper">
              <Row className="wellness-inner">
                <Col md={3}>1</Col>
                <Col md={6}>
                  <Row className="inner-card">
                    <Col>2</Col>
                    <Col>3</Col>
                  </Row>
                </Col>
                <Col md={3}>4</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={6}></Col>
            <Col md={6} className="">
              <SectionHeader className="" title="Our Values to Help you">
                We always want to provide the best value for you and your
                health. Join us to maximize the benefits
              </SectionHeader>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={Main2} className="img-fluid mb-5" alt="main image" />
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <ValueCard className="mb-5" title="Compassion" icon={1}>
                    Encouraging kindness and understanding towards those facing
                    mental health challenges.
                  </ValueCard>
                </Col>
                <Col md={6}>
                  <ValueCard className="mb-5" title="Quality" icon={2}>
                    Providing the best possible care with the highest standards.
                  </ValueCard>
                </Col>
                <Col md={6}>
                  <ValueCard className="mb-5" title="Integrity" icon={3}>
                    Conducting oneself with honesty and responsibility.
                  </ValueCard>
                </Col>
                <Col md={6}>
                  <ValueCard className="mb-5" title="Innovation" icon={4}>
                    Utilizing new approaches and technologies to improve care.
                  </ValueCard>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <Row>
            <Col>
              <GetStarted />
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={6}>
              <img src={Main3} className="img-fluid mb-5" alt="main image" />
            </Col>
            <Col md={1}></Col>
            <Col md={5}>
              <Row className="pb-main">
                <Col>
                  <SectionHeader className="pb-main" title="Why Dawn Health?">
                    Our care delivery approach eliminates the barriers of time,
                    distance, and stigma that prevent many people from seeking
                    the help they need. By prioritizing virtual mental health
                    care, our company is committed to promoting mental wellness
                    and improving the overall health and engagement of our
                    members.
                  </SectionHeader>
                </Col>
              </Row>
              <Row>
                <Col>
                  <TestimonialCard title="National Council for Mental Wellbeing">
                    “47% Of School Board Members Say Students’ Mental Health Is
                    One Of Their Top 3 Issues”
                  </TestimonialCard>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
