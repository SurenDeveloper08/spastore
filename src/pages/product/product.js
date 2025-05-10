import React from 'react'
import './product.css'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import RelatedProducts from '../relatedProducts/relatedProducts'
import Slider from "react-slick";
import ProductGallary from '../../components/productGallary/productGallary';
const product = () => {
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
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <div>
            {/* <!-- Product section--> */}
            <div class="container-fluid py-5">
                <div class="my-5">
                    <div class="row">
                        <div class="col-md-6">
                            <ProductGallary />
                        </div>
                        <div class="col-md-6">
                            <div class="small mb-1">SKU: BST-498</div>
                            <div class="details">
						<h3 class="product-title">Multifunctional Massage Stone, Oil, and Steam Heating System</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description">Streamline your wellness treatments with the Multifunctional Massage Stone, Oil, and Steam Heater. Designed for efficiency and versatility, it delivers precise heating for massage stones, oils, and steam, ensuring a superior experience for your clients.</p>
						<h4 class="price">Price: <span className='text-g'>AED 180</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 class="sizes">sizes:
							{/* <span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span> */}
						</h5>
						<h5 class="colors">colors:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span class="color green"></span>
							<span class="color blue"></span>
						</h5>
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">add to cart</button>
							{/* <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button> */}
						</div>
					</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Related items section--> */}
            <div class="py-5 bg-light">
                <div class="container-fluid mt-5">
                    <RelatedProducts />
                </div>
            </div>
        </div>
    )
}

export default product
