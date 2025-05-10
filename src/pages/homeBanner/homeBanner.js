import React from 'react'
import './homeBanner.css'
const HomeBanner = () => {
    const BannerData = [
        {
            Image: 'https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg',
            Id: '1'
        },
        {
            Image: 'https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg',
            Id: '2'
        },
        {
            Image: 'https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg',
            Id: '3'
        },
        {
            Image: 'https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg',
            Id: '3'
        },
    ]
    return (
        <div className='bannerSection'>
            <div className='container-fluid'>
                <div className='row'>
                    {BannerData.map((data, index) => (
                        <div className='col'>
                            <div className='box'>
                                <img src={data.Image} className='w-100 transition' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default HomeBanner