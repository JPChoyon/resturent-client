import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Catagory.css";

// import images
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionHeader from "../../../Component/SectionHeader/SectionHeader";

const Catagory = () => {
  return (
    <>
      <SectionHeader
        title={"ORDER ONLINE"}
        subTitle={"From 11:00am to 10:00pm"}
      ></SectionHeader>
      <Swiper
        slidesPerView={4}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10 font "
      >
        <SwiperSlide>
          <img src={slide1} alt="slider images" />
          <p className="uppercase font-normal text-4xl text-white -mt-16 text-center">
            salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slider images" />
          <p className="uppercase font-normal text-4xl text-white -mt-16 text-center">
            soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slider images" />
          <p className="uppercase font-normal text-4xl text-white -mt-16 text-center">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slider images" />
          <p className="uppercase font-normal text-4xl text-white -mt-16 text-center">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slider images" />
          <p className="uppercase font-normal text-4xl text-white -mt-16 text-center">
            salad
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Catagory;
