import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

var img1 = require('./project.jpg')
var img2 = require('./earthsense.png') 
var micro = require('./microcontroller2.jpg')
var heat = require('./heatmap2.jpg')
var rev = require('./reviews2.png')
const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <Row>
                  <Col>
                    <div className="projtitle">
                      Sociiz
                    </div>
                    
                    <p>
                      Sociiz is a user based web application which displays the density of people at a given
                      location at any given time. Its purpose is to help facilitate social distancing
                      during a pandemic. 

                      Users can plot new points of interest on the map, and each location has their own descriptions, 
                      as well as a variety of other information like operating ours and number of people present. 
                      
                    </p>
                    <img src= {rev} className = "rev"/>
                  </Col>
                  <Col md = "auto"><div className="border"></div></Col>
                  <Col>
                    <div className="projtitle">
                      Earth Sense
                    </div>
                    <p>
                      Earthsense is a web application made in cobmbination with a microcontroller that collects data 
                      on pollution in a given area in real time. This data is then displayed on the website and updated 
                      in real time
                    </p>
                    <p>
                      The website combines this data with a google maps api to show a heatmap of pollution levels in an area. 
                      As well as a pathfinding algorithm which avoids pollution to varying degrees. If pollution levels reach a certain
                      amount, sms notifications are sent to users.
                    </p>
                    <img src= {micro} className = "micro"/>
                    <img src= {heat} className = "heat"/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="gap10"></div>
                    <div className="smallbutt">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || 'https://github.com/rtsng/defhacks_2020'}
                      >
                        git
                      </a>
                    </div>
                  </Col>
                  <Col md = "auto"><div className="border"></div></Col>
                  <Col>
                  <div className="gap10"></div>
                    <div className="smallbutt">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || 'https://github.com/PeiAllen/EarthSense'}
                      >
                        git
                      </a>
                    </div>
                  </Col>
                </Row>
                <div className="gap"></div>
                <Row>
                  <Col>
                    <div className="projtitle">
                      Sample title
                    </div>
                    pic here
                    <p>
                      This is some random text
                    </p>
                    <div className="smallbutt">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        git
                      </a>
                    </div>
                  </Col>
                  <Col md = "auto"><div className="border"></div></Col>
                  <Col>
                    <div className="projtitle">
                      Sample title
                    </div>
                    pic here
                    <p>
                      This is some random text
                    </p>
                    <div className="smallbutt">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        git
                      </a>
                    </div>
                  </Col>
                </Row>
              </Fade>

              // <Accordion defaultActiveKey="0">
              //   <Card className= "cards">
              //     <Card.Header>
              //         <Row>
              //           <Col sm={11}>
              //             <div className = "rightsidetext">
              //               This should be on the right
              //             </div>
              //           </Col>
              //           <Col sm={1}>
              //             <Accordion.Toggle as={Button} variant="light" eventKey="0">
              //               <div className= "cardheader">
              //                 <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
              //               </div>
              //             </Accordion.Toggle>
              //           </Col>
              //         </Row>
              //     </Card.Header>
              //     <Accordion.Collapse eventKey="0">
              //       <Card.Body>Hello! I'm the body</Card.Body>
              //     </Accordion.Collapse>
              //   </Card>
              //   <Card className= "cards">
              //     <Card.Header>
              //       <Row>
              //         <Col sm={11}>
              //           <div className = "rightsidetext">
              //             This should be on the right
              //           </div>
              //         </Col>
              //         <Col sm={1}>
              //           <Accordion.Toggle as={Button} variant="light" eventKey="1">
              //             <div className= "cardheader">
              //               <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
              //             </div>
              //           </Accordion.Toggle>
              //         </Col>
              //       </Row>
              //     </Card.Header>
              //     <Accordion.Collapse eventKey="1">
              //       <Card.Body>Hello! I'm another body</Card.Body>
              //     </Accordion.Collapse>
              //   </Card>
              //   <Card className= "cards"> 
              //     <Card.Header>
              //       <Row>
              //         <Col sm={11}>
              //           <div className = "rightsidetext">
              //             This should be on the right
              //           </div>
              //         </Col>
              //         <Col sm={1}>
              //           <Accordion.Toggle as={Button} variant="light" eventKey="2">
              //             <div className= "cardheader">
              //               <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
              //             </div>
              //           </Accordion.Toggle>
              //         </Col>
              //       </Row>
              //     </Card.Header>
              //     <Accordion.Collapse eventKey="2">
              //       <Card.Body>Hello! I'm another body</Card.Body>
              //     </Accordion.Collapse>
              //   </Card>
              // </Accordion>

              



              // <Row key={id}>
              //   {/* <Col lg={4} sm={12}>
              //     this is the column
              //   </Col> */}
                
                
                
              // </Row>
              // <Row key={id}>
              //   <Col lg={4} sm={12}>
              //     <Fade
              //       left={isDesktop}
              //       bottom={isMobile}
              //       duration={1000}
              //       delay={500}
              //       distance="30px"
              //     >
              //       <div className="project-wrapper__text">
              //         <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
              //         <div>
              //           <p>
              //             {info ||
              //               'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
              //           </p>
              //           <p className="mb-4">{info2 || ''}</p>
              //         </div>
              //         <a
              //           target="_blank"
              //           rel="noopener noreferrer"
              //           className="cta-btn cta-btn--hero"
              //           href={url || '#!'}
              //         >
              //           See Live
              //         </a>

              //         {repo && (
              //           <a
              //             target="_blank"
              //             rel="noopener noreferrer"
              //             className="cta-btn text-color-main"
              //             href={repo}
              //           >
              //             Source Code
              //           </a>
              //         )}
              //       </div>
              //     </Fade>
              //   </Col>
              //   <Col lg={8} sm={12}>
              //     <Fade
              //       right={isDesktop}
              //       bottom={isMobile}
              //       duration={1000}
              //       delay={1000}
              //       distance="30px"
              //     >
              //       <div className="project-wrapper__image">
              //         <a
              //           href={url || '#!'}
              //           target="_blank"
              //           aria-label="Project Link"
              //           rel="noopener noreferrer"
              //         >
              //           <Tilt
              //             options={{
              //               reverse: false,
              //               max: 8,
              //               perspective: 1000,
              //               scale: 1,
              //               speed: 300,
              //               transition: true,
              //               axis: null,
              //               reset: true,
              //               easing: 'cubic-bezier(.03,.98,.52,.99)',
              //             }}
              //           >
              //             <div data-tilt className="thumbnail rounded">
              //               <ProjectImg alt={title} filename={img} />
              //             </div>
              //           </Tilt>
              //         </a>
              //       </div>
              //     </Fade>
              //   </Col>
              // </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
