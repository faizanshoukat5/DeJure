import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Send request");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Opening email app...");

    const subject = `Consultation request from ${name || "DeJure website"}`;
    const body = [
      `Full name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Summary:",
      query,
    ].join("\n");

    const mailtoLink = `mailto:info@dejure.pk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (typeof window !== "undefined") {
      window.location.href = mailtoLink;
    }

    setTimeout(() => {
      setStatus("Send request");
      setName("");
      setEmail("");
      setPhone("");
      setQuery("");
    }, 1500);
  };

  return (
    <div className="form-wrap p-4 p-md-5 mb-5">
      <div className="contact-form-card">
        <div className="consultation-form-header text-center">
          <p className="eyebrow text-uppercase mb-2">Request a DeJure consultation</p>
          <h3>Brief the team in minutes</h3>
          <p className="helper-text">
            Complete the intake form and your message will open in your preferred email client addressed to <strong>info@dejure.pk</strong>.
            Include timelines, regulators, and counterparties so partners can prepare.
          </p>
          <ul className="contact-form-guidance">
            <li>Use your corporate email if you already have an engagement with us.</li>
            <li>Mention any filing deadlines or upcoming hearings.</li>
            <li>Attach supporting PDFs once your email client launches.</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-field-group">
            <label htmlFor="name" className="form-label">
              Full name <span className="required-indicator">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="e.g. Your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-field-group">
            <label htmlFor="email" className="form-label">
              Email address <span className="required-indicator">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="name@company.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-field-group">
            <label htmlFor="phone" className="form-label">
              Phone number <span className="required-indicator">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="+92 300 0000000"
              autoComplete="tel"
              required
            />
          </div>

          <div className="form-field-group">
            <div className="label-stack">
              <label htmlFor="query" className="form-label">
                How can we help? <span className="required-indicator">*</span>
              </label>
              <span className="field-hint">Share the forum, counterparties, deadlines, and goals.</span>
            </div>
            <textarea
              className="form-control"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              id="query"
              rows={5}
              placeholder="Outline the dispute, transaction, or regulatory matter."
              required
            ></textarea>
          </div>

          <div className="text-center pt-3">
            <button type="submit" className="btn btn-primary contact-form-btn" aria-label="Send consultation request">
              {status}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
