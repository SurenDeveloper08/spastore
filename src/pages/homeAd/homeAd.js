import React from 'react'
import Slider from "react-slick";
import './homeAd.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeAd = () => {
    var settings = {
        dots: true,
        infinite: false,
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
           <img src='https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=20' className='w-100' />
          </div>
          <div className='item'>
           <img src='https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=20' className='w-100' />
          </div>
          <div className='item'>
           <img src='https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=20' className='w-100' />
          </div>
        </Slider>
      </div>
    </section> 
//     https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=20
  )
}

export default HomeAd