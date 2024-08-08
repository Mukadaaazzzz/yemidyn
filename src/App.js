import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ProductShowcase from "./components/ProductShowcase";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <ProductShowcase />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
