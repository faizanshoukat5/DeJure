import React from "react";
import { Helmet } from "react-helmet";

const openRoles = [
  {
    title: "Senior Associate — Tax & Corporate",
    location: "Islamabad or Lahore",
    type: "Full-time",
    practice: "Tax Controversy, Structuring",
    summary: "Lead mandates that span tax litigation, cross-border structuring, and CFO-facing advisory engagements.",
  },
  {
    title: "Associate — Regulatory Affairs",
    location: "Islamabad",
    type: "Full-time",
    practice: "Regulatory & Policy",
    summary: "Shape submissions before SECP, OGRA, and provincial authorities with guidance from senior partners.",
  },
  {
    title: "Litigation Counsel",
    location: "Lahore",
    type: "Full-time",
    practice: "Civil & Criminal",
    summary: "Own filings, evidence prep, and courtroom strategy alongside Supreme Court advocates.",
  },
  {
    title: "Research & Policy Fellow",
    location: "Remote / Islamabad",
    type: "6-month fellowship",
    practice: "Think-tank desk",
    summary: "Support comparative law projects, knowledge assets, and playbooks for active client mandates.",
  },
];

const experienceValues = [
  {
    title: "Rigorous matters",
    description: "You step into live mandates—tax hurdles, restructuring, high-stakes trials—guided by partner war rooms.",
  },
  {
    title: "Mentorship that travels",
    description: "Pods pair partners, senior associates, and analysts so you receive feedback daily—not annually.",
  },
  {
    title: "Research muscle",
    description: "Our knowledge desk archives playbooks, expert opinions, and global benchmarks to sharpen every brief.",
  },
];

const hiringSteps = [
  {
    label: "01",
    title: "Send your dossier",
    copy: "CV, tailored cover note, and a writing sample of 800–1,200 words. Mention office preference and practice focus.",
  },
  {
    label: "02",
    title: "Dialogue with partners",
    copy: "Expect two conversations covering client exposure, ethics, and how you structure complex matters.",
  },
  {
    label: "03",
    title: "Case exercise",
    copy: "We share a live-style scenario (tax, regulatory, or litigation). You respond with strategy, drafting, or memo work.",
  },
  {
    label: "04",
    title: "Offer & onboarding",
    copy: "Once selected, you receive a personalized progression path and an onboarding buddy in your practice pod.",
  },
];

const developmentTracks = [
  {
    title: "Graduate associates",
    copy: "ACL and LL.B. graduates rotate through corporate, tax, and litigation pods with quarterly feedback loops.",
  },
  {
    title: "Mid-career lateral",
    copy: "Experienced lawyers join as matter leads, backed by playbooks, client councils, and direct partner sponsorship.",
  },
  {
    title: "Fellows & interns",
    copy: "Research-focused roles contribute to knowledge dashboards, comparative studies, and regulatory trackers.",
  },
];

const benefits = [
  "Performance-linked bonuses and matter-origin credits",
  "Hybrid work windows tied to filing cycles",
  "Annual CLE stipend for global certifications",
  "Wellbeing allowance covering counseling or fitness",
  "Knowledge sabbaticals to pursue academic research",
];

const faqs = [
  {
    question: "Do you accept speculative applications?",
    answer: "Yes. We operate rolling intakes. Share the kind of work you wish to own and we will connect when a pod expands.",
  },
  {
    question: "What academic profile stands out?",
    answer: "We value strong fundamentals (LL.B., LL.M., Bar-at-Law) plus evidence of research rigor, moot or client work.",
  },
  {
    question: "Can I rotate between Islamabad and Lahore?",
    answer: "Most associates spend time in both offices. We co-locate for trials, hearings, and client councils.",
  },
];

