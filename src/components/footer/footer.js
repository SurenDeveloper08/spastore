import React from 'react'
import './footer.css'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const footer = () => {
    return (
        <footer className='container-fluid'>
            <div className='homeFooter'>
                <section className='footer-1 py-4'>
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                SPA STORE
                            </h6>
                            <p className="text-black font-weight-normal">
                                Spa Store is a trusted eCommerce platform offering top-quality spa products and professional equipment to salons, spas, and hotels across Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain.
                            </p>
                        </div>
                       
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 footer-title">Products</h6>
                            <p>
                                <a className="text-black font-weight-normal">Spa World</a>
                            </p>
                            <p>
                                <a className="text-black font-weight-normal">Salon World</a>
                            </p>
                            <p>
                                <a className="text-black font-weight-normal">Recreation World</a>
                            </p>
                            <p>
                                <a className="text-black font-weight-normal">Hotel World</a>
                            </p>
                            <p>
                                <a className="text-black font-weight-normal">Sauno World</a>
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 footer-title">
                                Information
                            </h6>
                            <p>
                                <a className="text-black font-weight-normal">About Us</a>
                            </p>
                            <p>
                                <a className="text-black font-weight-normal">Contact Us</a>
                            </p>
                            <p>
                                <a className="text-black font-weight-normal">Support Center</a>
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 footer-title">
                                Useful links
                            </h6>
                            <p>
                                <a className="text-black font-weight-normal">Account</a>
                            </p>
                            <p>
                                <a className="text-black font-weight-normal">Delivery Information</a>
                            </p>
                            <p>
                                <a className="text-black font-weight-normal">Privacy Policy</a>
                            </p>
                            <p>
                                <a className="text-black font-weight-normal">Terms & Conditions</a>
                            </p>
                        </div>
                       

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 footer-title">Contact</h6>
                            <p><FmdGoodOutlinedIcon className='footer-icon'/> Abu Dhabi, UAE</p>
                            <p><EmailOutlinedIcon className='footer-icon' /> info@gmail.com</p>
                            <p><CallOutlinedIcon className='footer-icon' /> + 01 234 567 88</p>
                        </div>
                    </div>
                </section> 
                <hr className="w-100 clearfix" />
                <section className="pt-0 footer-2">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-10 text-md-start">
                            <div className="p-3">
                                © 2020 Copyright:
                                <a className="text-black font-weight-normal" href="https://mdbootstrap.com/"
                                > SpaStore</a>
                            </div>
                        </div>

                        <div className="col-md-5 col-lg-2 ml-lg-0 text-right text-md-end d-flex">
                            <a
                                className="btn btn-outline-light btn-floating m-1 text-black font-weight-normal"
                                role="button"
                            ><InstagramIcon className='footer-icon' /></a>

                            <a
                                className="btn btn-outline-light btn-floating m-1 text-black font-weight-normal"
                                role="button"
                            ><YouTubeIcon className='footer-icon' /></a>
                            <a
                                className="btn btn-outline-light btn-floating m-1 text-black font-weight-normal"
                                role="button"
                            ><FacebookOutlinedIcon className='footer-icon' /></a>
                            <a
                                className="btn btn-outline-light btn-floating m-1 text-black font-weight-normal"
                                role="button"
                            ><LinkedInIcon className='footer-icon' /></a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default footer