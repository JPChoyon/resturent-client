import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import vector from '../../../assets/icon/Vector.jpg'
import SectionHeader from "../../../Component/SectionHeader/SectionHeader";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, [setTestimonials]);
  return (
    <div className="my-20">
      <SectionHeader title={"TESTIMONIALS"} subTitle={'What Our Client Says'}></SectionHeader>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide className="text-center md:px-20" key={testimonial._id}>
            <Rating
              className="text-4xl "
              placeholderRating={testimonial.rating}
              emptySymbol={
                <AiOutlineStar className="icon text-red-400 "></AiOutlineStar>
              }
              placeholderSymbol={
                <AiFillStar className="icon text-red-400"></AiFillStar>
              }
              fullSymbol={
                <AiFillStar className="icon text-yellow-400"></AiFillStar>
              }
            />
            <div className="flex justify-center py-6">
              <img src={vector} alt="" />
              <img src={vector} alt="" />
            </div>
            <p className="py-5">{testimonial.details}</p>
            <p className="text-3xl text-yellow-500 mb-10">{testimonial.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
