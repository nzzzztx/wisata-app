import Hero from "../Hero";
import Tentang from "./Tentang";
import Unggulan from "./Unggulan";
import Kategori from "./Kategori";
import Lokasi from "./Lokasi";
import Artikel from "./navbar/Artikel/Artikel";
import Kontak from "./navbar/Kontak";

const Home = () => {
    return (
        <>
            <Hero />
            <Tentang />
            <Unggulan />
            <Kategori />
            <Lokasi />
            <Artikel />
            <Kontak />
        </>
    );
};

export default Home;