import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../css/home.css'
// 이미지 로컬 경로
import ImgEx from "../img/farmMain.jpg";
import LogoWrite from "../img/jam_write.svg";
import LogoHome from "../img/mdi_farm.svg";
// import generateImageItems from '../function/data.js'; // data.js 파일의 함수를 가져옴
import Loading from '../effect/Loading';
import MyCarousel from './home/Carousel';
import Carousel from 'antd';
import LoadingText from '../effect/LoadingText';
import axios from 'axios'; // Import Axios
import { ApiSeverUrl } from '../../api/DefaultSetup';



const HomeImage = ({ userId }) => {

    const [data, setData] = useState(null);
    const [name, setName] = useState(null);


    useEffect(() => {
        if (userId !== undefined || userId !== null) {
            fetchData(userId);
            changeName(userId);
        }
    }, [userId])


    const fetchData = async () => {

        // return await axios.get(ApiSeverUrl + "/farmer/${setindex+1}/farm/?format=json", {
        return await axios.get(`${ApiSeverUrl}/farmer/${userId}/farm/?format=json`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json",
                "ngrok-skip-browser-warning": "true",
            }

        }).then((response) => {
            setData(response.data);

        }).catch((error) => {
            console.log(error);
        });
    }

    const changeName = (userId) => {
        switch (userId) {
            case 1:
                return setName('김지현');
            case 2:
                return setName('배찬우');
            case 3:
                return setName('노선재');
            case 4:
                return setName('오수현');
            default:
                return setName('나'); // userId가 매칭되지 않을 경우 아무 작업도 하지 않음
        }
    };




    return (
        // <!-- 나의농장 -->
        <section id="picture"
            className="picture w-full h-fit rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
            {/* <!-- 나의농장 영역 padding 적용 --> */}
            <article className="px-6 py-5">
                <div className='flex items-center mb-3'>
                    <img className='h-[1.4rem] w-[1.4rem] mr-[6px]' src={LogoHome} alt='logo' />
                    <p id="text_farm" className="font-black text-xl">{name}의 농장</p>
                    <img className='ml-auto rounded transition duration-150 ease-in-out hover:bg-[#D3DEDA] focus:outline-none focus:ring-0 active:text-primary-700' src={LogoWrite} alt='logo' />
                </div>

                <div className="image-container mb-3 rounded-md">
                    {/* 메인 이미지 */}
                    <MyCarousel userId={userId} />

                </div>
                {/* <!-- Four columns --> */}
                <ul className="flex h-fit">
                    {data !== null ? (
                        // 아이템 붙이는 코드
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
        return data.slice(0, 4).map((item, index) => (
            <li key={index} className={`w-1/4 bg-gray-500 ${index !== 3 ? 'mr-3' : ''} rounded-[5px]`}>
                <img className="image-item" src={item.Farm_pics} alt="User Avatar" />
                {/* <div className='teest'>{agent.title}</div> */}
            </li>
        ));

    };

}

export default HomeImage;
