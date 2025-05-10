import React from 'react'
import './footerwrapper.css'
import PriceTag from '../../assets/images/price-tag.png'
import HighQuality from '../../assets/images/quality.png'
import Delivery from '../../assets/images/delivery.png'
import Support from '../../assets/images/support.png'
const FooterWrapper = () => {
  return (
    <div className='footerWrapper'>
      <div className='footerBoxes'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <div className='box d-flex align-items-center w-100'>
                <span><img src={HighQuality}></img></span>
                <div className='info'>
                  <h4>Premium Quality</h4>
                  <p>Best quality guaranteed
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='box d-flex align-items-center w-100'>
                <span><img src={Delivery}></img></span>
                <div className='info'>
                  <h4>Fast Delivery</h4>
                  <p>All GCC Countries
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='box d-flex align-items-center w-100'>
                <span><img src={PriceTag}></img></span>
                <div className='info'>
                  <h4>Best Price</h4>
                  <p>Save more
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='box d-flex align-items-center w-100'>
                <span><img src={Support}></img></span>
                <div className='info'>
                  <h4>Customer Support</h4>
                  <p>24/7 customer support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterWrapper