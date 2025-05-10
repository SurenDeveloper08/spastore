import React from 'react';
import { useState } from 'react';
import './header.css'
import Logo from '../../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import SelectDrop from '../select/selectDrop';
import WhishListIcon from '../../assets/images/whishlistIcon.svg'
import CartIcon from '../../assets/images/cartIcon.svg'
import UserIcon from '../../assets/images/UserIcon.svg'
import Button from '@mui/material/Button';
import { Person2Outlined } from '@mui/icons-material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Nav from '../nav/nav';
const Header = () => {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);

    const SetIsOpenDropDown = (e) => {
        setIsOpenDropDown(e)
        console.log(e);
    };
    return (
        <>

            <header className='headerWraper' >
                <div className="container-fluid">
                    <div className="row">
                        {/* logo start */}
                        <div className="col-sm-2">
                            <img src={Logo} />
                        </div>
                        {/* logo end */}
                        {/* search start */}
                        <div className="col-sm-5">
                            <div className='headerSearch d-flex align-items-center' >
                                {/* <div className='selectDrop cursor position-relative'>
                                    All Categories
                                    <SelectDrop/>
                                </div> */}
                                <div className='search'>
                                    <input type='search' placeholder='Search for items...' />
                                    <SearchIcon className='searchIcon cursor' />
                                </div>
                            </div>
                        </div>
                        {/* search end */}
                        {/* Wishlist start */}
                        <div className="col-sm-5 d-flex align-items-center">
                            <div className='lists ml-auto d-flex align-items-center'>
                                <ul className='list list-inline mb-0 headerTabs'>
                                    <li className='list list-inline-item'>
                                        <span>
                                            <img src={WhishListIcon} />
                                            <span className='badge bg-success rounded-circle'>3</span>
                                            WhishList
                                        </span>
                                    </li>
                                    <li className='list list-inline-item'>
                                        <span>
                                            <img src={CartIcon} />
                                            <span className='badge bg-success rounded-circle'>3</span>
                                            Cart
                                        </span>
                                    </li>
                                    <li className='list list-inline-item'>
                                        <span onClick={() => { SetIsOpenDropDown(!isOpenDropDown) }}>
                                            <img src={UserIcon} />
                                            Account
                                        </span>
                                        {
                                            isOpenDropDown !== false &&

                                            <ul className='dropdownMenu'>
                                                <li ><Button onClick={() => { SetIsOpenDropDown(false) }} className='align-items-center'><Person2Outlined />My Account</Button></li>
                                                <li ><Button onClick={() => { SetIsOpenDropDown(false) }} className='align-items-center'><LocationOnOutlinedIcon />Order Tracking</Button></li>
                                                <li ><Button onClick={() => { SetIsOpenDropDown(false) }} className='align-items-center'><FavoriteBorderOutlinedIcon />My WishList</Button></li>
                                                <li ><Button onClick={() => { SetIsOpenDropDown(false) }} className='align-items-center'><SettingsOutlinedIcon />Settings</Button></li>
                                                <li ><Button onClick={() => { SetIsOpenDropDown(false) }} className='align-items-center'><ExitToAppOutlinedIcon />Sign Out</Button></li>
                                            </ul>
                                        }

                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* login end */}
                    </div>
                </div>
                 <Nav/>
            </header>
           
        </>
    )
}

export default Header