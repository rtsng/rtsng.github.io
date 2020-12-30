import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

var me = require('./placeholder.png')
var myres = require('./Ryan Tsang - Resume 2020.pdf')
const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              {/* <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
                
              </div> */}
              <img src= {me} className = "me"/>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "Welcome to my website! I'm an aspiring software developper who is interested in machine learning, robotics, and quantum computing. I've been coding for a few years now and i have experience with java, python, html, css and js."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "When im not coding, I enjoy running, cooking, playing music, and modern tetris."}
                </p>
                {/* <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p> */}
                <div className="textright">
                  {resume && (
                    <span className="d-flex mt-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href={myres}
                      >
                        Resume 
                      </a>
                    </span>                  
                  )}
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};

export default About;
