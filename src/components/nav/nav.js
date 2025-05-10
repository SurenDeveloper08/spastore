import React from 'react'
import './nav.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
const Nav = () => {
    return (
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row position-relative'>
                    <div className='col-sm-2 part1'>
                        {/* <Button className='bg-g text-white catTab'>
                            Browse Alll Categories
                        </Button> */}
                    </div>
                    <div className='col-sm-10 part2 position-static'>
                        <nav>
                            <ul className='list list-inline mb-8'>
                                <li className='list-inline-item'>
                                    <Button><Link>Spa World<KeyboardArrowDownIcon /></Link></Button>
                                </li>
                                <li className='list-inline-item'>

                                    <Button><Link>Salon World<KeyboardArrowDownIcon /></Link></Button>
                                </li>
                                <li className='list-inline-item'>

                                    <Button><Link>Recreation<KeyboardArrowDownIcon /></Link></Button>
                                </li>
                                <li className='list-inline-item'>

                                    <Button><Link>Hotel World<KeyboardArrowDownIcon /></Link></Button>
                                
                                    {/* <div className='dropdownMenu'>
                                        <ul>
                                           <li><Button><Link to="/about">Contact</Link></Button></li>

                                            <li><Button><Link to="/about"> My Account</Link></Button></li>

                                            <li><Button> <Link to="/about">Login</Link></Button></li>


                                            <li><Button><Link to="/about">Forgot password</Link></Button></li>

                                            <li><Button><Link to="/about">Reset password</Link></Button></li>

                                            <li><Button><Link to="/about">Purchase Guide</Link></Button></li>

                                            <li><Button><Link to="/about">Privacy Policy</Link></Button></li>

                                            <li><Button><Link to="/about">Terms of Service</Link></Button></li>

                                            <li><Button><Link to="/about">404 Page</Link></Button></li>

                                        </ul>
                                    </div> */}
                                    </li>
                                    <li className='list-inline-item'>
                                    <Button><Link>FAQ</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link>About Us</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link>Contact Us</Link></Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav