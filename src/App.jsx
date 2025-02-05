import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VisionSection from "./components/VisionSection";
import ProgramsSection from "./components/ProgramsSection";
import AboutUs from "./components/AboutUs";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://nordic-compass.kit.com/52edec1575/index.js";
    script.async = true;
    script.onerror = (error) => {
      console.error("Script failed to load:", error);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <VisionSection />
                <ProgramsSection />
                <AboutUs />
                <FAQSection />
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add a fallback for undefined routes */}
          <Route
            path="*"
            element={
              <>
                <h1>404 - Page Not Found</h1>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
