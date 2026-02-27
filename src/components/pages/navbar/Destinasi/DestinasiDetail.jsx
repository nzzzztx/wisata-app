import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import starIcon from "../../../../assets/icons/star.png";
import { dataDetailfull } from "../../../data/destinasifull";

const DestinasiDetail = () => {

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const destination = dataDetailfull.find(
        item => item.id.toLowerCase() === id?.toLowerCase()
    );

    if (!destination) {
        return <div className="p-20 text-center">Destinasi tidak ditemukan</div>;
    }

    return (
        <section className="bg-white pb-20">

            {/* HERO */}
            <div
                className="h-[320px] md:h-[450px] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${destination.image})` }}
            >
                <div className="absolute inset-0 bg-black/50 flex items-end">
                    <div className="p-6 md:p-10 text-white max-w-5xl mx-auto w-full">
                        <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs">
                            {destination.category}
                        </span>

                        <h1 className="text-2xl md:text-4xl font-bold mt-4">
                            {destination.title}
                        </h1>

                        <div className="flex items-center gap-4 mt-2 text-sm text-white/90">
                            <span>{destination.location}</span>

                            <div className="flex items-center gap-1 text-amber-400 font-medium">
                                <img src={starIcon} alt="rating" className="w-4 h-4" />
                                {destination.rating}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-5xl mx-auto px-6 mt-12">

                {/* ABOUT */}
                <div className="mb-12">
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                        Tentang Destinasi
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        {destination.description}
                    </p>
                </div>

                {/* FACILITIES */}
                <div className="mb-12">
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
                        Fasilitas
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {destination.facilities?.map((facility, index) => (
                            <div
                                key={index}
                                className="bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm font-medium text-center"
                            >
                                ✓ {facility}
                            </div>
                        ))}
                    </div>
                </div>

                {/* PRACTICAL INFO */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">

                    {/* INFO CARD */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-xl">
                        <h3 className="text-lg font-semibold mb-6">
                            Informasi Praktis
                        </h3>

                        <div className="space-y-4 text-sm md:text-base">
                            <p><strong>Harga:</strong> {destination.price}</p>
                            <p><strong>Jam Operasional:</strong> {destination.hours}</p>
                            <p><strong>Durasi Kunjungan:</strong> {destination.time}</p>
                            <p><strong>Lokasi:</strong> {destination.location}</p>
                        </div>
                    </div>

                    {/* HIGHLIGHT */}
                    <div className="bg-slate-50 rounded-2xl p-8 shadow-md">
                        <h3 className="text-lg font-semibold text-slate-900 mb-6">
                            Yang Menarik
                        </h3>

                        <ul className="space-y-3 text-slate-600 text-sm md:text-base">
                            {destination.highlight?.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* GOOGLE MAPS */}
                <div className="mb-16">
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
                        Lokasi di Peta
                    </h2>

                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        {destination.maps && (
                            <iframe
                                src={destination.maps}
                                width="100%"
                                height="400"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                                title="Google Maps"
                            ></iframe>
                        )}
                    </div>
                </div>

                {/* BACK BUTTON */}
                <div className="text-center">
                    <Link
                        to="/destinasi"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
                    >
                        Kembali ke Daftar Destinasi
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default DestinasiDetail;