// src/App.js
import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import "./style.css";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Skills from "./components/skill";

const App = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div>
      <Header />
      <Home />
      <div >
        <div style={{ marginTop:"50px", marginBottom:"50px" }}> 
          <h2 style={{ marginBottom: "10px", textAlign: "center" }}>
            Tentang Saya
          </h2>
          <AboutMe />
        </div>
        <div style={{ marginTop:"50px", marginBottom:"50px" }}>
        <h2 style={{ marginBottom: "40px", textAlign: "center" }}>
            Skill
          </h2>
          <Skills />
        </div>
        <div style={{ marginTop:"50px", marginBottom:"50px" }}>
        <h2 style={{ marginBottom: "10px", textAlign: "center" }}>
            Project
          </h2>
          <Project />
          <Project2 />
          {/* <Project3 /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
