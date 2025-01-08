import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import TypingEffect from "../components/TypingEffect";
import './Home.css';
import myPhoto from './assets/Me.png';

const Home = () => {
    console.log("Home component rendered"); // Debugging

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ fontSize: "40px", textAlign: "center", }}>
                <TypingEffect text="Welcome to My Portfolio ..." speed={200} />
            </h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img 
                    src={myPhoto}  // Menggunakan variabel yang telah diimpor
                    alt="Deskripsi Foto" 
                    style={{ borderRadius: '50%', width: '200px', height: '200px', border: '4px solid white  ' }} 
                />
                
                <p style={{ fontSize: "28px", textAlign: "center", fontWeight:"bold" }}>I'm Dimas Aldi Putranto</p>
                <p style={{ fontSize: "24px", textAlign: "center", }}>UI/UX | FrontEnd Developer</p>
            </div>
           
            <div 
            
            style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                    gap: "30px",
                    marginBottom: "10px",
                }}>
                    <a
                href="https://wa.me/6281315496635"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    marginTop: "10px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    color : "white",
                    padding: "12px",
                    backgroundColor: "rgb(6 182 212)",
                    borderRadius: "30px",
                    marginBottom: "30px",
                }}
            >
                Hubungi Saya
            </a>
             <a
             href="https://drive.google.com/file/d/10DKDGYeEYittJxcuhaj21IRhBqyS-n5C/view?usp=sharing"
             target="_blank"
             rel="noopener noreferrer"
             style={{
                 marginTop: "10px",
                 textDecoration: "none",
                 fontWeight: "bold",
                 padding: "10px",
                 borderRadius: "30px",
                 marginBottom: "30px",
                 color : "white",
                 backgroundColor:"rgb(91 33 182)",

             }}
         >
             Download CV
            </a>
            </div>

            
        </div>
    );
};

export default Home;

 {/* <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                    gap: "20px",
                    marginBottom: "10px",
                }}
            >
                <a
                    href="https://github.com/dimasaldiputranto"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" className="icon-github" />
                </a>
                <a
                    href="https://linkedin.com/in/dimasaldiputranto" // Pastikan URL ini benar
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-linkedin" />
                </a>
                <a
                    href="https://www.instagram.com/dimasald.p/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="icon-instagram" />
                </a>
            </div> */}