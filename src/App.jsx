// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/page/Home"
import TermsConditions from "../src/components/Term"
import PrivacyPolicy from "../src/components/PrivacyPolicy"
import GDPRConsent from "../src/components/GDPRBanner"
import Navbar from "../src/components/Header"
import Footer from "../src/components/Footer"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
