import * as React from "react";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Application } from "./components/Pages/Application";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <>
      <Router>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app" element={<Application />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  </>
  );
}

