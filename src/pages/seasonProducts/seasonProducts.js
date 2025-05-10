import React from 'react'
import './seasonProducts.css'
import Slider from "react-slick";
import BannerCard from '../../components/bannerCard/bannerCard';
const seasonProducts = ({ image, title, brand, price, inStock }) => {
    const ProductsData = [
        {
            Image: 'https://admin.spaworlduae.com/upload/product/1737449933pro_img_372.jpg ',
            Title: 'Spa Bed',
            Stock: true,
            Rating: 2,
            Brand: 'Master',
            Price: 2500,
            OldePrice: 2999
        },
        {
            Image: 'https://admin.spaworlduae.com/upload/product/1710402117pro_img_321.jpg',
            Title: 'Flat Massage  Bed',
            Stock: false,
            Rating: 2,
            Brand: 'Master',
            Price: 2500,
            OldePrice: 2999
        },
        {
            Image: 'https://admin.spaworlduae.com/upload/product/pro_img_377.jpg',
            Title: 'Massage Therapy Bed',
            Stock: true,
            Rating: 2,
            Brand: 'Master',
            Price: 2500,
            OldePrice: 2999
        },
        {
            Image: 'https://admin.spaworlduae.com/upload/product/pro_img_376.jpg',
            Title: 'Spa Bed',
            Stock: true,
            Rating: 2,
            Brand: 'Master',
            Price: 2500,
            OldePrice: 2999
        },
        {
            Image: 'https://admin.spaworlduae.com/upload/product/pro_img_377.jpg',
            Title: 'Flat Spa Bed',
            Stock: true,
            Rating: 2,
            Brand: 'Master',
            Price: 2500,
            OldePrice: 2999
        },
        {
            Image: 'https://admin.spaworlduae.com/upload/product/1737449933pro_img_372.jpg ',
            Title: ' Massage Spa Bed',
            Stock: true,
            Rating: 2,
            Brand: 'Master',
            Price: 2500,
            OldePrice: 2999
        },
        {
            Image: 'https://admin.spaworlduae.com/upload/product/1710402117pro_img_321.jpg',
            Title: 'Therapy Spa Bed',
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
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    };
  return (
    <Slider {...settings}>
    {ProductsData.map((products, idx) => (
        <div key={idx} className="px-2">
            <BannerCard image={products.Image} title={products.Title} price={products.Price} brand={products.Brand} inStock={products.Stock} />
        </div>
    ))}
</Slider>
  )
}

export default seasonProducts