const Careers = () => {
  return (
    <div className="careers-page">
      <Helmet>
        <title>Careers | DeJure Advocates & Legal Consultants</title>
        <meta
          name="description"
          content="Discover careers at DeJure Advocates & Legal Consultants. Explore open roles, mentorship culture, hiring process, and how to apply."
        />
      </Helmet>

      <section className="careers-hero">
        <div className="careers-hero-overlay" aria-hidden="true"></div>
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-7">
              <p className="eyebrow text-uppercase mb-3">Careers</p>
              <h1>Shape the mandates that move Pakistan's boardrooms</h1>
              <p className="lead">
                DeJure is a litigation-first firm with corporate instincts. We build teams who think like strategists, draft
                like policy experts, and advocate with conviction across tribunals to the Supreme Court.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="mailto:careers@dejure.pk?subject=Careers%20Application" className="btn btn-light btn-lg">
                  Email your dossier
                </a>
                <a href="/our-team" className="btn btn-outline-light btn-lg">
                  Meet the partners
                </a>
              </div>
              <div className="careers-hero-meta mt-4">
                <span>Islamabad • Lahore</span>
                <span>Tax | Corporate | Disputes | Policy</span>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="careers-highlight-panel">
                <div>
                  <h3>4 practice pods</h3>
                  <p>Corporate & Commercial • Tax Controversy • Litigation • Regulatory Affairs</p>
                </div>
                <div>
                  <h3>Mentors on every file</h3>
                  <p>Each mandate pairs a partner, senior associate, and researcher so learning is daily, not annual.</p>
                </div>
                <div>
                  <h3>Research desk</h3>
                  <p>Playbooks, comparative memos, and live trackers power courtroom and boardroom strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-uppercase mb-2">Life at DeJure</p>
            <h2>Where high-stakes work meets mentorship</h2>
          </div>
          <p className="heading-copy">
            We hire for curiosity and resilience. From day one you will be client-facing, backed by partners who stay in the room.
          </p>
        </div>
        <div className="row g-4">
          {experienceValues.map((value) => (
            <div className="col-md-4" key={value.title}>
              <div className="careers-value-card">
                <h5>{value.title}</h5>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="careers-section container" id="open-roles">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-uppercase mb-2">Open Roles</p>
            <h2>Now interviewing</h2>
          </div>
          <p className="heading-copy">
            We review applications throughout the year. Mention your earliest availability and preferred office.
          </p>
        </div>
        <div className="row g-4">
          {openRoles.map((role) => (
            <div className="col-lg-6" key={role.title}>
              <div className="careers-role-card">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                  <div>
                    <h4>{role.title}</h4>
                    <p className="role-practice">{role.practice}</p>
                  </div>
                  <div className="text-end careers-role-meta">
                    <span>{role.location}</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <p className="mb-3 text-muted">{role.summary}</p>
                <a className="text-link" href="mailto:careers@dejure.pk?subject=Careers%20Application">
                  Share profile →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="careers-section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-uppercase mb-2">Hiring Journey</p>
            <h2>Transparent steps, structured feedback</h2>
          </div>
        </div>
        <div className="row g-4">
          {hiringSteps.map((step) => (
            <div className="col-md-3" key={step.title}>
              <div className="hiring-step">
                <span className="hiring-step-number">{step.label}</span>
                <h5>{step.title}</h5>
                <p>{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="careers-section container">
        <div className="row g-4 align-items-stretch">
          {developmentTracks.map((track) => (
            <div className="col-md-4" key={track.title}>
              <div className="development-track-card">
                <h5>{track.title}</h5>
                <p>{track.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="careers-section container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="benefits-card">
              <p className="eyebrow text-uppercase mb-2">Benefits & Support</p>
              <h3>Designed for long-game careers</h3>
              <ul>
                {benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-card">
              <p className="eyebrow text-uppercase mb-2">FAQs</p>
              {faqs.map((faq) => (
                <div className="faq-item" key={faq.question}>
                  <h5>{faq.question}</h5>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="careers-section container">
        <div className="careers-cta-panel">
          <div>
            <p className="eyebrow text-uppercase mb-2">Ready to apply?</p>
            <h3>Send your dossier to careers@dejure.pk</h3>
            <p>
              Attach your CV, cover note, writing sample, and let us know how you can strengthen our practice pods.
            </p>
          </div>
          <a href="mailto:careers@dejure.pk?subject=Careers%20Application" className="btn btn-primary btn-lg">
            Submit application
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;