import React, { useEffect, useRef, useState } from "react";
import TopBanner from "../components/TopBanner";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
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

  const navClasses = `nav${isSticky ? " nav-sticky" : ""}`;
  const practiceLinkActive =
    location.pathname === "/practice-areas" || location.pathname === "/core-strengths";

  return (
    <>
      <header ref={navRef} className={navClasses}>
        <TopBanner />
        <nav className="navbar navbar-dark w-100 navbar-expand-md slide-in">
          <div className="container-xxl">
            {/* logo */}
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center text-decoration-none text-white"
            >
              <img
                src="/assets/logo-option7-seal.svg"
                className="img-fluid logo-image"
                alt="De Jure Advocates & Legal Consultants logo"
                style={{ height: '100px', width: 'auto', maxWidth: '490px' }}
                loading="lazy"
              />
            </Link>
            {/* toggle button for mobile nav */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* navbar links  */}
            <div
              className="collapse navbar-collapse justify-content-end align-center"
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
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <Link
                    to="/practice-areas"
                    style={{
                      textDecoration: "none",
                      color: practiceLinkActive ? "#c2b697" : "#fff",
                      borderBottom: practiceLinkActive ? "1px solid #c2b697" : "none",
                      paddingBottom: practiceLinkActive ? "5px" : "0",
                      fontWeight: practiceLinkActive ? 600 : 500,
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
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/contact"
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
