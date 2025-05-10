import React from 'react'
import './catSlider.css'
import { useState } from "react";
import Slider from "react-slick";
import Spa from '../../assets/images/categories/spa.png'
import Hotel from '../../assets/images/categories/hotel.png'
import Salon from '../../assets/images/categories/saloon.png'
import Recreation from '../../assets/images/categories/recreation.png'
import Sauna from '../../assets/images/categories/sauna.png'
const CatSlider = () => {
    const CategoriesData = [
        {
            Image: Spa,
            Name: 'Spa',
        },
        {
            Image: Hotel,
            Name: 'Hotel',
        },
        {
            Image: Salon,
            Name: 'Salon',
        },
        {
            Image: Recreation,
            Name: 'Recreation',
        },
        {
            Image: Sauna,
            Name: 'Sauna',
        },

    ];
    const [Categories, setCategories] = useState(CategoriesData);
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 2,
    };
    return (
        <div className='catSliderSection'>
            <div className='container-fluid'>
                <h2 className="hd mb-8">Shop by Category</h2>
                <Slider {...settings} className='cat_slider_Main mb-5' >
                    {Categories.map((category, idx) => (
                        <div
                            key={idx}
                            className="d-flex flex-column align-items-center me-4 flex-shrink-0"
                        >
                            <div className="rounded-circle overflow-hidden shadow-sm category-img">
                                <img
                                    src={category.Image}
                                    alt={category.Name}
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>
                            <h5 className="mt-2 text-center">{category.Name}</h5>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default CatSlider
