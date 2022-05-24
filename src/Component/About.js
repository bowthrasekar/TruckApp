import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "./Header";
function About() {
    return <div>
        <Header />
        <div style={{ margin: "2% 20%" }}>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div style={{ marginLeft: "0%" }}><img src="/images/slider1.jpg" style={{ width: "100%", height: "400px" }} /></div></SwiperSlide>
                <SwiperSlide><div style={{ marginLeft: "0%" }}><img src="/images/slider2.jpg" style={{ width: "100%", height: "400px" }} /></div></SwiperSlide>
                <SwiperSlide><div style={{ marginLeft: "0%" }}><img src="/images/slider3.jpg" style={{ width: "100%", height: "400px" }} /></div></SwiperSlide>
                {/* <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
        <div style={{ margin: "2% 20%" }}>
            <div style={{ fontWeight: 'bold', color: "#fcc94d", marginBottom: "3%" }}>
                Bullet Truck is Porter comes to the Manchester of South India and brings hassle free logistics solutions. With its vast fleet of vehicles from Tata Ace, Tata 407, Pickup 8 feet, 3 wheelers & 2 wheelers among other vehicles, Porter tech enabled interventions help both businesses and individuals in transporting and moving goods within or around the city, effectively & efficiently.
            </div>
            <div style={{ fontWeight: 'bold', color: "#fcc94d", marginBottom: "3%" }}>
                The vehicles are suited for small/medium sized businesses as well and Porter also offers an enterprise solution for businesses to look into. The 2W service would help send goods within the city instantly. With Porter, you receive verified drivers, real-time location information & transparent pricing model. Be it for transporting textiles, textile machinery, auto components, steel, aluminium, pumps and motors or shifting house, furniture and luggage, Porter has a solution for all. Just download the app and rent a vehicle.
            </div>
        </div>
    </div>
}

export default About