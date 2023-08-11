import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../css/home.css'
// 이미지 로컬 경로
import ImgEx from "../img/farmMain.jpg";
import LogoWrite from "../img/jam_write.svg";
import LogoHome from "../img/mdi_farm.svg";
// import generateImageItems from '../function/data.js'; // data.js 파일의 함수를 가져옴
import Loading from '../effect/Loading';
import LoadingText from '../effect/LoadingText';


const HomeImage = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        const delay = setTimeout(() => {
            fetchData();
        }, 3000);

        return () => clearTimeout(delay);
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("https://reqres.in/api/users?page=1")
            if (!response.ok) {
                throw new Error("응답 없음");
            }

            const jsonData = await response.json();
            setData(jsonData.data);
            console.log(data);

        } catch (error) {
            console.error("Fetch 도중 오류 발생");
        }
    }

    useEffect(() => {
        console.log("데이터: " + data);
    }, [data]);

    return (
        // <!-- 나의농장 -->
        <section id="picture"
            className="picture w-full h-fit rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
            {/* <!-- 나의농장 영역 padding 적용 --> */}
            <article className="px-6 py-5">
                <div className='flex items-center justify-center mb-3'>
                    <img className='h-[1.4rem] w-[1.4rem] mr-[6px]' src={LogoHome} alt='logo' />
                    <p id="text_farm" className="font-black text-xl">나의 농장</p>
                    <img className='ml-auto' src={LogoWrite} alt='logo' />
                </div>

                <div className="image-container">
                    <img id="image_main" className="image h-[300px] rounded-md mb-3 bg-gray-800"
                        src={ImgEx} alt="Sunset in the mountains" />
                </div>
                {/* <!-- Four columns --> */}
                <ul className="flex h-fit">
                    {data.length !== 0 ? (
                        generateImageItems(data)
                    ) : (

                        <Loading />
                    )}
                </ul>
            </article>
        </section>
    );
    // === html 코드


    // item 붙이는 코드
    function generateImageItems(data) {
        return data.slice(0, 4).map((user, index) => (
            <li key={index} className={`w-1/4 bg-gray-500 ${index !== 3 ? 'mr-3' : ''} rounded-[5px]`}>
                <img className="image-item" src={user.avatar} alt="User Avatar" />
            </li>
        ));

    };
}

export default HomeImage;
