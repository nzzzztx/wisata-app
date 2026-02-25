import { useState } from "react";
import { useNavigate } from "react-router-dom";

import bgImg from "../assets/img/gambar.png"

const Hero = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (!search.trim()) return;

        navigate(`/destinasi?q=${encodeURIComponent(search)}`);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center text-white">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        `url(${bgImg})`,
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

            <div className="relative z-10 max-w-4xl px-6 text-center">

                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6 border border-white/30">
                    <span>📍</span>
                    <span>Kabupaten Brebes Selatan, Jawa Tengah</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fadeUp">
                    Jelajahi Keindahan <br />
                    <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        Brebes Selatan
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                    Temukan destinasi wisata, budaya, dan kearifan lokal
                    yang memukau di Kabupaten Brebes Selatan.
                </p>

                <form
                    onSubmit={handleSearch}
                    className="flex flex-col md:flex-row items-center bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-3 gap-3 max-w-2xl mx-auto shadow-2xl"
                >
                    <input
                        type="text"
                        placeholder="Cari destinasi wisata..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 w-full bg-transparent text-white placeholder-gray-300 outline-none px-4 py-3"
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold w-full md:w-auto"
                    >
                        Cari
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Hero;