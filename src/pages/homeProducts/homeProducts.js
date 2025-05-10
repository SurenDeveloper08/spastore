import React from 'react'
import './homeProducts.css'
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const HomePoducts = () => {
  return (
    <div className='productThumb'>
      <div className='imgWrapper'>
        <img src='https://admin.spaworlduae.com/upload/product/pro_img_163.jpg' className='w-100' />
        <div className='overlay'>
          <a className='cursor text-right position-absolute top-0 end-0'>
          <button className='whishlist-icon'>
          <FavoriteBorderOutlinedIcon />
            </button> 
          </a>
        </div>
      </div>
      <div className='info'>
        <span class="d-block catName">stock</span>
        <h4 className='title'><Link>Flat Massage Therapy Spa Bed</Link></h4>
        <Rating name="half-rating-read" defaultValue={4} size="small" readOnly />
        <span class="brand d-block text-g">Master</span>
        <div class="d-flex align-items-center mt-3">
          <div class="d-flex align-items-center w-100">
            <span class="price text-g font-weight-bold">
              AED  4500
            </span>
            {/* <span class="oldPrice ml-4">
          AED  5000
          </span> */}
          </div>
          <button className='ml-auto'><ShoppingCartOutlinedIcon className='buttonIcon' /><span className='buttonText'>Add</span></button>
        </div>
      </div>
    </div>
  )
}

export default HomePoducts