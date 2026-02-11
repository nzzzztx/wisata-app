import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tentang from "../components/pages/Tentang";
import Unggulan from "../components/pages/Unggulan";
import Kategori from "../components/pages/Kategori";

import Footer from "../components/Footer";

const AppRoute = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Tentang />
            <Unggulan />
            <Kategori />

            <Routes>
                {/* <Route path="/" element={<div id="beranda"></div>} />
                <Route path="/deskripsi" element={<div id="deskripsi">Deskripsi</div>} />
                <Route path="/kategori" element={<div id="kategori">Kategori</div>} />
                <Route path="/destinasi" element={<div id="destinasi">Destinasi</div>} />
                <Route path="/kontak" element={<div id="kontak">Kontak</div>} /> */}
            </Routes>
            <Footer />
        </>
    );
};

export default AppRoute;
