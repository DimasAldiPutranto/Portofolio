import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import TypingEffect from "../components/TypingEffect";
import './Home.css';
import myPhoto from './assets/Me2.jpg';

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
                    style={{ borderRadius: '50%', width: '200px', height: '200px' }} 
                />
                <p style={{ fontSize: "30px", textAlign: "center", fontWeight:"bold" }}>Dimas Aldi Putranto</p>
            </div>
            <p style={{ fontSize: "20px", textAlign: "center" }}>Connect with me on:</p>
            <div
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
            </div>
            <a
                href="https://www.instagram.com/dimasald.p/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    marginTop: "10px",
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    padding: "10px",
                    background:
                        "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                    borderRadius: "10px",
                    marginBottom: "30px",
                }}
            >
                Hubungi Saya
            </a>
            
        </div>
    );
};

export default Home;