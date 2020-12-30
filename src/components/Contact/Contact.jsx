import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { Row, Col } from 'react-bootstrap';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="What else?" />
          <Fade bottom duration={1000} delay={800} distance="30px">
            <div className="contact-wrapper">
              <p className="contact-wrapper__text">
                {cta || 'Want to know more about me?'}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                // href={email ? `mailto:${email}` : 'ryan.j.tsang@gmail.com'}
                href={"mailto:" + "ryan.j.tsang@gmail.com"}
              >
                {btn || "email"}
              </a>
            </div>
          </Fade>
          <Fade bottom duration={1000} delay={1200} distance="30px">
            <div className="contact-wrapper">
              <p className="contact-wrapper__text">
                {cta || 'Want to know more about my hobbies?'}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                // href={email ? `mailto:${email}` : 'ryan.j.tsang@gmail.com'}
                href="./404"
              >
                {btn || "other websites!"}
              </a>
            </div>
          </Fade>
      </Container>
    </section>
  );
};

export default Contact;
