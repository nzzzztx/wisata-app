import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // // Navbar jadi solid kalau bukan halaman home
    const solidNavbar = !isHome || scrolled;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50
            bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#1e3a8a]
            transition-all duration-300
            ${scrolled ? "shadow-2xl backdrop-blur-md" : ""}
            `}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold cursor-pointer">
                    <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                        Brebsel
                    </span>
                    <span className="text-white">
                        GO
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-white transition-colors duration-300">
                    <Link to="/" className="relative group">Beranda</Link>
                    <Link to="/destinasi" className="relative group">Destinasi</Link>
                    <Link to="/lokasi" className="relative group">Lokasi</Link>
                    <Link to="/artikel/list-artikel" className="relative group">Artikel</Link>
                    <Link to="/kontak" className="relative group">Kontak</Link>
                </nav>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`w-6 h-[2px] transition-all duration-300 ${solidNavbar ? "bg-black" : "bg-white"
                            } ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}
                    ></span>

                    <span
                        className={`w-6 h-[2px] transition-all duration-300 ${solidNavbar ? "bg-black" : "bg-white"
                            } ${isOpen ? "opacity-0" : ""}`}
                    ></span>

                    <span
                        className={`w-6 h-[2px] transition-all duration-300 ${solidNavbar ? "bg-black" : "bg-white"
                            } ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-slate-700 font-medium">
                    <Link to="/" onClick={() => setIsOpen(false)}>Beranda</Link>
                    <Link to="/destinasi" onClick={() => setIsOpen(false)}>Destinasi</Link>
                    <Link to="/lokasi" onClick={() => setIsOpen(false)}>Lokasi</Link>
                    <Link to="/artikel/list-artikel" onClick={() => setIsOpen(false)}>Artikel</Link>
                    <Link to="/kontak" onClick={() => setIsOpen(false)}>Kontak</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;