import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import Flowimg1 from "../../assets/Images/flowimg1.png";
import Flowimg2 from "../../assets/Images/flowimg2.png";
import Flowimg3 from "../../assets/Images/flowimg3.png";
import Flowimg4 from "../../assets/Images/flowimg4.png";
import Flowimg5 from "../../assets/Images/flowimg5.png";
import Flowimg6 from "../../assets/Images/flowimg6.png";

const Portfolioslider = () => {
  const Portfoliodata = [
    { id: 1, title: "Project one", img: Flowimg1, details: "Project 1" },
    { id: 2, title: "Project two", img: Flowimg2, details: "Project 2" },
    { id: 3, title: "Project three", img: Flowimg3, details: "Project 3" },
    { id: 4, title: "Project four", img: Flowimg4, details: "Project 4" },
    { id: 5, title: "Project five", img: Flowimg5, details: "Project 5" },
    { id: 6, title: "Project six", img: Flowimg6, details: "Project 6" },
  ];

  return (
    <div className="">
      <div className="container">
        <h1 className="font-Heading text-2xl md:text-4xl text-center">Showcase</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {Portfoliodata.map(({ id, title, img, details }) => {
            const { ref, inView } = useInView({
              triggerOnce: false, // Allow animation to trigger each time it comes into view
              threshold: 0.5, // Trigger when 50% of the element is in view
            });

            return (
              <div
                key={id}
                ref={ref} // Attach the ref to the div
                style={{ backgroundImage: `url(${img})` }}
                className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden"
              >
                {/* Overlay with Animation */}
                <div
                  className={`absolute bottom-0 right-0 w-1/2 h-full bg-black/20 bg-opacity-30 flex items-center justify-center p-4 transform transition-transform duration-700 ease-in-out ${
                    inView ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <div className="text-white text-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-sm">{details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolioslider;
