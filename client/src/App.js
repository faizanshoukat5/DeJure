import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import CoreStrengths from "./pages/CoreStrengths";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import OurTeam from "./pages/OurTeam";
import Achievements from "./pages/Achievements";
import Clientele from "./pages/Clientele";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Helmet>
            <title>DeJure Law & Consulting | Corporate Law Specialists</title>
            <meta
              name="description"
              content="DeJure is a full-service law and consulting firm supporting businesses across Pakistan with corporate, tax, regulatory, and dispute resolution expertise."
            />
          </Helmet>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/core-strengths" element={<CoreStrengths />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/people" element={<OurTeam />} />
            <Route path="/clientele" element={<Clientele />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
