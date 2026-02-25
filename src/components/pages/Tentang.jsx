import { useEffect, useRef, useState } from "react";

import pendudukIcon from "../../assets/icons/penduduk.png";
import lokasiIcon from "../../assets/icons/lokasi.png";
import gunungIcon from "../../assets/icons/gunung.png";
import luasIcon from "../../assets/icons/luas.png";
import budayaIcon from "../../assets/icons/budaya.png";
import batikIcon from "../../assets/icons/batik.png";
import purbakalaIcon from "../../assets/icons/purbakala.png";

import img1 from "../../assets/img/gambar3.png";
import img2 from "../../assets/img/gambar.png";
import img3 from "../../assets/img/gambar4.png";
import img4 from "../../assets/img/gambar2.png";

const Tentang = () => {
    const tentangRef = useRef(null);
    const budayaRef = useRef(null);

    const [showTentang, setShowTentang] = useState(false);
    const [showBudaya, setShowBudaya] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === tentangRef.current && entry.isIntersecting) {
                        setShowTentang(true);
                    }
                    if (entry.target === budayaRef.current && entry.isIntersecting) {
                        setShowBudaya(true);
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
            {/* ================= TENTANG ================= */}
            <section
                ref={tentangRef}
                className="bg-white py-24 px-6 md:px-12"
            >
                <div className="max-w-7xl mx-auto">

                    <div
                        className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${showTentang
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-4 py-1 rounded-full">
                            Profil Lengkap
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5">
                            Mengenal Deskripsi <br />
                            <span className="text-blue-600">
                                Kabupaten Brebes Selatan
                            </span>
                        </h2>

                        <p className="text-slate-600 mt-4 leading-relaxed">
                            Menjelajahi sisi hijau Kabupaten Brebes: Harmoni alam pegunungan yang asri,
                            destinasi eksotis, serta hangatnya kearifan lokal masyarakatnya.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        <div
                            className={`transition-all duration-700 delay-200 ${showTentang
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                                }`}
                        >
                            <h3 className="text-lg font-semibold text-blue-600 mb-4">
                                Permata Tersembunyi di Kaki Gunung Slamet
                            </h3>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                Kabupaten Brebes Selatan merupakan kawasan dataran tinggi yang menawarkan lanskap
                                memukau, mulai dari hamparan kebun teh yang berkabut hingga jajaran air terjun
                                tersembunyi. Wilayah ini menjadi rumah bagi perpaduan budaya yang unik dan
                                alam yang masih terjaga keasliannya.
                            </p>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg mb-6 shadow-sm">
                                <strong className="block text-amber-800 mb-2">
                                    Visi Pariwisata Berkelanjutan
                                </strong>
                                <p className="text-amber-700 text-sm leading-relaxed">
                                    Berfokus pada pengembangan ekowisata yang menyeimbangkan pelestarian
                                    alam dengan pemberdayaan ekonomi masyarakat lokal untuk masa depan yang lebih hijau.
                                </p>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-8">
                                Kawasan ini terus bertransformasi menjadi destinasi unggulan di Jawa Tengah
                                melalui pengembangan pariwisata berbasis komunitas, memastikan setiap
                                kunjungan memberikan dampak positif bagi lingkungan dan warga setempat.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <InfoCard icon={lokasiIcon} title="Brebes Selatan" subtitle="Jawa Tengah, Indonesia" />
                                <InfoCard icon={gunungIcon} title="± 500 - 2.050 mdpl" subtitle="Ketinggian Wilayah" />
                                <InfoCard icon={luasIcon} title="± 815,64 km²" subtitle="Luas Wilayah Total" />
                                <InfoCard icon={pendudukIcon} title="± 580.000 Jiwa" subtitle="Total Populasi" />
                            </div>
                        </div>

                        <div
                            className={`grid grid-cols-2 gap-5 transition-all duration-700 delay-300 ${showTentang ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            <div
                                className="col-span-2 h-72 rounded-2xl bg-cover bg-center shadow-xl hover:scale-105 transition"
                                style={{ backgroundImage: `url(${img1})` }}
                            ></div>

                            <div
                                className="h-48 rounded-2xl bg-cover bg-center shadow-lg hover:scale-105 transition"
                                style={{ backgroundImage: `url(${img2})` }}
                            ></div>

                            <div
                                className="h-48 rounded-2xl bg-cover bg-center shadow-lg hover:scale-105 transition"
                                style={{ backgroundImage: `url(${img3})` }}
                            ></div>

                            <div
                                className="col-span-2 h-72 rounded-2xl bg-cover bg-center shadow-xl hover:scale-105 transition"
                                style={{ backgroundImage: `url(${img4})` }}
                            ></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= BUDAYA ================= */}
            <section
                ref={budayaRef}
                className="bg-white py-24 px-6 md:px-12"
            >
                <div className="max-w-6xl mx-auto text-center">

                    <h3
                        className={`text-2xl font-semibold text-blue-600 mb-14 transition-all duration-700 ${showBudaya
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        Sorotan Budaya & Ikon Lokal
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        <BudayaCard
                            show={showBudaya}
                            icon={batikIcon}
                            title="Batik Salem (Manggar)"
                            desc="Warisan budaya takbenda kebanggaan Salem dengan motif khas yang lahir dari perpaduan filosofi alam dan sejarah lokal masyarakat setempat."
                        />

                        <BudayaCard
                            show={showBudaya}
                            icon={budayaIcon}
                            title="Akulturasi Dua Budaya"
                            desc="Keunikan harmoni antara tradisi Jawa dan Sunda yang tercermin dalam bahasa, kesenian, serta adat istiadat masyarakat di wilayah selatan."
                        />

                        <BudayaCard
                            show={showBudaya}
                            icon={purbakalaIcon}
                            title="Jejak Purbakala"
                            desc="Menyimpan kekayaan sejarah dunia melalui temuan fosil fauna purba di wilayah Tonjong dan Bumiayu yang menjadi pusat edukasi arkeologi."
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

const InfoCard = ({ icon, title, subtitle }) => (
    <div className="group bg-white rounded-2xl p-6 shadow-md border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center cursor-pointer">

        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-xl transition">
            <img
                src={icon}
                alt=""
                className="w-7 h-7"
            />
        </div>

        <strong className="block text-slate-900 text-base mb-1">
            {title}
        </strong>

        <small className="text-slate-500 text-sm">
            {subtitle}
        </small>
    </div>
);

const BudayaCard = ({ show, icon, title, desc }) => (
    <div
        className={`group bg-white p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
    >
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-xl transition">
            <img src={icon} alt="" className="w-7 h-7" />
        </div>

        <h4 className="font-semibold text-slate-900 mb-2">
            {title}
        </h4>

        <p className="text-slate-600 text-sm leading-relaxed">
            {desc}
        </p>
    </div>
);

export default Tentang;