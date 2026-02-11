import "../../assets/css/unggulan.css";
import starIcon from "../../assets/icons/star.png";
import rantocanyonImg from "../../assets/img/rantocanyon.png";
import kaliguaImg from "../../assets/img/kaligua.png";
import wadukpenjalinImg from "../../assets/img/waduk.png";

const Unggulan = () => {
    const data = [
        {
            title: "Agrowisata Kaligua",
            desc: "Perkebunan teh peninggalan Belanda dengan udara sejuk dan pemandangan Gunung Slamet yang megah.",
            location: "Paguyangan, Brebes Selatan",
            time: "3-5 jam",
            rating: "4.8",
            category: "Agrowisata",
            img: kaliguaImg,
        },
        {
            title: "Ranto Canyon",
            desc: "Destinasi body rafting menantang menyusuri sungai di antara tebing bebatuan purba yang eksotis.",
            location: "Salem, Brebes Selatan",
            time: "2-4 jam",
            rating: "4.7",
            category: "Wisata Adrenalin",
            img: rantocanyonImg,
        },
        {
            title: "Waduk Penjalin",
            desc: "Hamparan air yang tenang dengan latar perbukitan, tempat terbaik untuk menikmati senja yang damai.",
            location: "Paguyangan, Brebes Selatan",
            time: "1-2 jam",
            rating: "4.5",
            category: "Wisata Air",
            img: wadukpenjalinImg,
        },
    ];

    return (
        <section className="unggulan">
            <div className="unggulan__container">
                <div className="unggulan__header">
                    <h2 className="unggulan__title">Destinasi Unggulan</h2>
                    <p className="unggulan__subtitle">
                        Jelajahi tempat-tempat wisata terbaik yang paling sering dikunjungi.
                    </p>
                </div>

                <div className="unggulan__grid">
                    {data.map((item, index) => (
                        <div key={index} className="unggulan__card">
                            <div
                                className="unggulan__image"
                                style={{ backgroundImage: `url(${item.img})` }}
                            >
                                <span className="unggulan__badge">{item.category}</span>
                            </div>

                            <div className="unggulan__content">
                                <h3>{item.title}</h3>
                                <p className="unggulan__desc">{item.desc}</p>

                                <div className="unggulan__meta">
                                    <span>{item.location}</span>
                                    <span>{item.time}</span>
                                    <span className="unggulan__rating">
                                        <img src={starIcon} alt="Star Rating" /> {item.rating}</span>
                                </div>

                                <button className="unggulan__btn">
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Unggulan;
