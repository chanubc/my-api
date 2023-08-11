import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ImgTop from "../img/left_top.png";
import '../css/home.css'

const Left = () => {
    return (
        // < !--좌측 -- >
        <aside id="left_card" className="w-[22%] h-screen mr-4">
            {/* <!-- 내부카드 --> */}
            <div className="w-full rounded-[20px] h-[85%] overflow-hidden shadow-lg bg-[#FAFAFA]">

                {/* <!-- top image -->
                <div class="top_img h-[22%] relative">
                    <img class="w-full h-[100%] rounded-t-[20px]" src={ImgTop} alt="Sunset in the mountains"></img>
                </div>
                <div className='alignment-center absolute z-50'>
                    <img className="w-10 h-10 p-1 rounded-full ring-1 ring-gray-300" src={ImgTop} alt="Bordered avatar" />
                </div> */}

                <div className="relative">
                    <div className="a top_img h-[22%] relative">
                        <img className="w-full h-[100%] rounded-t-[20px]" src={ImgTop} alt="Sunset in the mountains" />
                    </div>
                    <div className="b absolute z-50 top-[50%] left-[50%] m-0 transform[-translate-x-1/2 -translate-y-1/2]">
                        <img className="w-10 h-10 p-1 rounded-full ring-1 ring-gray-300" src={ImgTop} alt="Bordered avatar" />
                    </div>
                </div>



                <div className="flex flex-wrap justify-center">
                    <div className="w-6/12 sm:w-4/12 px-4">
                        <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                </div>


                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">프로필</div>
                    <p className="text-gray-700 text-base">
                        010-1234-5678
                    </p>
                </div>
            </div>
        </aside >
    );
};

export default Left;