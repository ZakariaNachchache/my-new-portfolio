import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, skills } from "../../content_option";
import { Container, Row, Col, Card } from "react-bootstrap";

export const Skills = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Main Skills</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Main Skills</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>
          {skills.map((skill, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-100  shadow-sm">
                <Card.Img
                  variant="top"
                  src={skill.image}
                  alt={`${skill.category} icon`}
                />
                <Card.Body>
                  <Card.Title className="hover:text-red-400 transition-all ">
                    {skill.category}
                  </Card.Title>
                  <ul>
                    {skill.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
