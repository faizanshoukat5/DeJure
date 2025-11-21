import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

const focusSections = [
  {
    id: "taxation",
    label: "Taxation & Corporate",
    lead:
      "Taxation and corporate advisory remain the firm's flagship offering, covering planning, compliance, controversy, and board-level governance.",
    summary:
      "From structuring transactions to arguing precedent-setting appeals, we partner with in-house finance teams to secure tax-efficient positions and seamless regulatory compliance.",
    bullets: [
      "End-to-end support on income, sales, customs, and provincial levies",
      "Preparation of returns, withholding reviews, and accounting health-checks",
      "Representation before FBR, SECP, appellate tribunals, High Courts, and Supreme Court",
    ],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "trade",
    label: "Trade & WTO",
    lead:
      "Our trade law practice protects local industry, navigates budgetary measures, and aligns clients with WTO and FTA frameworks.",
    summary:
      "We intervene on anti-dumping, safeguard, and countervailing matters, shape tariff policy, and guide businesses on cross-border competitiveness.",
    bullets: [
      "Petitions and defences in trade-remedy investigations",
      "Policy submissions covering tariff schedules, FTAs, and budget interventions",
      "Integrated tax, customs, and WTO compliance advisory for exporters and banks",
    ],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "business-law",
    label: "Business & Commercial Law",
    lead:
      "We partner with entrepreneurs, established enterprises, and investors to structure deals, resolve disputes, and safeguard operational interests.",
    summary:
      "Our business law team handles everything from formation and contracts to shareholder agreements and commercial litigation, ensuring clients navigate growth, partnerships, and risk with clarity.",
    bullets: [
      "Company incorporation, partnership agreements, and shareholder arrangements",
      "Commercial contract drafting, negotiation, and dispute resolution",
      "Mergers, acquisitions, joint ventures, and regulatory compliance",
    ],
    image: "/assets/business-law.jpg",
  },
  {
    id: "civil-criminal",
    label: "Civil & Criminal",
    lead:
      "Ch. Muhammad Ali ASC leads our civil and criminal practice with more than two decades of trial and appellate experience across Pakistan.",
    summary:
      "We guide clients through investigations, urgent relief, and long-running litigation with disciplined preparation and relentless follow-through so every matter keeps momentum.",
    bullets: [
      "Representation from trial courts and tribunals to the Supreme Court",
      "Rapid response on arrests, injunctions, and white-collar investigations",
      "Matter strategies focused on due diligence, timelines, and measurable outcomes",
    ],
    image: "/assets/civil-criminal.jpg",
  },
  {
    id: "arbitration",
    label: "Arbitration",
    lead:
      "DeJure Advocates & Legal Consultants maintains a dedicated arbitration desk led by Harvard-trained counsel Hassan Kamran Bashir alongside Aitzaz Aslam.",
    summary:
      "We craft bespoke procedures, seat strategies, and enforcement plans so commercial parties resolve disputes faster than traditional litigation allows.",
    bullets: [
      "Institutional and ad-hoc mandates across infrastructure, energy, and joint ventures",
      "Panel of former judges and subject-matter experts to serve as neutrals or co-counsel",
      "Award enforcement, challenge proceedings, and ADR program design",
    ],
    image: "/assets/arbitration.jpg",
  },
  {
    id: "banking",
    label: "Banking & Finance",
    lead:
      "We advise banks, DFIs, modarabas, and fintech lenders on documentation, security perfection, and recovery across complex portfolios.",
    summary:
      "Our team drafts and negotiates every layer of finance documentation, vets collateral, and conducts contentious recoveries so institutions can deploy capital with confidence.",
    bullets: [
      "Facility, security, and intercreditor documentation tailored to each product",
      "Collateral validation with complete title and revenue-record sweeps",
      "Demand notices, negotiations, and litigation under banking recovery regimes",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
];

const practiceAreaTopics = [
  "Arbitration",
  "Banking Law",
  "Civil Law",
  "Corporate Law",
  "Commercial Law",
  "Contracts",
  "Criminal Law",
  "Customs Law",
  "Human Rights",
  "Immigration Law",
  "Income Tax Law",
  "International Taxation",
  "Intellectual Property",
  "International Agreements",
  "International Law",
  "Family Law",
  "Management Consultancy",
  "Property & Real Estate",
  "Sales Tax Law",
  "Telecommunication Law",
  "WTO / Trade Law",
  "Labour & Employment",
];

const practiceVisuals = [
  {
    src: "/assets/lawyer-at-work1.webp",
    alt: "Lawyers collaborating at a desk",
  },
  {
    src: "/assets/law-justice.webp",
    alt: "Justice scales and law imagery",
  },
];

const PracticeAreas = ({ focusTarget }) => {
  const location = useLocation();

  useEffect(() => {
    const hash = focusTarget ? `#${focusTarget}` : location.hash;
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const targetId = hash.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [focusTarget, location]);

  const practiceColumns = [[], [], []];
  practiceAreaTopics.forEach((topic, index) => {
    practiceColumns[index % practiceColumns.length].push(topic);
  });

  return (
    <div className="expertise-page" id="practice-areas">
      <Helmet>
        <title>
          Core Strengths & Practice Areas | DeJure Advocates & Legal
          Consultants
        </title>
        <meta
          name="description"
          content="Explore DeJure Advocates & Legal Consultants' core strengths and practice areas spanning taxation, disputes, banking, trade, arbitration, and policy advisory."
        />
      </Helmet>

      <section className="expertise-hero text-center text-md-start">
        <div className="container py-5">
          <h6 className="guide-text">CORE STRENGTHS & PRACTICE AREAS</h6>
          <div className="row align-items-center g-4 pt-3">
            <div className="col-md-7">
              <h2 className="fw-bold text-white mb-3">
                Dedicated teams for complex mandates
              </h2>
              <p className="hero-copy">
                We combine courtroom advocacy with regulatory insight to deliver pragmatic solutions. Our partners stay engaged with regulators, industry bodies, and academia so clients receive advice that anticipates change—not just reacts to it.
              </p>
            </div>
            <div className="col-md-5 text-md-end text-center">
              <Link to="/contact" className="btn btn-outline-light">
                Request a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="core-strengths" className="container py-5">
        <div className="section-heading text-center text-md-start pb-4">
          <h3 className="fw-bold">Core Strengths</h3>
          <p className="subtitle" style={{ maxWidth: "720px" }}>
            Each spotlight mirrors the depth of the standalone practice pages—complete with veteran leads, tailored service menus, and contextual imagery.
          </p>
        </div>
        <div className="focus-section-list">
          {focusSections.map(({ id, label, lead, summary, bullets, image }, index) => (
            <article className="focus-section py-4" key={id} id={id}>
              <div className={`row align-items-center gy-4 gx-lg-5 ${index % 2 !== 0 ? "flex-lg-row-reverse" : ""}`}>
                <div className="col-lg-6">
                  <div className="focus-copy">
                    <p className="eyebrow mb-2">Practice Spotlight</p>
                    <h4 className="fw-bold mb-3">{label}</h4>
                    <p className="lead-text mb-3">{lead}</p>
                    <p className="mb-4 text-body-light">{summary}</p>
                    <ul className="focus-bullets">
                      {bullets.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="focus-media"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, rgba(85, 9, 9, 0.55), rgba(60, 4, 4, 0.35)), url(${image})`
                    }}
                    role="img"
                    aria-label={`${label} imagery`}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="practice-area-list" className="practice-areas-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="section-heading text-center text-md-start pb-4">
                <h3 className="fw-bold text-white">Practice Areas</h3>
                <p className="subtitle text-white-50" style={{ maxWidth: "680px" }}>
                  We advise businesses, financial institutions, public bodies, and multinationals across a wide range of sectors. These are the mandates we are most frequently trusted with.
                </p>
              </div>
              <div className="row g-4">
                {practiceColumns.map((column, columnIndex) => (
                  <div className="col-12 col-md-4" key={`practice-column-${columnIndex}`}>
                    <ul className="practice-area-list">
                      {column.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="practice-visual-stack">
                {practiceVisuals.map(({ src, alt }, index) => (
                  <figure
                    key={src}
                    className={`practice-visual practice-visual-${index}`}
                  >
                    <img src={src} alt={alt} loading="eager" fetchpriority="high" />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="practice-footer-separator">
        <div className="container py-4 py-md-5">
          <div className="row align-items-center g-3">
            <div className="col-md-8 text-center text-md-start">
              <h4 className="fw-bold mb-2">Need breathing room to plan your next move?</h4>
              <p className="mb-0 text-body-light">
                Our partners can walk you through dispute, tax, or transaction strategies before you commit resources.
              </p>
            </div>
            <div className="col-md-4 text-center text-md-end">
              <Link to="/contact" className="btn btn-outline-dark px-4 py-2 fw-semibold">
                Speak with the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
