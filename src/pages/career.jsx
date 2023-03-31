import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import {
  Hero,
  SectionWrapper,
  CareerPageWrapper,
  List,
  ListItem,
} from '../styles';
import Main from './../assets/career/1.png';
import Main2 from './../assets/career/2.png';

const CareerPage = () => {
  return (
    <CareerPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center h-100vh">
            <Col md={5}>
              <Heading main="Unlock Your Potential ">
                Join Our Team and Make your mark!
              </Heading>
              <Para>
                Dawn Health is on a mission to nurture mental health resilience
                for every child and their families. When you join Dawn Health,
                you’re joining a team that has an unstoppable drive and passion
                to bring mental health wellness into every household. We only
                hire team members that share the same vision with us.
              </Para>
            </Col>
            <Col md={1}></Col>
            <Col md={6} className="text-end">
              <img src={Main} className="img-fluid" alt="main image" />
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <SectionHeader
                className="pb-main"
                title="Child & Adolescent Behavioral Therapist"
              >
                Licensed in any of the following states: TX, IL, VA, or MA
              </SectionHeader>
            </Col>
          </Row>
          <Row className="pb-main">
            <Col md={6}>
              <SectionHeader className="" title="About The Role">
                Our clinical team members collaborate with other phenomenal
                behavioral health therapists and coaches, as well as our Chief
                Care and Chief Clinical Excellence Officers, to support our
                members through our services. Our Behavioral Therapists:
              </SectionHeader>
              <List className="pe-5">
                <ListItem className="pb-3">
                  Provide exceptional care: support children and teens ages 9 to
                  17 years and their caregivers, using evidence-based approaches
                  such as CBT and parent-management training.
                </ListItem>
                <ListItem className="pb-3">
                  Meet with children, teens, and parents to address behavioral
                  health concerns, such as anxiety and depression.
                </ListItem>
                <ListItem className="pb-3">
                  upport all aspects of each child or teen's treatment by
                  collaborating with other care team members at Dawn Health,
                  their school, household, and in the community. Document your
                  work, including session notes, care plans, and ongoing
                  progress, with high levels of accuracy and timeliness in our
                  electronic health record.
                </ListItem>
                <ListItem className="pb-3">
                  Acquire new state licenses (with support!) to support families
                  in multiple states as we grow nationwide.
                </ListItem>
                <ListItem className="pb-3">
                  Support other Brightline teams as needed, including with
                  recruitment or content development
                </ListItem>
                <ListItem className="pb-3">
                  Engage in opportunities to further your knowledge of CBT and
                  expertise in utilizing CBT with children, teens, and parents
                  facing a variety of behavioral health challenges.
                </ListItem>
                <ListItem className="pb-3">
                  Participate in individual and group consultation meetings.
                </ListItem>
                <ListItem className="pb-3">
                  Provide support for peer behavioral health clinicians as
                  needed.
                </ListItem>
                <ListItem className="pb-3">
                  Participate in training on CBT or other professional
                  development topics.
                </ListItem>
              </List>
            </Col>
            <Col md={6} className="text-end">
              <img src={Main2} className="img-fluid" alt="main image" />
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </CareerPageWrapper>
  );
};

export default CareerPage;
