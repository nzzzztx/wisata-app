import { useEffect, useRef, useState } from "react";

const Kontak = () => {
    const sectionRef = useRef(null);
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const options = ["Informasi", "Keluhan"];

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
            <div
                className={`max-w-4xl mx-auto transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                        Hubungi Kami
                    </h2>

                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Punya pertanyaan, ingin bekerja sama, atau membutuhkan informasi
                        lebih lanjut mengenai destinasi di Brebes Selatan? Silakan kirim
                        pesan melalui form di bawah ini.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-10">

                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        Kirim Pesan
                    </h3>

                    <p className="text-slate-500 mb-8 text-sm">
                        Isi form berikut dan tim kami akan menghubungi Anda dalam 24 jam.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Nama */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Nama Lengkap *
                            </label>
                            <input
                                type="text"
                                placeholder="Masukkan nama lengkap"
                                className="w-full rounded-xl px-4 py-3 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Telepon */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                No. Telepon *
                            </label>
                            <input
                                type="text"
                                placeholder="08xxxxxxxxxx"
                                className="w-full rounded-xl px-4 py-3 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                    </div>

                    {/* Email */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            placeholder="nama@email.com"
                            className="w-full rounded-xl px-4 py-3 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Subjek */}
                    <div className="mt-6 relative">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Subjek *
                        </label>

                        <div
                            onClick={() => setOpen(!open)}
                            className="w-full rounded-xl px-4 py-3 border border-slate-200 bg-white shadow-sm cursor-pointer flex justify-between items-center hover:border-blue-400 transition"
                        >
                            <span className={selected ? "text-slate-800" : "text-slate-400"}>
                                {selected || "Pilih Subjek"}
                            </span>

                            <svg
                                className={`w-4 h-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {open && (
                            <div className="absolute w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden z-50 animate-dropdown">
                                {options.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setSelected(item);
                                            setOpen(false);
                                        }}
                                        className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Pesan */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Pesan *
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Sampaikan pertanyaan atau kebutuhan Anda..."
                            className="w-full rounded-xl px-4 py-3 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        ></textarea>
                    </div>

                    {/* BUTTON */}
                    <div className="mt-8">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300">
                            Kirim Pesan
                        </button>
                    </div>

                    <p className="text-xs text-slate-400 mt-4 text-center">
                        Dengan mengirim pesan ini, Anda menyetujui bahwa data pribadi Anda
                        akan digunakan untuk keperluan komunikasi layanan wisata kami.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Kontak;