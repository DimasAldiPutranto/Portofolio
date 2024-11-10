import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isDeleting) {
                // Jika sedang menghapus, hapus karakter terakhir
                setDisplayedText((prev) => prev.slice(0, prev.length - 1));
                
                // Jika sudah menghapus semua karakter, mulai mengetik ulang
                if (displayedText.length === 0) {
                    setIsDeleting(false);
                    setIndex(0); // Reset index untuk mengetik ulang
                }
            } else {
                // Jika tidak sedang menghapus, tambahkan karakter
                setDisplayedText((prev) => prev + text[index]);
                
                // Jika sudah mengetik semua karakter, mulai menghapus
                if (index < text.length - 1) {
                    setIndex(index + 1);
                } else {
                    setIsDeleting(true);
                }
            }
        }, isDeleting ? speed / 2 : speed); // Kecepatan penghapusan lebih cepat

        return () => clearTimeout(timeout); // Membersihkan timeout saat komponen di-unmount
    }, [displayedText, isDeleting, index, speed, text]);

    return <span>{displayedText}</span>; // Menampilkan teks yang sedang ditampilkan
};

export default TypingEffect;