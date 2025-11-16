import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const achievementsRef = useRef(null);

  useEffect(() => {
    if (location && location.hash && (location.hash === "#achievements")) {
      // small delay to ensure element is rendered
      setTimeout(() => {
        const el = document.getElementById("achievements") || achievementsRef.current;
        if (el && el.scrollIntoView) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  }, [location]);

  return (
    <div className="info">
      <Helmet>
        <title>Firm Overview & Achievements | DeJure Law & Consulting</title>
        <meta
          name="description"
          content="Explore DeJure's firm overview, mission, leadership approach, and landmark achievements."
        />
      </Helmet>
      <div>
        <h6 className="guide-text ms-3 mt-4">FIRM OVERVIEW & ACHIEVEMENTS</h6>
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h5 className="fw-bold pb-3">Mission & Values</h5>
              <p>
                DeJure was created to bring efficiency, customer centrality, and
                technical excellence to business law practice. We partner with
                quality-conscious organizations, protecting their vital
                interests through exceptional legal advice and representation.
              </p>
              <ul className="my-list pt-3">
                <li>Client-centric approach that keeps objectives in focus.</li>
                <li>Expertise and innovation anchored in rigorous analysis.</li>
                <li>Integrity and professionalism in every interaction.</li>
                <li>Collaborative teamwork across our Islamabad and Lahore offices.</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img
                src="/assets/about-us.webp"
                className="img-fluid rounded-2"
                alt="DeJure team collaborating"
              />
            </div>
          </div>
          <div className="row g-5 align-items-center pt-5">
            <div className="col-lg-6 order-lg-2">
              <h5 className="fw-bold pb-3">How We Work</h5>
              <p>
                Our lawyers bring together corporate, tax, litigation, and policy
                insights to craft tailored strategies. We invest time to
                understand each client's commercial landscape before designing an
                execution plan that considers legal, fiscal, and reputational
                dimensions.
              </p>
              <p>
                Whether supporting a cross-border transaction or guiding a
                regulator on policy reform, DeJure delivers proactive and timely
                counsel that helps clients lead with confidence.
              </p>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img
                src="/assets/business-law.webp"
                className="img-fluid rounded-2"
                alt="colleagues reviewing documents"
              />
            </div>
          </div>
          <div className="row g-5 align-items-center pt-5">
            <div className="col-lg-6">
              <h5 className="fw-bold pb-3">Leadership & Team</h5>
              <p>
                Our partners stay closely involved in every mandate, providing
                strategic oversight and direct access for clients. They are
                supported by associates, tax specialists, and policy consultants
                who collaborate seamlessly across practice areas.
              </p>
              <p>
                The team is recognized for responsive service, thorough
                preparation, and the ability to translate legal insights into
                practical business guidance.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/assets/column-services.webp"
                className="img-fluid rounded-2"
                alt="law library"
              />
            </div>
          </div>
          <section id="achievements" ref={achievementsRef} className="achievements-banner text-white mt-5">
            <div className="container py-5">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5">
                  <p className="guide-text mb-2">Track Record</p>
                  <h5 className="fw-bold text-white pb-3">Key Achievements</h5>
                  <p className="mb-0">
                    Highlights from DeJure&apos;s recent achievements illustrate the
                    firm&apos;s courtroom presence, policy expertise, and trusted
                    advisory role for leading institutions.
                  </p>
                </div>
                <div className="col-lg-7">
                  <ul className="achievements-list">
                    <li>
                      Engineered efficient tax planning regimes so clients can
                      claim maximum lawful deductions and exemptions.
                    </li>
                    <li>
                      Successfully contested high-stakes taxation and corporate
                      law matters before appellate tribunals, High Courts, and
                      the Supreme Court of Pakistan.
                    </li>
                    <li>
                      Earned industry-wide recognition for articulate pleadings
                      across tax, civil, criminal, and arbitration disputes.
                    </li>
                    <li>
                      Regularly advise on complex taxation and corporate issues,
                      delivering litigation, opinions, and drafting support for
                      superior courts.
                    </li>
                    <li>
                      Lead Partner Hassan Kamran Bashir facilitated CAREC&apos;s
                      “Contract Enforcement” workshop in Urumqi, China (July
                      2018).
                    </li>
                    <li>
                      Provided consultancy to the World Bank on the Punjab
                      Revenue Authority Tax Litigation Book (Nov 2016 – Jul
                      2017).
                    </li>
                    <li>
                      Delivered consultancy for FAO on federal and provincial
                      legislative drafts (2015 – 2016).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className="row g-5 align-items-center pt-5">
            <div className="col-12">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className="fw-bold pb-3">Our Promise</h5>
                  <p>
                    DeJure is committed to delivering cost-effective and
                    time-efficient services without compromising depth. We keep
                    communication transparent, ensure senior attention on every
                    matter, and stay ahead of regulatory change so clients can
                    focus on growth.
                  </p>
                  <p className="mb-0">
                    Connect with us to learn how our integrated team can support
                    your next transaction, policy initiative, or dispute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
