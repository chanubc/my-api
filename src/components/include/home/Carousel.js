import React from 'react';
import { Carousel } from 'antd';
import '../../css/home.css';

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
    rounded: '10px',
    
};

const MyCarousel = () => {

    return (
        <>
            <Carousel autoplay className="rounded-xl"> 
                <div>
                    <img className='image h-[300px] rounded-md  bg-gray-800' src='' alt='home_image'/>
                </div>
                <div>
                    <img className='image h-[300px] rounded-md  bg-gray-800' src='' alt='home_image'/>
                </div>
                <div>
                    <img className='image h-[300px] rounded-md  bg-gray-800' src='' alt='home_image'/>
                </div>
                <div>
                    <img className='image h-[300px] rounded-md  bg-gray-800' src='' alt='home_image'/>
                </div>
                

                {/* <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div> */}
            </Carousel >

        </>
    )
};

export default MyCarousel;