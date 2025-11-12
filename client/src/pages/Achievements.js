import React from "react";
import { Helmet } from "react-helmet";

const Achievements = () => {
  return (
    <div className="page achievements">
      <Helmet>
        <title>Achievements | DeJure Law & Consulting</title>
        <meta
          name="description"
          content="Document DeJure's representative matters, awards, and policy contributions that demonstrate measurable impact for clients."
        />
      </Helmet>
      <div className="container py-5">
        <h6 className="guide-text text-uppercase">Achievements</h6>
        <h5 className="fw-bold pb-3">Representative matters & recognitions</h5>
        <p>
          Summarise landmark transactions, litigation victories, policy
          advisory engagements, and industry recognitions. Organise the content
          by practice area or client sector so visitors can quickly see relevant
          experience.
        </p>
        <p>
          Consider including metrics, quotes, or case studies that highlight the
          value DeJure delivers. Update this page regularly to reflect new
          mandates and awards.
        </p>
      </div>
    </div>
  );
};

export default Achievements;
