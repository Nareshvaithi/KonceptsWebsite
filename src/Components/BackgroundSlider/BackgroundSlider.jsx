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
        <Carousel.Caption>
          <h3 style={{color:"red"}}>First slide label</h3>
          <p style={{color:"red"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='slide2' text="Second slide">
        <Carousel.Caption>
          <h3 style={{color:"red"}}>Second slide label</h3>
          <p style={{color:"red"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='slide3' text="Third slide">
        <Carousel.Caption>
          <h3 style={{color:"red"}}>Third slide label</h3>
          <p style={{color:"red"}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
};

export default BackgroundSlider
