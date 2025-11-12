import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScaleBalanced,
  faTruck,
  faPeopleLine,
  faBriefcase,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
const PracticeAreas = () => {
  return (
    <>
      <div className="avocatura">
        <Helmet>
          <title>Practice Areas | DeJure Law & Consulting</title>
          <meta
            name="description"
            content="Review DeJure's corporate, tax, regulatory, and dispute resolution capabilities."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">PRACTICE AREAS</h6>
          <div className=" pt-4 text-center">
            <h5 className="fw-bold text-center pb-1">
              Comprehensive legal counsel
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-4">
              Strategic advice for businesses, regulators, and investors across
              Pakistan.
            </h6>
          </div>
          <div className="row g-5 px-5 pt-4 ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 ">
                <div class="civil card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">Corporate law & governance</h6>
                  <p className="card-text mx-1">
                    Advisory on incorporations, restructurings, shareholders'
                    agreements, and governance frameworks that align strategy
                    with compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="criminal card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faGavel}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">Dispute resolution & investigations</h6>
                  <p className="card-text mx-1">
                    Representation before courts, tribunals, and regulators,
                    including white-collar defence, crisis response, and policy
                    engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="enforcement card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">Tax planning & compliance</h6>
                  <p className="card-text mx-1">
                    Structuring transactions, managing audits, and litigating
                    tax disputes across federal, provincial, and local
                    authorities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="family card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faPeopleLine}
                    size="2x"
                    className="pb-3 law-icon"
                  />
                  <h6 className="card-title pb-2">Civil & criminal litigation</h6>
                  <p className="card-text mx-1">
                    Handling sensitive civil and criminal proceedings,
                    injunctions, and enforcement actions with strategic,
                    evidence-driven advocacy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="labor card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">Banking & finance</h6>
                  <p className="card-text mx-1">
                    Counsel on project finance, lending, securities, and
                    regulatory approvals for domestic and cross-border
                    transactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="business card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScroll}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">International trade & policy</h6>
                  <p className="card-text mx-1">
                    Guidance on customs, trade remedies, treaty negotiations,
                    and policy development for public and private sector
                    stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <p className="more-services py-4">
              Our team also supports mergers, energy projects, public-private
              partnerships, and bespoke advisory assignments that demand a
              multidisciplinary perspective.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PracticeAreas;
