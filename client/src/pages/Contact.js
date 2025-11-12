import React from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact | DeJure Law & Consulting</title>
        <meta
          name="description"
          content="Reach DeJure's teams in Islamabad and Lahore for corporate, tax, and dispute resolution inquiries."
        />
      </Helmet>
      <section>
        <h6 className="guide-text ms-3 mt-4">CONTACT</h6>
        {/* contact info============ */}
        <div className="container-lg bg-light my-5 shadow">
          <div className="contact-info text-center py-5">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Offices:</h5>
                  <p className="mb-1">Islamabad - House 8, Street 38, F-6/1</p>
                  <p className="mb-0">Lahore - 36-C FCC, Gulberg IV</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faClock}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Office hours:</h5>
                  <p>Monday - Friday: 9 AM - 6 PM</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Email:</h5>
                  <p>info@dejure.pk</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faPhone}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Phone:</h5>
                  <p className="mb-1">Islamabad +92 51 831 1961</p>
                  <p className="mb-0">Lahore +92 42 3280 2885</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact form and text============ */}
        <div className="container-lg">
          <div className="row g-5">
            <div className="col-sm-6 order-sm-first ">
              <div className="contact-text d-flex flex-column ">
                <h5 className="lh-base text-center pb-4">
                  Connect with our Islamabad or Lahore team.
                </h5>
                <p>
                  Our corporate, tax, and dispute specialists respond quickly to
                  new mandates. Share a brief overview of your objectives and we
                  will arrange a dedicated strategy call.
                </p>
                <p>
                  For ongoing matters, please mention your DeJure contact so we
                  can route the message without delay. Prospective clients may
                  select Islamabad or Lahore based on convenience.
                </p>
                <p>
                  Prefer a direct call? Reach us in Islamabad at +92 51 831 1961
                  or Lahore at +92 42 3280 2885. Email enquiries are monitored
                  at info@dejure.pk.
                </p>
                <p className="fw-semibold">
                  For career applications, please visit our Careers page or
                  email careers@dejure.pk.
                </p>
              </div>
            </div>
            <div className="col-sm-6 ">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="shadow-sm p-4 h-100">
                <h6 className="fw-semibold">Islamabad</h6>
                <p className="mb-1">House 8, Street 38, F-6/1</p>
                <p className="mb-1">Cell: +92 300 946 2171</p>
                <p className="mb-1">Phone: +92 51 831 1961</p>
                <p className="mb-0">Email: isb@dejure.pk</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shadow-sm p-4 h-100">
                <h6 className="fw-semibold">Lahore</h6>
                <p className="mb-1">36-C FCC, Gulberg IV</p>
                <p className="mb-1">Cell: +92 346 600 2071</p>
                <p className="mb-1">Phone: +92 42 3280 2885</p>
                <p className="mb-0">Email: lhr@dejure.pk</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <h5 className="text-center pb-3">Locate Us on Google Maps</h5>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="map-embed shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=House+8,+Street+38,+F-6/1,+Islamabad,+Pakistan&output=embed"
                  title="DeJure Islamabad Office on Google Maps"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map-embed shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=36-C+FCC,+Gulberg+IV,+Lahore,+Pakistan&output=embed"
                  title="DeJure Lahore Office on Google Maps"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
