import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

const AboutMe = () => {
    const aboutMeRef = useRef(null);

    useEffect(() => {
        const controller = new ScrollMagic.Controller();

        const scene = new ScrollMagic.Scene({
            triggerElement: aboutMeRef.current,
            triggerHook: 0.8, // 80% dari viewport
            reverse: false // Hanya animasi sekali saat muncul
        })
        .on('enter', () => {
            const words = aboutMeRef.current.querySelectorAll('span'); // Ambil semua kata
            words.forEach((word, index) => {
                gsap.fromTo(word, 
                    { opacity: 0 }, // Awal animasi (transparan)
                    { opacity: 1, duration: 0.5, delay: index * 0.1 } // Akhir animasi (tampak)
                );
            });
        })
        .addTo(controller);

        // Cleanup controller on unmount
        return () => {
            controller.destroy(true);
        };
    }, []);

    // Teks yang akan ditampilkan
    const text = `Hi, saya Dimas Aldi Putranto! Saya Merupakan Front-End Developer yang bersemangat menciptakan karya yang menarik dan fungsional pengalaman web. Dengan latar belakang desain dan pengembangan web, saya telah mengembangkan keterampilan dalam HTML, CSS, Dan JavaScript untuk membuat antarmuka pengguna yang responsif dan menarik. Saya juga Mempunyai beberapa keahlian dan pengalaman mengembangkan project.`;

    return (
        <div 
            ref={aboutMeRef} 
            style={{ 
                display: 'flex', 
                padding: '40px', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: 'inherit', // Warna latar belakang sesuai mode
                opacity: 1 // Set initial opacity to 1
            }}
        >
            <div style={{ textAlign: 'justify', maxWidth: '800px' }}>
                <p style={{ fontSize: "20px", color: 'inherit', margin: 0 }}>
                    {text.split(' ').map((word, index) => (
                        <span key={index} style={{ display: 'inline', opacity: 0 }}>
                            {word} {/* Spasi otomatis di antara kata */}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default AboutMe;