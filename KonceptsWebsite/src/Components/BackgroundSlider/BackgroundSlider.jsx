import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./../BackgroundSlider/slider.css";


function BackgroundSlider() {
  return (
    <>
    <div className='slider-section'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className='slide1' text="First slide">
        <Carousel.Caption></Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='slide2' text="Second slide">
        <Carousel.Caption></Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='slide3' text="Third slide">
        <Carousel.Caption></Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
};

export default BackgroundSlider
