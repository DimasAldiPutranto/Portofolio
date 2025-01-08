// src/components/Project.js
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import "./Project.css"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Mengimpor gambar dari folder assets
import Cover from "./assets/Tracking/Cover.png";
import dashboard from "./assets/Tracking/dashboard.png";
import Tracking from "./assets/Tracking/Tracking_Detail.png";
import Pengiriman from "./assets/Tracking/Pengiriman.png";

const Project3 = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  const settings = {
    dots: true, // Mengaktifkan indikator bulat
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Nonaktifkan autoplay
    arrows: true, // Mengaktifkan tombol panah
    responsive: [
      {
        breakpoint: 768, // Ukuran layar di bawah 768px
        settings: {
          slidesToShow: 1, // Tampilkan 1 slide
          slidesToScroll: 1,
          dots: true, // Tampilkan indikator bulat
        },
      },
    ],
  };

  // Menggunakan gambar yang diimpor
  const projectScreenshots = [Cover, dashboard, Tracking, Pengiriman];

  return (
    <div className="project-container" ref={projectRef}>
      <div className="screenshot-slider">
        <Slider {...settings}>
          {projectScreenshots.map((screenshot, index) => (
            <div key={index} className="screenshot">
              <img src={screenshot} alt={`Project Screenshot ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="project-description">
        <h2>Tracking Armada </h2>
        <p>
          Dalam Project ini saya bertugas membuat tampilan UI dan UX untuk
          Tracking Armada yang berbasis Website yang dimana saya melakukan
          pembuatan desain ini dengan sesuai kebutuhan permintaan.Tracking Armada berbasis
          website ini ada beberapa menu yang paling utama bisa mentracking
          armada, pengemudi, menjadwalkan service dan bisa berkomunikasi dengen
          pengemudi. didalam project ini juga kita bisa melihat kondisi armada
        </p>
        <a
          href="https://www.figma.com/proto/zTsoRTWs7LnnqI5gBbj9DH/Pro-Tracker?node-id=98-3235&t=PvPpQX1Wz9nWnGBa-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{ padding: "12px", borderRadius: "8px" }}>
            Live Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project3;
