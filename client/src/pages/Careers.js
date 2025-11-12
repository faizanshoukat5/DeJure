import React from "react";
import { Helmet } from "react-helmet";

const Careers = () => {
  return (
    <div className="careers-page">
      <Helmet>
        <title>Careers | DeJure Law & Consulting</title>
        <meta
          name="description"
          content="Explore career opportunities at DeJure Law & Consulting. Learn about our culture, training pathways, and how to submit your application."
        />
      </Helmet>
      <section className="container py-5">
        <h6 className="guide-text text-uppercase">Careers</h6>
        <h5 className="fw-bold pb-3">Build Your Career With DeJure</h5>
        <p>
          DeJure is recognized for its strength in taxation, corporate, and
          commercial law. Our teams in Islamabad and Lahore collaborate across
          practice areas, blending legal analysis with policy insight to deliver
          practical outcomes for clients. We recruit professionals who thrive on
          complex mandates, value teamwork, and bring a solutions-first mindset.
        </p>
        <div className="row g-4 pt-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h6 className="fw-semibold">What We Offer</h6>
                <ul className="my-list pt-3">
                  <li>Hands-on experience in headline corporate and tax matters.</li>
                  <li>Structured mentorship from senior partners and practice leads.</li>
                  <li>Continuing legal education and policy research projects.</li>
                  <li>Performance pathways that reward initiative and collaboration.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h6 className="fw-semibold">Who Thrives Here</h6>
                <ul className="my-list pt-3">
                  <li>Lawyers with sharp analytical instincts and business fluency.</li>
                  <li>Tax, finance, and policy specialists who enjoy multidisciplinary work.</li>
                  <li>Associates eager to lead client interactions with confidence.</li>
                  <li>Interns seeking a rigorous introduction to corporate practice.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 pt-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h6 className="fw-semibold">How to Apply</h6>
                <p className="pt-3">
                  Email your CV, cover letter, and a short writing sample to
                  <a className="ms-1" href="mailto:careers@dejure.pk">
                    careers@dejure.pk
                  </a>
                  . Mention your preferred office (Islamabad or Lahore) and the
                  practice areas that energize you.
                </p>
                <p>
                  Shortlisted candidates progress to partner interviews and a
                  focused analytical exercise based on live client scenarios.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h6 className="fw-semibold">Current Opportunities</h6>
                <ul className="my-list pt-3">
                  <li>Senior Associate - Taxation & Corporate Advisory</li>
                  <li>Associate - Regulatory Affairs & Compliance</li>
                  <li>Litigation Counsel - Civil & Criminal Matters</li>
                  <li>Internship - Research & Policy Support</li>
                </ul>
                <p className="pt-2">
                  We review applications year-round. If your ideal role is not
                  listed, send your profile and we will connect when an opening
                  aligns.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <p className="fw-semibold">
            DeJure is an equal opportunity employer built on integrity,
            professionalism, and collaborative teamwork.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;