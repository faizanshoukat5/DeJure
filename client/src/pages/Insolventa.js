import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Insolventa = () => {
  return (
    <>
      <div className="insolventa-page">
        <Helmet>
          <title>Core Strengths | De Jure Advocates & Legal Consultants</title>
          <meta
            name="description"
            content="Explore De Jure Advocates & Legal Consultants' core strengths across taxation, corporate law, disputes, finance, arbitration, and trade."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">CORE STRENGTHS</h6>
          <div className="container py-5">
            <h5 className="fw-bold text-center pb-1">
              Specialist teams for complex mandates
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-5">
              De Jure Advocates & Legal Consultants brings deep experience to
              matters spanning taxation, corporate law, litigation, financial
              services, arbitration, and trade.
            </h6>

            <div className="card">
              <div className="insolvency card-img-top2"></div>
              <div className="card-body">
                <div className="card-text text-white py-5">
                  <ul className="my-list pt-3">
                    <li>
                      <strong>Taxation & Corporate Laws:</strong> Transaction
                      planning, compliance, audits, and representation before
                      the Federal Board of Revenue, provincial authorities, and
                      appellate tribunals.
                    </li>
                    <br></br>
                    <li>
                      <strong>Civil & Criminal Areas:</strong> Litigation and
                      defence in complex civil disputes, white-collar matters,
                      and criminal proceedings through to the Supreme Court.
                    </li>
                    <br></br>
                    <li>
                      <strong>Banking & Finance:</strong> Structuring finance
                      transactions, advising on regulatory approvals, and
                      managing recovery or enforcement actions for financial
                      institutions.
                    </li>
                    <br></br>
                    <li>
                      <strong>Arbitration:</strong> Domestic and international
                      arbitration, including drafting of pleadings, enforcing
                      awards, and navigating institutional rules.
                    </li>
                    <br></br>
                    <li>
                      <strong>Trade Law:</strong> Customs matters, trade
                      remedies, WTO compliance, and policy work for government
                      entities and industry groups.
                    </li>
                    <br></br>
                    <li>
                      <strong>Policy & Consulting:</strong> Advisory support for
                      regulators, NGOs, and multilateral projects, combining
                      legal insight with economic and policy analysis.
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="link">
                  <button
                    className="btn btn-outline-dark my-4"
                    type="button"
                    aria-label="Request consultation"
                  >
                    Request consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insolventa;
