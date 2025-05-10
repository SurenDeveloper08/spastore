import React from 'react'
import '../home/homePage.css'
import Featured from '../featured/featured'
const relatedProducts = () => {
  return (
    <div className='homeProducts'>
        <div className='container-fluid'>
          <div className='d-flex align-items-center'>
            <h2 className='hd mb-8'>Related Products</h2>
          </div>
          <div className='row'>
            <Featured />
          </div>
        </div>
      </div>
  )
}

export default relatedProducts