import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Flowimg1 from "../../assets/Images/flowimg1.png"
import Flowimg2 from "../../assets/Images/flowimg2.png"
import Flowimg3 from "../../assets/Images/flowimg3.png"
import Flowimg4 from "../../assets/Images/flowimg4.png"
import Flowimg5 from "../../assets/Images/flowimg5.png"
import Flowimg6 from "../../assets/Images/flowimg6.png"
function Portfolioslider() {
  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
    responsive:[
      {
        breakpoint: 1000,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        },
      },
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",}}
        onClick={onClick}
      />
    );
  }
  return (
    <div className="slider-container">
      <Slider className="" {...settings}>
        <div className="w-[300px] h-[300px]">
          <img src={Flowimg1} className="w-full h-full" alt="" />
        </div>
        <div className="w-[300px] h-[300px]">
          <img src={Flowimg2} className="w-full h-full" alt="" />
        </div>
        <div className="w-[300px] h-[300px]">
          <img src={Flowimg3} className="w-full h-full" alt="" />
        </div>
        <div className="w-[300px] h-[300px]">
          <img src={Flowimg4} className="w-full h-full" alt="" />
        </div>
        <div className="w-[300px] h-[300px]">
          <img src={Flowimg5} className="w-full h-full" alt="" />
        </div>
        <div className="w-[300px] h-[300px]">
          <img src={Flowimg6} className="w-full h-full" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Portfolioslider;