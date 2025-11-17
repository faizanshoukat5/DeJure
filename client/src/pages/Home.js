import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>
            De Jure Advocates & Legal Consultants | Business Law & Consulting
          </title>
          <meta
            name="description"
            content="De Jure Advocates & Legal Consultants delivers corporate, tax, and regulatory counsel for businesses operating across Pakistan. Discover our mission, expertise, and client-first values."
          />
        </Helmet>
        {/* HERO=========== */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 slide">
                <div className="text-1 fs-2 pb-3">
                  DE JURE ADVOCATES & LEGAL CONSULTANTS
                </div>
                <div className="text-2 fs-4">
                  CORPORATE LAW. TAX STRATEGY. REGULATORY INSIGHT.
                  <span className="fw-bold">
                    <br></br> Islamabad & Lahore
                  </span>
                </div>
                <div className="text-3 fst-italic fw-light">
                  "We align legal precision with business realities so leaders
                  can act with confidence."
                </div>
              </div>
              {/* horizontal buttons */}
              <div className="horizontal-btn d-none d-md-flex justify-content-center  align-items-end w-100 h-100">
                <div className=" col flex-grow-1">
                  <Link to="/contact">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg  type-button p-4 w-100 fw-bold"
                      aria-label="Book consultation"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      Book consultation
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Request case review"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                      Schedule strategy call
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/about">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="View fees"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                      Meet our team
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* small screens buttons*/}
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contact">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Book consultation"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  Book consultation
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Request case review"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  Schedule call
                </button>
              </Link>
              <Link to="/about">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md"
                  aria-label="View fees"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  Meet our team
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/*TE CONFRUNTI CU O PROBLEMA========= */}

        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">OUR MISSION</h6>
                <h5 className="lh-base text-center pb-4">
                  Full-service counsel for quality-conscious organizations
                </h5>

                <p className="text-separator fw-normal">
                  De Jure Advocates & Legal Consultants was founded to deliver
                  efficient, client-centric legal
                  solutions for businesses navigating Pakistan's regulatory
                  landscape. We balance timely advice with strategic execution,
                  supporting decision-makers through complex transactions and
                  disputes.
                  <br />
                  <span className="ms-4"></span>Our lawyers collaborate across
                  disciplines, pairing industry insight with rigorous legal
                  analysis to safeguard every mandate from planning to
                  resolution.
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/law-justice.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt=" a gavel, scales of justice, and law books"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICII========= */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="services-section ">
                <div className="services-overlay "></div>

                <div className="services-content container mt-3">
                  <h6 className=" guide-text">OUR EXPERTISE</h6>

                  <h5 className="lh-base text-center pb-3">
                    Advisory tailored to your business goals
                  </h5>
                  <div className="row mt-3 gx-3 flex-column flex-md-row ">
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">
                        Corporate & commercial advisory
                      </h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/business-law.jpg"
                          className="barou img-fluid mx-auto d-block rounded-3"
                          alt="Corporate and commercial law consultation"
                          style={{
                            width: "min(260px, 100%)",
                            height: "200px",
                            objectFit: "cover",
                            boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
                          }}
                        />
                      </div>
                      <p className="pt-4 px-2">
                        We guide boards and executives through governance,
                        shareholder relations, commercial agreements, and
                        dispute resolution. Our team blends litigation
                        experience with proactive risk management to keep
                        matters on track.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/practice-areas">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Learn more"
                          >
                            Explore practice areas
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">
                        Taxation & restructuring
                      </h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/civil-criminal.jpg"
                          className="unpir img-fluid mx-auto d-block rounded-3"
                          alt="Taxation and restructuring concept"
                          style={{
                            width: "min(260px, 100%)",
                            height: "200px",
                            objectFit: "cover",
                            boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
                          }}
                        />
                      </div>
                      <p className="pt-4 px-2">
                        From tax-efficient structuring to workouts and
                        restructuring, we partner with financial advisors to
                        stabilise operations, protect assets, and secure
                        stakeholder alignment.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/core-strengths">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Learn more"
                          >
                            View core strengths
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CINE SUNTEM */}

        <section className="card py-4 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <p className="guide-text mb-4">ABOUT</p>
                <h5 className="lh-base text-center pb-4">Who we are</h5>

                <p className="text-separator fw-normal">
                  De Jure Advocates & Legal Consultants delivers legal and
                  policy advice to businesses, NGOs,
                  regulators, and government authorities. Our lawyers combine
                  top-tier education with practical commercial insight,
                  ensuring every mandate is shaped by deep understanding of our
                  clients' industries.
                  <br></br>
                  <span className="ms-4"></span>We maintain close contact with
                  stakeholders, crafting bespoke strategies that address the
                  nuances of each transaction or dispute.
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/about-us.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="two persons at a desk"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/*CE NE RECOMANDA========= */}
        <section className="recommendation p-3 bg-image m-3 px-0">
          <h6 className="guide-text ">WHY DE JURE ADVOCATES & LEGAL CONSULTANTS</h6>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className="h-50 lh-base text-center pb-4">Why clients choose us</h5>
          </div>
          <div className="row mt-4 align-items-center mb-3">
            <div className="col-md-7 order-md-2">
              <div className="why-choose">
                <p className="why-choose-text">
                  We combine client-focused service with deep expertise across corporate, tax, regulatory, and dispute matters. Our approach is built on integrity, transparency, and collaborative teamwork between our Islamabad and Lahore offices. With over 15 years of experience, we deliver innovative, policy-informed solutions tailored to each client's unique business goals.
                </p>
              </div>
            </div>
            <div className="col-md-5 order-md-1 mt-4 mt-md-0">
              <div className="why-choose-visual">
                <img
                  src="/assets/lawyer-why-choose-us.jpeg"
                  className="img-fluid rounded-3 shadow"
                  alt="Lawyer consulting clients"
                  style={{ maxHeight: "220px", width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <p className="guide-text mb-4">CORE STRENGTHS</p>
                <h5 className="lh-base text-center pb-4">
                  Proven capability across critical mandates
                </h5>

                <p className="text-separator fw-normal">
                  Our core strengths include taxation and corporate laws, civil
                  and criminal litigation, banking and finance, domestic and
                  international arbitration, and trade law. Each mandate is led
                  by senior practitioners who stay engaged from strategy
                  development through execution.
                  <br></br>
                  <span className="ms-4"></span>Visit our Core Strengths page
                  for detailed service descriptions or contact us to discuss a
                  bespoke engagement.
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/business-law.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="law team collaborating"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
