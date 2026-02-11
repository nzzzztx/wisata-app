import React, { useEffect, useRef } from "react";
import "../../assets/css/kategori.css";

import alamIcon from "../../assets/icons/gunung.png";
import kulinerIcon from "../../assets/icons/makan.png";
import cafeIcon from "../../assets/icons/coffe.png";
import belanjaIcon from "../../assets/icons/market.png";
import fotoIcon from "../../assets/icons/camera.png";
import agroIcon from "../../assets/icons/luas.png";

const Kategori = () => {
    const data = [
        {
            title: "Wisata Alam",
            total: "52 lokasi",
            icon: alamIcon,
            color: "hijau",
        },
        {
            title: "Kuliner",
            total: "145 tempat",
            icon: kulinerIcon,
            color: "orange",
        },
        {
            title: "Kafe & Resto",
            total: "64 tempat",
            icon: cafeIcon,
            color: "kuning",
        },
        {
            title: "Belanja",
            total: "42 tempat",
            icon: belanjaIcon,
            color: "ungu",
        },
        {
            title: "Spot Foto",
            total: "86 tempat",
            icon: fotoIcon,
            color: "pink",
        },
        {
            title: "Agrowisata",
            total: "28 tempat",
            icon: agroIcon,
            color: "hijau2",
        },
    ];

    const kategoriRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (kategoriRef.current) {
            observer.observe(kategoriRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="kategori" ref={kategoriRef}>
            <div className="kategori__container">
                <div className="kategori__header">
                    <h2 className="kategori__title">Kategori Destinasi</h2>
                    <p className="kategori__subtitle">
                        Jelajahi berbagai pilihan mulai dari kesejukan alam hingga kelezatan
                        kuliner khas pegunungan dalam satu tempat.
                    </p>
                </div>

                <div className="kategori__grid">
                    {data.map((item, index) => (
                        <div key={index} className="kategori__card">
                            <div className={`kategori__icon kategori__icon--${item.color}`}>
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h4>{item.title}</h4>
                            <span>{item.total}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Kategori;
