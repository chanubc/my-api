import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ImgTop from "../img/left_top.png";
import LogoProfile from "../img/nameIcon.svg";
import LogoWrite from "../img/jam_write.svg";
import LoadingText from '../effect/LoadingText';
import { Skeleton } from 'antd';
import axios from 'axios'; // Import Axios
import { ApiSeverUrl } from '../../api/DefaultSetup';



import '../css/home.css'
import Loading from '../effect/Loading';

const Left = ({ userId }) => {
    const [data, setData] = useState();
    // const [userId, setUserId] = useState(1); // 초기 userId를 1로 설정


    useEffect(() => {

        

        if (userId === null) {
            userId = 1
        }

        fetchData(userId);


        console.log(userId + " in left")
    }, [userId]); // userId가 변경될 때마다 fetchData 실행

    // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     fetchData();
  //   }, 3000);

  //   return () => clearTimeout(delay);
  // }, [])


    const fetchData = async () => {
        // return await axios.get(ApiSeverUrl + "/farmer/1/?format=json", {
        return await axios.get(`${ApiSeverUrl}/farmer/${userId}/?format=json`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json",
                "ngrok-skip-browser-warning": "true",
            }

        }).then((response) => {
            console.log(userId + "left")
            console.log(response.data + "in left data");
            setData(response.data);
            // console.log(response.data.Farmer_back_pic)
            // console.log(decodeURIComponent(response.data.Farmer_back_pic))
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <aside id="left_card" className="w-[22%] h-screen mr-4">
                {/* <!-- 내부카드 --> */}
                <section className="w-full rounded-[20px] h-[85%] overflow-hidden shadow-lg bg-[#FAFAFA]">

                    {data != null ? (
                        <>
                            {/* 상단 부 이미지 */}
                            <section className="relative">
                                <div className="h-36 bg-neutral-700 rounded-t-[20px]">
                                    <img className="image w-full h-full" src={data.Farmer_back_pic} alt="Sunset in the mountains" />
                                </div>
                                <div id="custom-ha" className='w-fit h-fit inline-block'>
                                    <img className="image bg-white custom-ha w-[7.5rem] h-[7.5rem] max-h-max-[7.5rem] rounded-[50%] ring-4 ring-gray-50 overflow-hidden" src={data.Farmer_pic} alt="Bordered avatar" />
                                </div>
                            </section>

                            {/* 중반 부 프로필 */}
                            <article className="px-6 py-4 mt-[3.25rem] alignment-center">
                                <div className='flex'>
                                    <img className='w-fit h-fit' src={LogoProfile} alt='logo' />
                                    {/* <p className="font-black text-xl ml-1">프로필</p> */}
                                    <p className="font-bold text-xl ml-1">
                                        {data.Farmer_name}
                                    </p>

                                </div>
                                <p className="font-semibold text-xl text-[#8F8F8F] mt-1">
                                    {data.Farmer_tel}
                                </p>
                            </article>

                            {/* 하단 부 글 */}
                            <article className="px-6 py-2">
                                <div className='flex items-center justify-center mb-3'>
                                    <p className="font-bold text-lg text-[#00A884]">한줄소개</p>
                                    <img className='ml-auto rounded transition duration-150 ease-in-out hover:bg-[#D3DEDA] focus:outline-none focus:ring-0 active:text-primary-700'
                                        src={LogoWrite} alt='logo' />
                                </div>
                                <p className="text-[#666666] text-base font-medium overflow-hidden text-ellipsis ">
                                    {data.Farmer_intro}
                                </p>
                                {/* <p className="text-[#666666] text-base font-medium mt-3">
                                    반갑습니다 저는 고령에서 벼와 콩을 재배하고 있습니다.</p> */}
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