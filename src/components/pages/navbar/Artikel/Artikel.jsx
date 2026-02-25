import { useEffect, useRef, useState } from "react";
import { dataArtikel } from "../../../data/artikel";

const Artikel = () => {
    const sectionRef = useRef(null);
    const [show, setShow] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

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
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setSelectedArticle(null);
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className="bg-white py-28 px-6 md:px-12"
            >
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div
                        className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                            Artikel & Informasi
                        </h2>

                        <p className="text-slate-600 mt-4 leading-relaxed">
                            Temukan informasi terbaru seputar destinasi, budaya, dan cerita
                            menarik dari Brebes Selatan.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {dataArtikel.map((item, index) => (
                            <div
                                key={item.id}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                className={`bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    }`}
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
                </div>
            </section>

            {/* POPUP MODAL */}
            {selectedArticle && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-6">

                    <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fadeUp">

                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md rounded-full w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-700 shadow-md"
                        >
                            ✕
                        </button>

                        <div
                            className="h-64 md:h-80 bg-cover bg-center rounded-t-3xl"
                            style={{ backgroundImage: `url(${selectedArticle.image})` }}
                        ></div>

                        <div className="p-8">

                            <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
                                {selectedArticle.category}
                            </span>

                            <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
                                {selectedArticle.title}
                            </h3>

                            <div className="text-slate-700 leading-relaxed text-sm md:text-base space-y-4">

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

                                    return (
                                        <p key={index}>
                                            {trimmed}
                                        </p>
                                    );
                                })}

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Artikel;