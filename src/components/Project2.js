// src/components/Project.js
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import './Project.css'; // Pastikan untuk mengimpor file CSS
import 'slick-carousel/slick/slick.css'; // Impor CSS dari slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Impor tema CSS dari slick-carousel

// Mengimpor gambar dari folder assets
import Home from './assets/MarketPlace/Home.jpg';
import Login from './assets/MarketPlace/Login.jpg';
import Register from './assets/MarketPlace/Register.jpg';

const Project2 = () => {
    const projectRef = useRef(null);

    useEffect(() => {
        // Animasi untuk kontainer proyek dari sebelah kanan
        gsap.fromTo(projectRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });
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
                }
            }
        ]
    };

    // Menggunakan gambar yang diimpor
    const projectScreenshots = [
        Home,
        Login,
        Register,
    ];

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
                <h2>Market Place</h2>
                <p>
                    Ini adalah Project pribadi yang yaitu market place. Project ini adalah aplikasi mobile marketplace yang dibangun menggunakan Flutter untuk tampilan antarmuka (frontend) dan Laravel Filament sebagai backend (administrasi) yang terhubung melalui API. Fitur Utama: Login/Registrasi, Pencarian Produk, Keranjang Belanja, dan Pembayaran.
                </p>
            </div>
        </div>
    );
};

export default Project2;