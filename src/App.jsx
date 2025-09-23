import { useState } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.scss";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail"
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
       <main>
 <Routes>
    <Route
      path="/"
      element={
        <>
          <Hero />
          <About /> 
          <Services />
        </>
      }
    />
    <Route path="/services/:id" element={<ServiceDetail />} />
  </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
