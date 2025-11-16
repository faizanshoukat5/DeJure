import React, { useState } from "react";
import { Helmet } from "react-helmet";
import people from "../data/people.json";

const OurTeam = () => {
  const [expandedBio, setExpandedBio] = useState(null);

  const toggleBio = (name) => {
    setExpandedBio(expandedBio === name ? null : name);
  };

  return (
    <div className="page our-team">
      <Helmet>
        <title>Our Team | De Jure Advocates & Legal Consultants</title>
        <meta
          name="description"
          content="Meet the leadership, partners, and consultants who guide De Jure Advocates & Legal Consultants' corporate, tax, and dispute mandates across Pakistan."
        />
      </Helmet>
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h6 className="guide-text text-uppercase ms-3">Our Team</h6>
          <h2 className="fw-bold pb-2 text-center">Leadership committed to client success</h2>
          <p className="text-center pb-4 text-muted">
            Our team combines deep legal expertise with practical business insight to deliver exceptional results.
          </p>
        </div>
      </section>
      <div className="container py-5">
        <div className="row g-4">
          {people.map((p) => (
            <div className="col-lg-12" key={p.name}>
              <div className="team-member-card shadow-sm">
                <div className="row g-0">
                  <div className="col-md-3">
                    <div className="team-member-image-wrapper">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="team-member-image"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "/assets/LOGO2.png";
                          e.target.style.objectFit = "contain";
                          e.target.style.padding = "2rem";
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="team-member-body p-4">
                      <h4 className="fw-bold mb-1">{p.name}</h4>
                      <p className="subtitle fw-semibold mb-3">{p.title}</p>
                      <div className="team-member-bio">
                        <p className="mb-2">{p.bio}</p>
                        {p.fullBio && (
                          <>
                            {expandedBio === p.name && (
                              <p className="mb-2 text-muted">{p.fullBio}</p>
                            )}
                            <button
                              className="btn btn-link p-0 text-decoration-none"
                              onClick={() => toggleBio(p.name)}
                              style={{ color: "#c2b697", fontWeight: "500" }}
                            >
                              {expandedBio === p.name ? "Show Less ▲" : "Read More ▼"}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
