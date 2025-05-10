import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import '../homeProducts/homeProducts.css'
import ProductCard from '../../components/productCard/productCard';
const ProductsData = [
    {
        Image: 'https://admin.spaworlduae.com/upload/product/1737449933pro_img_372.jpg ',
        Title: 'Flat Massage Therapy Spa Bed',
        Stock: true,
        Rating: 2,
        Brand: 'Master',
        Price: 2500,
        OldePrice: 2999
    },
    {
        Image: 'https://admin.spaworlduae.com/upload/product/1710402117pro_img_321.jpg',
        Title: 'Flat Massage Therapy Spa Bed',
        Stock: false,
        Rating: 2,
        Brand: 'Master',
        Price: 2500,
        OldePrice: 2999
    },
    {
        Image: 'https://admin.spaworlduae.com/upload/product/pro_img_377.jpg',
        Title: 'Flat Massage Therapy Spa Bed',
        Stock: true,
        Rating: 2,
        Brand: 'Master',
        Price: 2500,
        OldePrice: 2999
    },
    {
        Image: 'https://admin.spaworlduae.com/upload/product/pro_img_376.jpg',
        Title: 'Flat Massage Therapy Spa Bed',
        Stock: true,
        Rating: 2,
        Brand: 'Master',
        Price: 2500,
        OldePrice: 2999
    },
    {
        Image: 'https://admin.spaworlduae.com/upload/product/pro_img_377.jpg',
        Title: 'Flat Massage Therapy Spa Bed',
        Stock: true,
        Rating: 2,
        Brand: 'Master',
        Price: 2500,
        OldePrice: 2999
    },
    {
        Image: 'https://admin.spaworlduae.com/upload/product/1737449933pro_img_372.jpg ',
        Title: 'Flat Massage Therapy Spa Bed',
        Stock: true,
        Rating: 2,
        Brand: 'Master',
        Price: 2500,
        OldePrice: 2999
    },
    {
        Image: 'https://admin.spaworlduae.com/upload/product/1710402117pro_img_321.jpg',
        Title: 'Flat Massage Therapy Spa Bed',
        Stock: false,
        Rating: 2,
        Brand: 'Master',
        Price: 2500,
        OldePrice: 2999
    },
    {
        Image: 'https://admin.spaworlduae.com/upload/product/pro_img_377.jpg',
        Title: 'Flat Massage Therapy Spa Bed',
        Stock: true,
        Rating: 2,
        Brand: 'Master',
        Price: 2500,
        OldePrice: 2999
    },

];
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
};
const Featured = () => {
      return (
        <>
            <Slider {...settings}>
                {ProductsData.map((products, idx) => (
                    <div key={idx} className="px-2">
                        <ProductCard image={products.Image} title={products.Title} price={products.Price} brand={products.Brand} inStock={products.Stock} />
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default Featured