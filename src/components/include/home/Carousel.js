import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import '../../css/home.css';
import axios from 'axios';
import { ApiSeverUrl } from '../../../api/DefaultSetup';

const MyCarousel = ({ userId }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(userId);
    }, [userId])

    const fetchData = async () => {
        return await axios.get(`${ApiSeverUrl}/farmer/${userId}/farm/?format=json`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json",
                "ngrok-skip-browser-warning": "true",
            }

        }).then((response) => {
            console.log(response);
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Carousel dots={true} pauseOnHover={true}>
            {data.map((item, index) => (
                <div key={item.Farm_id}>
                    <img className='image max-h-[900px] h-[300px] rounded-md bg-gray-800'
                        src={item.Farm_pics} alt={`home_image_${index}`} />
                </div>
            ))}
        </Carousel>
    )
};

export default MyCarousel;
