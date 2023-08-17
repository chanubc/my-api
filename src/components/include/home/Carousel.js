import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import '../../css/home.css';

const MyCarousel = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const delay = setTimeout(() => {
            fetchData();
        }, 1000);

        return () => clearTimeout(delay);
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("https://reqres.in/api/users?page=1")

            if (!response.ok) {
                throw new Error("응답 없음");
            }

            const jsonData = await response.json();
            setData(jsonData.data.slice(0, 4));
            // console.log(data);

        } catch (error) {
            console.error("Fetch 도중 오류 발생");
        }
    }

    return (
        <Carousel  dots={true} pauseOnHover={true}>
            {data.map((item, index) => (
                <div key={item.id}>
                    <img className='image h-[300px] rounded-md bg-gray-800'
                        src={item.avatar} alt={`home_image_${index}`} />
                </div>
            ))}
        </Carousel>
    )
};

export default MyCarousel;
