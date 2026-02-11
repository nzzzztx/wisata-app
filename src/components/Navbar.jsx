import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            const nav = document.querySelector(".navbar");
            if (!nav) return;

            nav.classList.toggle("scrolled", window.scrollY > 60);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <span className="logo-highlight">Brebsel</span>GO
                </div>

                <button
                    className={`navbar__toggle ${isOpen ? "active" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`navbar__menu ${isOpen ? "active" : ""}`}>
                    <Link to="/">Beranda</Link>
                    <Link to="/deskripsi">Destinasi</Link>
                    <Link to="/kategori">Kategori</Link>
                    <Link to="/destinasi">Artikel</Link>
                    <Link to="/kontak">Kontak</Link>
                </nav>

                {/* <div className="navbar__action">
                    <button className="navbar__btn">Jelajahi</button>
                </div> */}
            </div>
        </header>
    );
};

export default Navbar;
