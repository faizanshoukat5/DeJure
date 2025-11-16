import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faFax,
  faGlobe,
  faLocationDot,
  // faAngleUp,
  faMobileScreenButton,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container py-5">
          <div className="row g-4 align-items-start">
            <div className="col-lg-4 text-center text-lg-start">
              <img
                src="/assets/logo-option7-seal.svg"
                className="img-fluid logo-image"
                alt="De Jure Advocates & Legal Consultants logo"
                style={{ height: '70px', width: 'auto', maxWidth: '380px', marginBottom: '1.5rem' }}
              />
              <p className="content pt-3">
                De Jure Advocates & Legal Consultants pairs courtroom insight
                with strategic advisory work across Pakistan. We maintain
                dedicated teams in Islamabad and Lahore to support complex
                mandates for businesses, investors, and public institutions.
              </p>
            </div>
            <div className="col-lg-4">
              <h6 className="footer-heading text-uppercase">Islamabad Office</h6>
              <ul className="footer-contact-list">
                <li>
                  <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                  <span>H. #8, St. #38, F-6/1</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMobileScreenButton} className="contact-icon" />
                  <a href="tel:+923009462171">Cell: +92 300 946 2171</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <a href="tel:+92518311961">Phone: +92 51 831 1961</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <a href="mailto:isb@dejure.pk">Email: isb@dejure.pk</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
                  <a
                    href="https://www.dejure.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.dejure.pk
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="footer-heading text-uppercase">Lahore Office</h6>
              <ul className="footer-contact-list">
                <li>
                  <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                  <span>36-C, FCC, Gulberg-IV</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMobileScreenButton} className="contact-icon" />
                  <a href="tel:+923466002071">Cell: +92 346 6002071</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <a href="tel:+924232802885">Phone: +92 42 3280 2885</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faFax} className="contact-icon" />
                  <span>Fax: +92 42 3540 3607</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <a href="mailto:lhr@dejure.pk">Email: lhr@dejure.pk</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
                  <a
                    href="https://www.dejure.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.dejure.pk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row g-3 align-items-center pt-4 footer-meta">
            <div className="col-md-6 text-center text-md-start">
              <span className="d-inline-flex align-items-center">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:info@dejure.pk" className="ps-2">
                  info@dejure.pk
                </a>
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/* Sitemap link intentionally removed per design request */}
            </div>
          </div>
          <div className="row g-4 pt-4">
            <div className="col-md-6">
              <div className="map-embed map-embed-footer shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=House+8,+Street+38,+F-6/1,+Islamabad,+Pakistan&output=embed"
                  title="De Jure Advocates & Legal Consultants Islamabad Office on Google Maps"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map-embed map-embed-footer shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=36-C+FCC,+Gulberg+IV,+Lahore,+Pakistan&output=embed"
                  title="De Jure Advocates & Legal Consultants Lahore Office on Google Maps"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll up */}
        {/* <div>
          <a
            href="#top"
            aria-label="Navigheaza in partea de sus"
            className="scroll-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <FontAwesomeIcon icon={faAngleUp} className="up-icon" size="2x" />
          </a>
        </div> */}
        {/* WhatsAppWidget */}
        <div>
          <WhatsAppWidget
            phoneNo="+923466002071"
            position="right"
            iconSize="50"
            iconColor="white"
            iconBgColor="#25D366"
            headerIcon="assets/LOGO2.png"
            headerTxtColor="white"
            headerBgColor="#02182b"
            headerTitle="De Jure Advocates & Legal Consultants"
            headerCaption="Typically replies in minutes"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={
              <>
                Hello,
                <br />
                <br /> How can we assist you today?
              </>
            }
            footerBgColor="#999"
            btnBgColor="#c2b697"
            btnTxtColor="black"
          />
        </div>
        {/* Copyright */}
        <div>
          <div className="bg-dark d-flex align-items-center justify-content-center">
            <hr></hr>
            <p className="copyright mb-0">
              ©2025 De Jure Advocates & Legal Consultants. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
