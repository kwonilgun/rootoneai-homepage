/* eslint-disable react/jsx-no-undef */
import "./CSS/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Support from "./Components/Support";
import Terms from "./Components/Terms";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/Navbar" element={<Navbar />} /> */}
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        {/* <Route path="/terms" element={<Terms />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
