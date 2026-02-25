import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import starIcon from "../../assets/icons/star.png";

const Unggulan = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const [show, setShow] = useState(false);

    const data = [
        {
            id: "kaligua",
            title: "Agrowisata Kaligua",
            desc: "Kebun teh peninggalan kolonial dengan udara sejuk dan pemandangan Gunung Slamet.",
            location: "Paguyangan, Brebes Selatan",
            time: "3-5 jam",
            rating: 4.8,
            category: "Wisata Alam",
            image: "https://brebesinfo.com/wp-content/uploads/2025/05/IMG-20250513-WA0224.jpg",
        },
        {
            id: "kuliner-penjalin",
            title: "Ikan Betutu Waduk Penjalin",
            desc: "Menikmati sajian ikan Betutu goreng atau bakar yang langka dan gurih langsung di pinggir waduk.",
            location: "Winduaji, Paguyangan",
            time: "1-2 jam",
            rating: 4.8,
            category: "Kuliner",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPH9fghPSzupfj9Gkvkh-5TkyuA2wKQf15Wg&s",
        },
        {
            id: "samasta-coffee",
            title: "Samasta Coffee Bumiayu",
            desc: "Cafe industrial modern yang hits di Selatan, tempat favorit buat nongkrong estetik dan ngopi.",
            location: "Bumiayu, Brebes Selatan",
            time: "1-3 jam",
            rating: 4.7,
            category: "Cafe",
            image: "data:image/jpeg;base64,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",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setShow(true);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-28 px-6 md:px-12 bg-gradient-to-b from-[#e9f1ff] via-[#eef3fb] to-[#e9f1ff]"
        >
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                        Destinasi Unggulan
                    </h2>

                    <p className="text-slate-600 mt-4">
                        Jelajahi tempat-tempat wisata terbaik yang paling sering dikunjungi.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden cursor-pointer ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            onClick={() => navigate(`/destinasi/${item.id}`)}
                        >
                            {/* IMAGE */}
                            <div
                                className="relative h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <span className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium rounded-full">
                                    {item.category}
                                </span>
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">
                                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="text-xs text-slate-500 space-y-1 mb-4">
                                    <div>{item.location}</div>
                                    <div>{item.time}</div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-sm text-amber-500 font-medium">
                                        <img src={starIcon} alt="rating" className="w-4 h-4" />
                                        {item.rating}
                                    </div>

                                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition">
                                        Lihat Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Unggulan;