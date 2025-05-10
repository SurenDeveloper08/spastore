import React from 'react'
import './newsLetter.css'
import SendIcon from '@mui/icons-material/Send';
import NewsLetterImg from '../../assets/images/massage.png'
const NewsLetter = () => {
  return (
    <section class="newsLetterSection">
      <div class="container-fluid">
        <div class="box d-flex align-items-center">
          <div class="info">
            <h2>Your One-Stop Destination  <br />for Spa Products</h2>
            <p>We deliver all over the GCC countries.
            </p><br />
            <div class="newsLetterBanner">
              <SendIcon />
              <input type='text' placeholder='Your email address' />
              <button className='bg-g' >Subscribe</button>
            </div>
          </div>
          <div class="img">
            <img src={NewsLetterImg} class="w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter