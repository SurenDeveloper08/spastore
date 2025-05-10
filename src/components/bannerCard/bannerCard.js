import React from 'react'
import './bannerCard.css'
import { Link } from 'react-router-dom'
const bannerCard = ({ image, title, brand, price, inStock }) => {
    return (
        <div className="d-flex flex-column align-items-center me-4 flex-shrink-0">
            <Link to="/product">
            <div className="b-card overflow-hidden shadow-sm category-img">
                <img
                    src={image}
                    alt={title}
                    className="w-100 h-100 object-fit-cover"
                />
            </div>
            </Link>
            <h5 className="mt-4 text-center">{title}</h5>
        </div>
    )
}

export default bannerCard