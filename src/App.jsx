import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.scss";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BlogList from "./components/BlogList.jsx";
import BlogDetail from "./components/BlogDetail.jsx";
import Cookies from "./components/Cookies.jsx";
import Privacy from "./components/Privacy.jsx";
import Legal from "./components/Legal.jsx";
import CookieBanner from "./components/CookieBanner.jsx";


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
      
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
         </Routes>
      </main>
      <footer>
        <Footer />
      
      </footer>
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
