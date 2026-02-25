import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

import Home from "../components/pages/Home";
import Destinasi from "../components/pages/navbar/Destinasi/Destinasi";
import DestinasiDetail from "../components/pages/navbar/Destinasi/DestinasiDetail";
import Artikel from "../components/pages/navbar/Artikel/Artikel";
import ArtikelPage from "../components/pages/navbar/Artikel/ArtikelPage";
import Lokasi from "../components/pages/Lokasi";
import Kontak from "../components/pages/navbar/Kontak";

const AppRoute = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <ScrollToTop />

                <main className="flex-1 pt-16">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/destinasi" element={<Destinasi />} />
                        <Route path="/destinasi/:id" element={<DestinasiDetail />} />
                        <Route path="/artikel" element={<Artikel />} />
                        <Route path="/artikel/list-artikel" element={<ArtikelPage />} />
                        <Route path="/lokasi" element={<Lokasi />} />
                        <Route path="/kontak" element={<Kontak />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default AppRoute;