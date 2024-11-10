// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Pastikan untuk mengimpor ikon yang diperlukan
import './Header.css'; // Mengimpor file CSS

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Set default ke true untuk dark mode

    // Menambahkan kelas dark-mode ke body saat komponen dimuat
    useEffect(() => {
        document.body.classList.add('dark-mode');
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode); // Toggle tema
        document.body.classList.toggle('dark-mode', !isDarkMode); // Menambahkan atau menghapus kelas untuk body
    };

    return (
        <nav className="navbar">
            <div className="logo">MyPorto</div>
            <button className="theme-toggle" onClick={toggleTheme}>
                <FontAwesomeIcon
                    icon={isDarkMode ? faSun : faMoon}
                    size="lg"
                    className={`icon ${isDarkMode ? 'rotate' : ''}`} // Tambahkan kelas untuk animasi
                />
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
        </nav>
    );
};

export default Header;