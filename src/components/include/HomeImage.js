import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../css/home.css'
// 이미지 로컬 경로
import ImgEx from "../include/img/farmMain.jpg";
import LogoWrite from "../include/img/jam_write.svg";
import LogoHome from "../include/img/mdi_farm.svg";
// import generateImageItems from '../function/data.js'; // data.js 파일의 함수를 가져옴
import Loading from '../effect/Loading';
import MyCarousel from './home/Carousel';
import Carousel from 'antd';
import LoadingText from '../effect/LoadingText';
import axios from 'axios'; // Import Axios
import { ApiSeverUrl } from '../../api/DefaultSetup';



const HomeImage = ({ userId }) => {

    const [data, setData] = useState(null);


    // useEffect(() => {
    //     const delay = setTimeout(() => {
    //       fetchData();
    //     }, 3000);

    //     return () => clearTimeout(delay);
    //   }, [])

    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch("https://reqres.in/api/users?page=1")
    //       if (!response.ok) {
    //         throw new Error("응답 없음");
    //       }

    //       const jsonData = await response.json();
    //       setData(jsonData.data);
    //       // console.log(data);

    //     } catch (error) {
    //       console.error("Fetch 도중 오류 발생");
    //     }
    //   }

    useEffect(() => {
        const delay = setTimeout(() => {
            fetchData(userId);
        }, 3000)
        return () => clearTimeout(delay);
    }, [userId])


    const fetchData = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));

        // return await axios.get(ApiSeverUrl + "/farmer/${setindex+1}/farm/?format=json", {
        return await axios.get(`${ApiSeverUrl}/farmer/${userId}/farm/?format=json`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json",
                "ngrok-skip-browser-warning": "true",
            }

        }).then((response) => {
            console.log(response);
            setData(response.data);
            console.log(response.data.Farmer_back_pic.substr(1))
            console.log(decodeURIComponent(response.data.Farmer_back_pic.substr(1)))
        }).catch((error) => {
            console.log(error);
        });
    }

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get("https://9bf2-121-135-149-228.ngrok-free.app/farmin/posts/?format=json", {
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*",
    //                 "content-type": "application/json",
    //                 'ngrok-skip-browser-warning': '69420',
    //             }
    //         });

    //         if (!response.ok) {
    //             throw new Error("응답 없음");
    //         }

    //         const jsonData = await response.json();
    //         setData(jsonData.data);
    //         console.log(data);
    //     } catch (error) {
    //         console.error("Fetch 도중 오류 발생");
    //     }
    // }


    useEffect(() => {
        console.log("데이터: " + data);
    }, [data]);

    return (
        // <!-- 나의농장 -->
        <section id="picture"
            className="picture w-full h-fit rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
            {/* <!-- 나의농장 영역 padding 적용 --> */}
            <article className="px-6 py-5">
                <div className='flex items-center mb-3'>
                    <img className='h-[1.4rem] w-[1.4rem] mr-[6px]' src={LogoHome} alt='logo' />
                    <p id="text_farm" className="font-black text-xl">나의 농장</p>
                    <img className='ml-auto rounded transition duration-150 ease-in-out hover:bg-[#D3DEDA] focus:outline-none focus:ring-0 active:text-primary-700' src={LogoWrite} alt='logo' />
                </div>

                <div className="image-container mb-3 rounded-md">
                    {/* 메인 이미지 */}
                    <MyCarousel userId={userId} />

                    {/* <img id="image_main" className="image h-[300px] rounded-md mb-3 bg-gray-800"
                        src={ImgEx} alt="Sunset in the mountains" /> */}
                </div>
                {/* <!-- Four columns --> */}
                <ul className="flex h-fit">
                    {data !== null ? (
                        // 아이템 붙이는 코드
                        generateImageItems(data)

                    ) : (
                        <Loading />
                    )};

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
