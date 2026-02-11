import { useEffect, useRef } from "react";
import "../../assets/css/tentang.css";
import pendudukIcon from "../../assets/icons/penduduk.png";
import lokasiIcon from "../../assets/icons/lokasi.png";
import gunungIcon from "../../assets/icons/gunung.png";
import luasIcon from "../../assets/icons/luas.png";
import budayaIcon from "../../assets/icons/budaya.png";
import batikIcon from "../../assets/icons/batik.png";
import purbakalaIcon from "../../assets/icons/purbakala.png";

const Tentang = () => {
    const tentangRef = useRef(null);
    const budayaRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (tentangRef.current) observer.observe(tentangRef.current);
        if (budayaRef.current) observer.observe(budayaRef.current);

        return () => observer.disconnect();
    }, []);


    return (
        <>
            <section className="tentang" ref={tentangRef}>
                <div className="tentang__header">
                    <span className="tentang__badge">Profil Lengkap</span>

                    <h2 className="tentang__title">
                        Mengenal Deskripsi <br />
                        <span>Kabupaten Brebes Selatan</span>
                    </h2>

                    <p className="tentang__subtitle">
                        Menjelajahi sisi hijau Kabupaten Brebes: Harmoni alam pegunungan yang asri,
                        destinasi eksotis, serta hangatnya kearifan lokal masyarakatnya.
                    </p>
                </div>

                <div className="tentang__container">
                    <div className="tentang__content">
                        <h3 className="tentang__heading">
                            Permata Tersembunyi di Kaki Gunung Slamet
                        </h3>

                        <p className="tentang__text">
                            Kabupaten Brebes Selatan merupakan kawasan dataran tinggi yang menawarkan lanskap
                            memukau, mulai dari hamparan kebun teh yang berkabut hingga jajaran air terjun
                            tersembunyi. Wilayah ini menjadi rumah bagi perpaduan budaya yang unik dan
                            alam yang masih terjaga keasliannya.
                        </p>

                        <div className="tentang__highlight">
                            <strong>Visi Pariwisata Berkelanjutan</strong>
                            <p>
                                Berfokus pada pengembangan ekowisata yang menyeimbangkan pelestarian
                                alam dengan pemberdayaan ekonomi masyarakat lokal untuk masa depan yang lebih hijau.
                            </p>
                        </div>

                        <p className="tentang__text">
                            Kawasan ini terus bertransformasi menjadi destinasi unggulan di Jawa Tengah
                            melalui pengembangan pariwisata berbasis komunitas, memastikan setiap
                            kunjungan memberikan dampak positif bagi lingkungan dan warga setempat.
                        </p>

                        <div className="tentang__info">
                            <div className="tentang__info-card">
                                <img src={lokasiIcon} alt="Lokasi" />
                                <strong>Brebes Selatan</strong>
                                <small>Jawa Tengah, Indonesia</small>
                            </div>

                            <div className="tentang__info-card">
                                <img src={gunungIcon} alt="Ketinggian" />
                                <strong>± 500 - 2.050 mdpl</strong>
                                <small>Ketinggian Wilayah</small>
                            </div>

                            <div className="tentang__info-card">
                                <img src={luasIcon} alt="Luas" />
                                <strong>± 815,64 km²</strong>
                                <small>Luas Wilayah Total</small>
                            </div>

                            <div className="tentang__info-card">
                                <img src={pendudukIcon} alt="Populasi" />
                                <strong>± 580.000 Jiwa</strong>
                                <small>Total Populasi</small>
                            </div>
                        </div>
                    </div>

                    <div className="tentang__gallery">
                        <div className="tentang__img besar"></div>
                        <div className="tentang__img satu"></div>
                        <div className="tentang__img dua"></div>
                        <div className="tentang__img tiga"></div>
                    </div>
                </div>
            </section>

            <section className="budaya" ref={budayaRef}>
                <div className="budaya__container">
                    <h3 className="budaya__title">Sorotan Budaya & Ikon Lokal</h3>

                    <div className="budaya__grid">
                        <div className="budaya__card">
                            <div className="budaya__icon">
                                <img src={batikIcon} alt="Batik Salem" />
                            </div>
                            <h4>Batik Salem (Manggar)</h4>
                            <p>
                                Warisan budaya takbenda kebanggaan Salem dengan motif khas yang lahir
                                dari perpaduan filosofi alam dan sejarah lokal masyarakat setempat.
                            </p>
                        </div>

                        <div className="budaya__card">
                            <div className="budaya__icon">
                                <img src={budayaIcon} alt="Kesenian Tradisional" />
                            </div>
                            <h4>Akulturasi Dua Budaya</h4>
                            <p>
                                Keunikan harmoni antara tradisi Jawa dan Sunda yang tercermin dalam
                                bahasa, kesenian, serta adat istiadat masyarakat di wilayah selatan.
                            </p>
                        </div>

                        <div className="budaya__card">
                            <div className="budaya__icon">
                                <img src={purbakalaIcon} alt="Purbakala" />
                            </div>
                            <h4>Jejak Purbakala</h4>
                            <p>
                                Menyimpan kekayaan sejarah dunia melalui temuan fosil fauna purba
                                di wilayah Tonjong dan Bumiayu yang menjadi pusat edukasi arkeologi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tentang;
