import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, projectsData } from "../../content_option";
import Project from "./Project";
export const Portfolio = () => {
  return (
    <div>
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Portfolio | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>

          {projectsData.map((project, index) => (
            <div key={index}>
              <Row>
                <Project
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  TechUsed={project.technologies}
                  KeyFeatures={project.keyfeatures}
                />
              </Row>
              <hr className="t_border my-4 ml-0 text-left" />
            </div>
          ))}

          <div className="bottom-space"></div>
        </Container>
      </HelmetProvider>
    </div>
  );
};
