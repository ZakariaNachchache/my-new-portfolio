import React from "react";
import AccordionUsage from "../../components/AccordionUsage";
import "./style.css";

function Project({ title, description, image, TechUsed, KeyFeatures }) {
  return (
    <div className="project-container">
      <h2 className="ProjectTitle ">{title}</h2>
      <div className="image-container">
        <img
          src={require(`../../assets/images/${image}`)}
          alt="project"
          className="project-image"
        />
        <div className="project-description">{description}</div>
      </div>
      <div className="mt-2 mb-2">
        <AccordionUsage TechUsed={TechUsed} KeyFeatures={KeyFeatures} />
      </div>
    </div>
  );
}

export default Project;
