import React from 'react'
import Slider from "react-slick";
import './homeSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from '../../assets/images/Group 109.jpg'
const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:true
  };
  return (
    <section className='homeSlider'>
      <div className='container-fluid position-relative'>
        <Slider {...settings} className='home_slider_Main' >
          <div className='item'>
           <img src={Banner1} className='w-100' />
          </div>
          <div className='item'>
           <img src={Banner1} className='w-100' />
          </div>
          <div className='item'>
           <img src={Banner1} className='w-100' />
          </div>
        </Slider>
      </div>
    </section> 
  )
}

export default HomeSlider