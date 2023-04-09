import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container >
         
            
            <Col lg="12" md="6" sm="12">
              <div className="about__image" >
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                ONN Bicycle rental service to book bicycle on rent in IIT(ism) premises. Bicycle rental is just one call away. Our mission is to make bicycle renting easy and hassle free for all students. All the Bicycles are vetted and verified by our dedicated team. We resolve the problem and bridge the gap between the renters and rentees, we are a system where students or even official body can rent out bicycles, and students can have access to them whenever needed, with immediate effect.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
