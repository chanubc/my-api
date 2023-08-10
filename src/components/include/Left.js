import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ImgTop from "../img/left_top.png";

const Left = () => {
    return (
        // < !--좌측 -- >
        <aside id="left_card" class="w-[22%] h-screen mr-4">
            {/* <!-- 내부카드 --> */}
            <div class="w-full rounded-[20px] h-[85%] overflow-hidden shadow-lg bg-[#FAFAFA]">

                {/* <!-- top image --> */}
                <div class="top_img h-[22%]">
                    <img class="w-full h-[100%] rounded-t-[20px]" src={ImgTop} alt="Sunset in the mountains"></img>
                </div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">프로필</div>
                    <p class="text-gray-700 text-base">
                        010-1234-5678
                    </p>
                </div>
            </div>
        </aside >
    );
};

export default Left;