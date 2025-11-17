import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const TopBanner = () => {
  return (
    <div className="banner w-100 py-2">
      <div className="container">
        <div className="row d-sm-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="col col-md-4 col-sm-12 text-center mb-md-0">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="banner-icon pe-2"
              size="1x"
            />
            Islamabad & Lahore, Pakistan
          </div>
          <div className="col col-md-4 col-sm-12 text-center mb-md-0">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="banner-icon pe-2"
              size="1x"
            />
            info@dejure.pk
          </div>
          <div className="col col-md-4 col-sm-12 text-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="banner-icon phone-icon pe-2"
              size="1x"
            />
            <a href="tel:+923009462171" className="text-decoration-none fw-semibold">
              ISB: +92 300-9462171
            </a>
            <span className="mx-2">|</span>
            <a href="tel:+923214344392" className="text-decoration-none fw-semibold">
              LHR: +92 321-4344392
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
