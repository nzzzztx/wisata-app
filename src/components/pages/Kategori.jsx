import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import alamIcon from "../../assets/icons/gunung.png";
import kulinerIcon from "../../assets/icons/makan.png";
import cafeIcon from "../../assets/icons/coffe.png";
import belanjaIcon from "../../assets/icons/market.png";
import fotoIcon from "../../assets/icons/camera.png";
import agroIcon from "../../assets/icons/luas.png";

const Kategori = () => {
    const navigate = useNavigate();
    const kategoriRef = useRef(null);
    const [show, setShow] = useState(false);

    const data = [
        {
            title: "Wisata Alam",
            total: "52 lokasi",
            icon: alamIcon,
            bg: "bg-emerald-100",
            text: "text-emerald-600",
        },
        {
            title: "Kuliner",
            total: "145 tempat",
            icon: kulinerIcon,
            bg: "bg-orange-100",
            text: "text-orange-600",
        },
        {
            title: "Kafe & Resto",
            total: "64 tempat",
            icon: cafeIcon,
            bg: "bg-yellow-100",
            text: "text-yellow-600",
        },
        {
            title: "Belanja",
            total: "42 tempat",
            icon: belanjaIcon,
            bg: "bg-purple-100",
            text: "text-purple-600",
        },
        {
            title: "Spot Foto",
            total: "86 tempat",
            icon: fotoIcon,
            bg: "bg-pink-100",
            text: "text-pink-600",
        },
        {
            title: "Agrowisata",
            total: "28 tempat",
            icon: agroIcon,
            bg: "bg-green-100",
            text: "text-green-600",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setShow(true);
            },
            { threshold: 0.2 }
        );

        if (kategoriRef.current) observer.observe(kategoriRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={kategoriRef}
            className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-white via-blue-50/40 to-white"
        >
            <div className="max-w-7xl mx-auto">

                <div
                    className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                        Kategori Destinasi
                    </h2>

                    <p className="text-slate-600 mt-4 leading-relaxed">
                        Jelajahi berbagai pilihan mulai dari kesejukan alam hingga kelezatan
                        kuliner khas pegunungan dalam satu tempat.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => navigate("/destinasi")}
                            className={`group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer text-center ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            <div
                                className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl ${item.bg} group-hover:scale-110 transition-transform duration-300`}
                            >
                                <img src={item.icon} alt={item.title} className="w-8 h-8" />
                            </div>

                            <h4 className={`font-semibold text-lg mb-2 ${item.text}`}>
                                {item.title}
                            </h4>

                            <span className="text-sm text-slate-500 block">
                                {item.total}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Kategori;