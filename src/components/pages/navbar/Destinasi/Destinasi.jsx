import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { dataDestinasi } from "../../../data/destinasi";

import starIcon from "../../../../assets/icons/star.png";

const Destinasi = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q");
    const sectionRef = useRef(null);
    const [show, setShow] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);
    const searchQuery = query?.toLowerCase().trim();

    useEffect(() => {
        setVisibleCount(6);
    }, [query]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setShow(true);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const filteredData = searchQuery
        ? dataDestinasi.filter((item) =>
            (
                item.title +
                item.desc +
                item.location +
                item.category
            )
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        )
        : dataDestinasi;

    return (
        <section
            ref={sectionRef}
            className="py-28 px-6 md:px-12 bg-white"
        >
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                        Destinasi Wisata
                    </h2>

                    <p className="text-slate-600 mt-4">
                        Jelajahi berbagai destinasi menarik dan populer.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredData.slice(0, visibleCount).map((item, index) => (
                        <div
                            key={item.id}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
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
                                    <div className="flex items-center gap-1 text-amber-500 font-medium text-sm">
                                        <img src={starIcon} alt="rating" className="w-4 h-4" />
                                        {item.rating}
                                    </div>

                                    <Link
                                        to={`/destinasi/${item.id}`}
                                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition"
                                    >
                                        Lihat Detail
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}

                    {filteredData.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">
                            Tidak ditemukan hasil untuk "{query}"
                        </p>
                    )}
                </div>
                {/* LOAD MORE BUTTON */}
                {visibleCount < filteredData.length && (
                    <div className="text-center mt-14">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="px-8 py-3 bg-blue-600 text-white rounded-xl 
                       hover:bg-blue-700 transition-all duration-300 
                       shadow-md hover:shadow-lg active:scale-95"
                        >
                            Muat Lebih Banyak
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Destinasi;