import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your existing components
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

import Testimonials from "./components/Testimonials";

import GalleryPage from "./components/GalleryPage";
import Portfolio from "./components/Portfolio";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Testimonials />
      <Slider />
      <Contact />
    </div>
  );
};

// Main App component with proper routing
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/gallery/:category" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
