import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const footerRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setShow(true);
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) observer.observe(footerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-300 pt-20 pb-10 px-6 md:px-12 overflow-hidden"
        >
            {/* Decorative Blur */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600 opacity-20 blur-3xl rounded-full"></div>

            <div
                className={`max-w-7xl mx-auto relative z-10 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                {/* Grid */}
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Brebsel<span className="text-blue-400">GO</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Platform informasi wisata terbaik untuk menjelajahi
                            keindahan alam, budaya, dan destinasi unggulan di
                            Kabupaten Brebes Selatan.
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Navigasi</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-blue-400 transition"
                                >
                                    Beranda
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/destinasi"
                                    className="hover:text-blue-400 transition"
                                >
                                    Destinasi
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/lokasi"
                                    className="hover:text-blue-400 transition"
                                >
                                    Lokasi
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/artikel/list-artikel"
                                    className="hover:text-blue-400 transition"
                                >
                                    Artikel
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/kontak"
                                    className="hover:text-blue-400 transition"
                                >
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Email: info@brebselgo.id</li>
                            <li>Telp: +62 812-3456-7890</li>
                            <li>Brebes Selatan, Jawa Tengah</li>
                        </ul>
                    </div>

                    {/* Sosial */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Ikuti Kami</h4>

                        <div className="flex gap-6">

                            <div className="flex flex-col items-center gap-2 cursor-pointer group">
                                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png"
                                        alt="Facebook"
                                        className="w-5 h-5"
                                    />
                                </div>
                                <span className="text-xs text-gray-400 group-hover:text-blue-400 transition">
                                    Facebook
                                </span>
                            </div>

                            <div className="flex flex-col items-center gap-2 cursor-pointer group">
                                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-pink-500 group-hover:scale-110 transition-all duration-300">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
                                        alt="Instagram"
                                        className="w-5 h-5"
                                    />
                                </div>
                                <span className="text-xs text-gray-400 group-hover:text-pink-400 transition">
                                    Instagram
                                </span>
                            </div>

                            <div className="flex flex-col items-center gap-2 cursor-pointer group">
                                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/3938/3938026.png"
                                        alt="Youtube"
                                        className="w-5 h-5"
                                    />
                                </div>
                                <span className="text-xs text-gray-400 group-hover:text-red-400 transition">
                                    Youtube
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
                    © 2026 nzzzztx. Semua hak cipta dilindungi.
                </div>
            </div>
        </footer>
    );
};

export default Footer;