import { useEffect, useRef, useState } from "react";

const MapsSection = () => {
    const sectionRef = useRef(null);
    const [show, setShow] = useState(false);

    const address =
        "P2V4+GJ9, Jl. Kawedanan, Kampungbaru Munggang, Kalierang, Kec. Bumiayu, Kabupaten Brebes, Jawa Tengah 52273, Indonesia";

    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
        address
    )}&output=embed`;

    const openMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
    )}`;

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
            className="relative min-h-screen flex items-center 
               py-28 px-6 md:px-12 
               bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100"
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div
                    className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                        Lokasi Brebes Selatan
                    </h2>

                    <p className="text-slate-600 mt-4 leading-relaxed">
                        Temukan lokasi wilayah Brebes Selatan dan jelajahi berbagai destinasi
                        menarik yang tersebar di kawasan pegunungan dan perbukitan asri.
                    </p>
                </div>

                {/* Map Card */}
                <div
                    className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 delay-200 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <iframe
                        title="Brebes Selatan Map"
                        src={mapUrl}
                        className="w-full h-[450px] md:h-[550px] border-0"
                        loading="lazy"
                    />

                    {/* Overlay Info Card */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-blue-100">
                        <h4 className="font-semibold text-blue-700 mb-2">
                            Brebes Selatan
                        </h4>

                        <p className="text-sm text-slate-600 mb-4">
                            Wilayah dataran tinggi di Jawa Tengah dengan keindahan alam,
                            air terjun, waduk, dan perkebunan teh yang memukau.
                        </p>

                        <a
                            href={openMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition group"
                        >
                            Buka di Google Maps
                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MapsSection;