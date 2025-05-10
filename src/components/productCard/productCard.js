import React from 'react'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './productCard.css'
import { Link } from 'react-router-dom';
const ProductCard = ({ image, title, brand, price, inStock }) => (
    <div className="card h-100 shadow-sm position-relative">
        <Link to="/product">
        <div className="position-relative">
        <div class="badge bg-g text-white position-absolute" >New</div>
            <img
                variant="top"
                src={image}
                alt={title}
                style={{ height: "auto", width: "100%", objectFit: "cover" }}
            />

            <div className="position-absolute top-0 end-0 p-2" style={{ zIndex: 2 }}>
                <IconButton aria-label="add to shopping cart" size="large">
                    <FavoriteBorderOutlinedIcon />
                </IconButton>
            </div>
        </div>

        <div className="d-flex flex-column p-3">
            <div className={inStock ? `mb-3 text-g` : `mb-3 text-danger`}>
                {inStock ? "In Stock" : "Out of Stock"}
            </div>
            <h6 className="card-title mb-1">{title}</h6>
            <small className="text-muted">{brand}</small>
            <div className="d-flex justify-content-between align-items-center mt-auto">
                <span className="fw-bold text-g">AED {price}</span>
                <IconButton aria-label="add to shopping cart" size="large">
                    <AddShoppingCartIcon />
                </IconButton>
            </div>
        </div>
        </Link>
    </div>
);

export default ProductCard;