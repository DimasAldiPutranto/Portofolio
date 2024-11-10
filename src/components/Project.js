import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import './Project.css'; // Pastikan untuk mengimpor file CSS
import 'slick-carousel/slick/slick.css'; // Impor CSS dari slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Impor tema CSS dari slick-carousel

// Mengimpor gambar dari folder assets
import userImage from './assets/Presensi/User.jpg';
import scheduleImage from './assets/Presensi/schedule.jpg';
import mapImage from './assets/Presensi/Map.jpg';

const Project = () => {
    const projectRef = useRef(null);
    const { ref, inView } = useInView({
        threshold: 0.1, // 10% dari elemen harus terlihat
        triggerOnce: true, // Hanya trigger sekali
    });

    useEffect(() => {
        if (inView) {
            // Animasi untuk kontainer proyek dari sebelah kiri
            gsap.fromTo(projectRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });
        }
    }, [inView]);

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
        userImage,
        scheduleImage,
        mapImage,
    ];

    return (
        <div className="project-container" ref={ref}>
            <div className="screenshot-slider" ref={projectRef}>
                <Slider {...settings}>
                    {projectScreenshots.map((screenshot, index) => (
                        <div key={index} className="screenshot">
                            <img src={screenshot} alt={`Project Screenshot ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="project-description">
                <h2>Presensi</h2>
                <p>
                    Ini adalah Project pribadi yang yaitu presensi. Project ini adalah aplikasi mobile presensi (absensi) yang dibangun menggunakan Flutter untuk tampilan antarmuka (frontend) dan Laravel Filament sebagai backend (administrasi) yang terhubung melalui API. Fitur Utama: Login/Registrasi, Clock-in/Clock-out, Riwayat Presensi, Dashboard Admin.
                </p>
            </div>
        </div>
    );
};

export default Project;