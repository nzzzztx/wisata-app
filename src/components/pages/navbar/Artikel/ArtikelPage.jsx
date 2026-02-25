import { useEffect, useState } from "react";
import { dataArtikelfull } from "../../../data/artikelfull";

const ArtikelPage = () => {

    const [selectedArticle, setSelectedArticle] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (selectedArticle) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedArticle]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!selectedArticle) return;

        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setSelectedArticle(null);
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [selectedArticle]);

    return (
        <>
            <section className="bg-white py-28 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">

                    <div
                        className={`text-center mb-16 transition-all duration-700 
                        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                            List Artikel
                        </h2>
                        <p className="text-slate-600 mt-4">
                            Jelajahi seluruh artikel dan informasi Brebes Selatan.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {dataArtikelfull.slice(0, visibleCount).map((item, index) => (
                            <div
                                key={item.id}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                className={`bg-white rounded-2xl shadow-md overflow-hidden 
                                border border-gray-100 hover:shadow-2xl hover:-translate-y-3 
                                transition-all duration-700 
                                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                            >
                                <div
                                    className="h-52 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                ></div>

                                <div className="p-6">
                                    <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3">
                                        {item.category}
                                    </span>

                                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-slate-600 mb-5">
                                        {item.excerpt}
                                    </p>

                                    <button
                                        onClick={() => setSelectedArticle(item)}
                                        className="text-blue-600 font-semibold hover:underline"
                                    >
                                        Lihat Artikel →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleCount < dataArtikelfull.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={() => {
                                    setShow(false);
                                    setTimeout(() => {
                                        setVisibleCount(prev => prev + 6);
                                        setShow(true);
                                    }, 150);
                                }}
                                className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Lihat Lebih Banyak
                            </button>
                        </div>
                    )}

                </div>
            </section>

            {/* POPUP MODAL */}
            {selectedArticle && (
                <div
                    onClick={() => setSelectedArticle(null)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 md:px-6 animate-fadeIn"
                >

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl md:rounded-3xl w-full max-w-3xl max-h-[95vh] overflow-y-auto shadow-2xl relative animate-scaleUp"
                    >

                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/80 backdrop-blur-md rounded-full w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-700 shadow-md transition"
                        >
                            ✕
                        </button>

                        <div
                            className="h-48 sm:h-56 md:h-80 bg-cover bg-center rounded-t-2xl md:rounded-t-3xl"
                            style={{ backgroundImage: `url(${selectedArticle.image})` }}
                        ></div>

                        <div className="p-5 sm:p-6 md:p-8">

                            <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
                                {selectedArticle.category}
                            </span>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-6 leading-tight">
                                {selectedArticle.title}
                            </h3>

                            <div className="text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
                                {selectedArticle.content?.split("\n").map((line, index) => {
                                    const trimmed = line.trim();

                                    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                                        return (
                                            <h4 key={index} className="font-semibold text-blue-700 mt-4">
                                                {trimmed.replace(/\*\*/g, "")}
                                            </h4>
                                        );
                                    }

                                    if (trimmed.startsWith("*")) {
                                        return (
                                            <div key={index} className="flex items-start gap-2 ml-2">
                                                <span className="text-blue-600 mt-1">•</span>
                                                <p>{trimmed.replace("*", "").trim()}</p>
                                            </div>
                                        );
                                    }

                                    if (!trimmed) return null;

                                    return <p key={index}>{trimmed}</p>;
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ArtikelPage;