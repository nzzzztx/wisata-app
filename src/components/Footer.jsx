import { useEffect, useRef } from "react";
import "../assets/css/footer.css";

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const footer = footerRef.current;
        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    footer.classList.add("is-visible");
                    observer.unobserve(footer);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    return (
        <footer ref={footerRef} className="footer">
            <div className="footer__container">
                © 2026 nzzzztx. Semua hak cipta dilindungi.
            </div>
        </footer>
    );
};

export default Footer;
