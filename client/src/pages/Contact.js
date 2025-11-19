import React from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";

const contactChannels = [
  {
    icon: faEnvelope,
    title: "Email dossier",
    detail: "info@dejure.pk",
    note: "Share background documents for rapid intake.",
  },
  {
    icon: faPhone,
    title: "Call Islamabad",
    detail: "+92 51 831 1961",
    note: "Available 9:00–19:00 PKT.",
  },
  {
    icon: faPhone,
    title: "Call Lahore",
    detail: "+92 42 3280 2885",
    note: "High-touch liaison for Punjab mandates.",
  },
];

const serviceSignals = [
  "Tax controversy & appellate strategy",
  "Corporate & shareholder advisory",
  "Restructuring, workouts & insolvency",
  "Civil, criminal & white-collar defense",
  "Regulatory submissions before SECP, OGRA, SBP",
  "International arbitration & cross-border mandates",
];

const responseSteps = [
  {
    label: "Step 1",
    title: "Triage within 4 business hours",
    copy: "Your form reaches a partner desk and our research pod for immediate conflict checks.",
  },
  {
    label: "Step 2",
    title: "Mandate scoping call",
    copy: "We host a 30-minute briefing to map objectives, timelines, and key documents.",
  },
  {
    label: "Step 3",
    title: "Engagement plan",
    copy: "Within 48 hours you receive a tailored plan, fee structure, and next-step calendar.",
  },
];

const offices = [
  {
    city: "Islamabad",
    address: "House 8, Street 38, F-6/1",
    phone: "+92 51 831 1961",
    cell: "+92 300 946 2171",
    email: "isb@dejure.pk",
  },
  {
    city: "Lahore",
    address: "36-C FCC, Gulberg IV",
    phone: "+92 42 3280 2885",
    cell: "+92 346 600 2071",
    email: "lhr@dejure.pk",
  },
];

export const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Request a Consultation | De Jure Advocates & Legal Consultants</title>
        <meta
          name="description"
          content="Request a consultation with De Jure's Islamabad and Lahore partners for tax, corporate, restructuring, and dispute matters."
        />
      </Helmet>

      <section className="contact-hero">
        <div className="contact-hero-overlay" aria-hidden="true"></div>
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p className="eyebrow text-uppercase mb-2">Request a consultation</p>
              <h1>Brief our partners and receive a plan within 48 hours</h1>
              <p className="lead">
                De Jure pairs Supreme Court advocates, tax strategists, and corporate advisors across Islamabad and Lahore. Share your
                objectives—the team will align courtroom and boardroom tactics quickly.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#consultation-form" className="btn btn-light btn-lg">
                  Complete intake form
                </a>
              </div>
              <div className="contact-hero-meta mt-4">
                <span>
                  <FontAwesomeIcon icon={faClock} /> 4h response window
                </span>
                <span>
                  <FontAwesomeIcon icon={faScaleBalanced} /> Litigation-first approach
                </span>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="contact-highlight-panel">
                <h3>What to prepare</h3>
                <ul>
                  <li>Chronology of facts + key deadlines</li>
                  <li>Existing orders, notices, or contracts</li>
                  <li>Desired forum (tax tribunal, High Court, regulator)</li>
                  <li>Internal stakeholders and decision makers</li>
                </ul>
                <p className="small mb-0">
                  Documents remain confidential and are reviewed only by the assigned partner pod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container contact-section">
        <div className="row g-4">
          {contactChannels.map((channel) => (
            <div className="col-md-6 col-xl-3" key={channel.title}>
              <div className="contact-channel-card">
                <div className="icon-pill">
                  <FontAwesomeIcon icon={channel.icon} />
                </div>
                <h5>{channel.title}</h5>
                <p className="contact-detail">{channel.detail}</p>
                <p className="text-muted small mb-0">{channel.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container contact-section">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5 order-2 order-lg-1">
            <div className="intake-copy">
              <p className="eyebrow text-uppercase mb-2">Strategic intake</p>
              <h2>Tell us where you need leverage</h2>
              <p>
                Every request is reviewed by the relevant partner along with our knowledge desk. This lets us surface precedents, internal
                playbooks, and the right mix of courtroom and advisory talent before your first meeting.
              </p>
              <ul className="service-list">
                {serviceSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 text-muted">
                Need an NDA before sharing files? Email <a href="mailto:info@dejure.pk">info@dejure.pk</a> and our desk will circulate one immediately.
              </p>
            </div>
          </div>
          <div className="col-lg-7 order-1 order-lg-2" id="consultation-form">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="container contact-section">
        <div className="row g-4">
          {responseSteps.map((step) => (
            <div className="col-md-4" key={step.title}>
              <div className="response-step">
                <span className="response-step-label">{step.label}</span>
                <h5>{step.title}</h5>
                <p>{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container contact-section">
        <div className="row g-4">
          {offices.map((office) => (
            <div className="col-md-6" key={office.city}>
              <div className="office-card">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <FontAwesomeIcon icon={faLocationDot} className="office-icon" />
                  <h5 className="mb-0">{office.city}</h5>
                </div>
                <p className="mb-1">{office.address}</p>
                <p className="mb-1">Phone: {office.phone}</p>
                <p className="mb-1">Cell: {office.cell}</p>
                <p className="mb-0">Email: {office.email}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
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

      <section className="container contact-section">
        <p className="text-center text-muted mt-3 small">
          For career applications please visit the Careers page or email careers@dejure.pk.
        </p>
      </section>
    </div>
  );
};
export default Contact;
