import React, { useEffect, useRef, useState } from "react";
import TopBanner from "../components/TopBanner";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) {
      return;
    }
    const { height } = navRef.current.getBoundingClientRect();
    setNavHeight(height);
  }, [isSticky]);

  useEffect(() => {
    if (!navRef.current) {
      return;
    }

    const handleResize = () => {
      if (!navRef.current) {
        return;
      }
      const { height } = navRef.current.getBoundingClientRect();
      setNavHeight(height);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu and scroll to top when pathname changes (navigate to a new page)
  useEffect(() => {
    setMobileOpen(false);
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const navClasses = `nav${isSticky ? " nav-sticky" : ""}`;
  const practiceLinkActive =
    location.pathname === "/practice-areas" || location.pathname === "/core-strengths";
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutActive = location.pathname === "/about";

  return (
    <>
      <header ref={navRef} className={navClasses}>
        <TopBanner isCompact={isSticky} />
        <nav className="navbar navbar-dark w-100 navbar-expand-md slide-in">
          <div className="container-xxl">
            {/* logo */}
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center text-decoration-none text-white"
            >
              <img
              src="/assets/logo-dejure-main.jpg"
              className="img-fluid logo-image"
              alt="De Jure Advocates & Legal Consultants logo"
              style={{ height: isSticky ? '64px' : '100px', width: 'auto', maxWidth: '490px', transition: 'height 240ms ease' }}
              loading="eager"
              fetchpriority="high"
            />
            </Link>
            {/* toggle button for mobile nav */}
            <button
              className={`navbar-toggler ${mobileOpen ? "open" : ""}`}
              type="button"
              aria-controls="main-nav"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((s) => !s)}
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* navbar links  */}
            <div
              className={`collapse navbar-collapse justify-content-end align-center${
                mobileOpen ? " show" : ""
              }`}
              id="main-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  className={`nav-item mx-3 mb-2 dropdown${aboutOpen ? " show" : ""}`}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button
                    type="button"
                    className="nav-link dropdown-toggle"
                    aria-expanded={aboutOpen}
                    onClick={() => setAboutOpen((s) => !s)}
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      margin: 0,
                      color: aboutActive ? "#c2b697" : "#fff",
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    About
                  </button>
                  <ul className={`dropdown-menu${aboutOpen ? " show" : ""}`} style={{ background: "#02182b", border: "1px solid rgba(194,182,151,0.12)" }}>
                    <li>
                      <Link
                        to="/about"
                        className="dropdown-item"
                        onClick={() => {
                          setAboutOpen(false);
                          setMobileOpen(false);
                          // ensure the page opens from the top when selecting Firm Overview
                          setTimeout(() => {
                            try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0,0); }
                          }, 60);
                        }}
                        style={{ color: location.pathname === "/about" ? "#c2b697" : "#fff", textDecoration: 'none' }}
                      >
                        Firm Overview
                      </Link>
                    </li>
                    <li>
                        <Link
                          to="/about#achievements"
                          className="dropdown-item"
                          onClick={() => { setAboutOpen(false); setMobileOpen(false); }}
                          style={{ color: (location.pathname === "/about" && location.hash === "#achievements") ? "#c2b697" : "#fff", textDecoration: 'none' }}
                        >
                          Achievements
                        </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <Link
                    to="/practice-areas"
                    className="nav-link"
                    onClick={() => setMobileOpen(false)}
                    style={{
                      textDecoration: "none",
                      color: practiceLinkActive ? "#c2b697" : "#fff",
                      borderBottom: practiceLinkActive ? "1px solid #c2b697" : "none",
                      paddingBottom: practiceLinkActive ? "5px" : "0",
                      fontWeight: 700,
                    }}
                  >
                    Practice & Strengths
                  </Link>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/careers"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Careers
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/our-team"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Our Team
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2 d-md-none">
                  <NavLink
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Contact
                  </NavLink>
                </li>
                {/* CTA visible on desktop */}
                <li className="nav-item ms-2 d-none d-md-flex align-items-center">
                  <Link to="/contact" className="nav-cta btn btn-sm" onClick={() => setMobileOpen(false)}>
                    Request a consultation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {isSticky ? (
        <div style={{ height: navHeight }} aria-hidden="true"></div>
      ) : null}
    </>
  );
};

export default Navbar;
