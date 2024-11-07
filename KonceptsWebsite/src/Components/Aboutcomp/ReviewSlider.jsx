import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { useRef } from 'react';

import stivejobs from "../../assets/Images/reviewslider/stive_jobs.jpg";
import billgates from "../../assets/Images/reviewslider/bill_gates.jpg";
import joel from "../../assets/Images/reviewslider/joel_spolsky.jpeg";
import neil from "../../assets/Images/reviewslider/neil_amstrong.jpg";
import jim from "../../assets/Images/reviewslider/jim_highsmith.jpg";

const SliderReview = [
  { id: 1, review: '"The best way to get a project done faster is to start sooner."', pic: jim, author: "Jim Highsmith", des: "software engineer, agile software development advocate" },
  { id: 2, review: '"Design adds value faster than it adds costs."', pic: joel, author: "Joel Spolsky", des: "co-founder of Stack Overflow, software engineer" },
  { id: 3, review: '"Your most unhappy customers are your greatest source of learning."', pic: billgates, author: "Bill Gates", des: "co-founder of Microsoft Corporation, software developer" },
  { id: 4, review: '"Research is creating new knowledge."', pic: neil, author: "Neil Armstrong", des: "American astronaut, aeronautical engineer" },
  { id: 5, review: '"Design is not just what it looks like and feels like. Design is how it works."', pic: stivejobs, author: "Steve Jobs", des: "Apple founder, business magnate" },
];

const ReviewSlider = () => {
  const swiperRef = useRef(null);
  const handleClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      onClick={handleClick}
      className='w-full h-full cursor-pointer slidercontainer'
      modules={[FreeMode, Pagination, Autoplay, Navigation]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {SliderReview.map((item, index) => (
        <SwiperSlide className="w-full h-full flex justify-center items-center px-20" key={index}>
          <div className='flex gap-y-40 flex-col justify-between'>
            <div className='w-full'>
              <h1 className='text-2xl'>{item.review}</h1>
            </div>
            <div className='flex gap-3'>
              <div className='w-14 h-14'>
                <img src={item.pic} className='w-full h-full' alt={item.author} />
              </div>
              <div>
                <p className='mb-0 font-bold'>{item.author}</p>
                <p>{item.des}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
