import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionUsage({ TechUsed = [], KeyFeatures = [] }) {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Technologies Used
        </AccordionSummary>
        <AccordionDetails>
          {TechUsed.length > 0 ? (
            TechUsed.map((tech, index) => (
              <div key={index}>
                {tech} <br />
              </div>
            ))
          ) : (
            <div>No technologies used</div>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Key Features
        </AccordionSummary>
        <AccordionDetails>
          {KeyFeatures.length > 0 ? (
            KeyFeatures.map((feature, index) => (
              <div key={index}>
                {feature} <br />
              </div>
            ))
          ) : (
            <div>No key features</div>
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AccordionUsage;
