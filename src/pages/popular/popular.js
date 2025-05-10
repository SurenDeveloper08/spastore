import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import '../homeProducts/homeProducts.css'
const Popular = () => {
    const ProductsData = [
        {
            Image: 'https://admin.spaworlduae.com/upload/product/1737449933pro_img_372.jpg ',
            Name: 'Flat Massage Therapy Spa Bed',
            Stock: 'In Stock',
            Rating:2,
            Brand : 'Master',
            Price:2500,
            OldePrice:2999
        },
        {
            Image: 'https://admin.spaworlduae.com/upload/product/1710402117pro_img_321.jpg',
            Name: 'Flat Massage Therapy Spa Bed',
            Stock: 'In Stock',
            Rating:2,
            Brand : 'Master',
            Price:2500,
            OldePrice:2999
        },
        {
            Image: 'https://admin.spaworlduae.com/upload/product/pro_img_375.jpg',
            Name: 'Flat Massage Therapy Spa Bed',
            Stock: 'In Stock',
            Rating:2,
            Brand : 'Master',
            Price:2500,
            OldePrice:2999
        },
        {
            Image: 'https://admin.spaworlduae.com/upload/product/pro_img_376.jpg',
            Name: 'Flat Massage Therapy Spa Bed',
            Stock: 'In Stock',
            Rating:2,
            Brand : 'Master',
            Price:2500,
            OldePrice:2999
        },
        {
            Image: 'https://admin.spaworlduae.com/upload/product/pro_img_377.jpg',
            Name: 'Flat Massage Therapy Spa Bed',
            Stock: 'In Stock',
            Rating:2,
            Brand : 'Master',
            Price:2500,
            OldePrice:2999
        },

    ];
    const [Products, setProducts] = useState(ProductsData);
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
      };
    return (
        <>
        <Slider {...settings} className='prodSlider'>
            {Products.map((products, idx) => (
                <div className='item'>
                    <div className='productThumb'>
                        <div className='imgWrapper'>
                            <img src={products.Image} className='w-100' />
                            <div className='overlay'>
                                <a className='cursor text-right position-absolute top-0 end-0'>
                                    <button className='whishlist-icon'>
                                        <FavoriteBorderOutlinedIcon />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='info'>
                            <span class="d-block catName">{products.Stock}</span>
                            <h4 className='title'><Link>{products.Name}</Link></h4>
                            <Rating name="half-rating-read" defaultValue={products.Rating} size="small" readOnly />
                            <span class="brand d-block text-g">{products.Brand}</span>
                            <div class="d-flex align-items-center mt-3">
                                <div class="d-flex align-items-center w-100">
                                    <span class="price text-g font-weight-bold">
                                    {`AED `+products.Price}
                                    </span>
                                    {/* <span class="oldPrice ml-4">
          AED  5000
          </span> */}
                                </div>
                                <button className='ml-auto'><ShoppingCartOutlinedIcon className='buttonIcon' /><span className='buttonText'>Add</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </Slider>
        </>
    )
}

export default Popular