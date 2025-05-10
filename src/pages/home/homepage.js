import React from 'react'
import HomeSlider from '../homeSlider/homeSlider'
import CatSlider from '../catSlider/catSlider'
import HomeBanner from '../homeBanner/homeBanner'
import './homePage.css'
import Footerwrapper from '../../components/footerwrapper/footerWrapper'
import NewsLetter from '../../components/subscribe/newsLetter'
import HomeAd from '../homeAd/homeAd'
import Featured from '../featured/featured'
import Popular from '../popular/popular.js'
import SeasonProducts from '../seasonProducts/seasonProducts.js'
const Homepage = () => {

  return (
    <div>
      <HomeSlider />
      <CatSlider />
      {/* featured products */}
      <section className='homeProducts'>
        <div className='container-fluid'>
          <div className='d-flex align-items-center'>
            <h2 className='hd mb-6 mt-0' >Featured Products</h2>
            <ul className='list list-inline ml-auto filterTab'>
              <li className='list-inline-item'>
                <a className='cursor'>Spa World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Salon World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Recreation World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Hotel World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Sauno Products</a>
              </li>
            </ul>
          </div>
          <div className='row'>
            <Featured />
          </div>
        </div>
      </section>
      {/* featured products */}
      <HomeBanner />
      {/* popular products */}
      <section className='homeProducts'>
        <div className='container-fluid'>
          <div className='d-flex align-items-center'>
            <h2 className='hd mb-8' >Popular Products</h2>
            <ul className='list list-inline ml-auto filterTab'>
              <li className='list-inline-item'>
                <a className='cursor'>Spa World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Salon World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Recreation World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Hotel World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Sauno Products</a>
              </li>
            </ul>
          </div>
          <div className='row'>
            <Featured />
          </div>
        </div>
      </section>
      {/* popular products */}
      {/* season products */}
      <section className='homeProducts'>
        <div className='container-fluid '>
          <div className='slick-container bg-r'>
            <div className='d-flex align-items-center p-4'>
              <h2 className='hd mb-0 mt-0' >Season Products</h2>
              {/* <ul className='list list-inline ml-auto filterTab'>
                <li className='list-inline-item'>
                  <a className='cursor'>Spa World</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>Salon World</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>Recreation World</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>Hotel World</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>Sauno Products</a>
                </li>
              </ul> */}
            </div>
            <div className='row px-4'>
              <SeasonProducts />
            </div>
          </div>
        </div>
      </section>
      {/* season products */}
      {/* deals products */}
      <section className='homeProducts'>
        <div className='container-fluid'>
          <div className='d-flex align-items-center'>
            <h2 className='hd mb-0 mt-0' >Best Deals</h2>
            <ul className='list list-inline ml-auto filterTab'>
              <li className='list-inline-item'>
                <a className='cursor'>Spa World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Salon World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Recreation World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Hotel World</a>
              </li>
              <li className='list-inline-item'>
                <a className='cursor'>Sauno Products</a>
              </li>
            </ul>
          </div>
          <div className='row'>
            <Featured />
          </div>
        </div>
      </section>
      {/* deals products */}
      <HomeAd />
      <Footerwrapper />
      <NewsLetter />
    </div>
  )
}


export default Homepage