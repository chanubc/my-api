import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ImgTop from "../img/left_top.png";
import LogoProfile from "../img/nameIcon.svg";
import LogoWrite from "../img/jam_write.svg";
import LoadingText from '../effect/LoadingText';
import { Skeleton } from 'antd';
import axios from 'axios'; // Import Axios



import '../css/home.css'
import Loading from '../effect/Loading';

const Left = () => {
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
            // console.log(data);

        } catch (error) {
            console.error("Fetch 도중 오류 발생");
        }
    }

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get("https://9bf2-121-135-149-228.ngrok-free.app/farmin/posts/?format=json")

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




    return (
        <>
            <aside id="left_card" className="w-[22%] h-screen mr-4">
                {/* <!-- 내부카드 --> */}
                <section className="w-full rounded-[20px] h-[85%] overflow-hidden shadow-lg bg-[#FAFAFA]">

                    {data.length !== 0 ? (
                        <>
                            {/* 상단 부 이미지 */}
                            <section className="relative">
                                <div className="h-36 bg-neutral-700 rounded-t-[20px]">
                                    <img className="w-full h-full" src={ImgTop} alt="Sunset in the mountains" />
                                </div>
                                <div id="custom-ha" className='w-fit h-fit inline-block'>
                                    <img className="bg-white custom-ha w-[7.5rem] h-[7.5rem] rounded-[50%] ring-4 ring-gray-50" src={ImgTop} alt="Bordered avatar" />
                                </div>
                            </section>

                            {/* 중반 부 프로필 */}
                            <article className="px-6 py-4 mt-[3.25rem] alignment-center">
                                <div className='flex'>
                                    <img className='w-fit h-fit' src={LogoProfile} alt='logo' />
                                    {/* <p className="font-black text-xl ml-1">프로필</p> */}
                                    <p className="font-bold text-xl ml-1">
                                        {data[0].first_name} {data[0].last_name}
                                    </p>

                                </div>
                                <p className="font-semibold text-xl text-[#8F8F8F] mt-1">
                                    010-1234-5678
                                </p>
                            </article>

                            {/* 하단 부 글 */}
                            <article className="px-6 py-2">
                                <div className='flex items-center justify-center mb-3'>
                                    <p className="font-bold text-lg text-[#00A884]">한줄소개</p>
                                    <img className='ml-auto rounded transition duration-150 ease-in-out hover:bg-[#D3DEDA] focus:outline-none focus:ring-0 active:text-primary-700'
                                        src={LogoWrite} alt='logo' />
                                </div>
                                <p className="text-[#666666] text-base font-medium">
                                    맛있고 건강한 채소를 키워요! 오늘도 논으로 밭으로 향한다</p>
                                <p className="text-[#666666] text-base font-medium mt-3">
                                    반갑습니다 저는 고령에서 벼와 콩을 재배하고 있습니다.</p>
                            </article>
                        </>
                    ) : (
                        <LoadingText />

                        // <Skeleton active />

                    )}


                </section>
            </aside >


        </>
    );
};

export default Left;