import "../assets/css/hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <div className="hero__location">
                    <span className="hero__location-icon">📍</span>
                    Kabupaten Brebes Selatan
                </div>

                <h1 className="hero__title">
                    Jelajahi Keindahan <br /> Brebes Selatan
                </h1>

                <p className="hero__subtitle">
                    Temukan destinasi wisata, budaya, dan kearifan lokal
                    yang memukau di Kabupaten Brebes Selatan
                </p>

                <div className="hero__search">
                    <input placeholder="Cari destinasi wisata..." />
                    <button>Cari</button>
                </div>
            </div>
            <div className="hero__overlay" />

        </section>
    );
};

export default Hero;
