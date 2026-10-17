
import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";
import "./index.css";

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      <header className="site-header">
        <div className="brand">My Website</div>
        <nav className="site-nav">
          <Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">Home</Link>
          <Link className={location.pathname === "/about" ? "nav-link active" : "nav-link"} to="/about">About</Link>
          <Link className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} My Website</footer>
    </div>
  );
}