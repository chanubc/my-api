import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../css/home.css'
// 이미지 로컬 경로
import ImgEx from "../img/farmMain.jpg";


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


        <section id="center_card" class="center_card  h-screen">
            {/* <!-- picture --> */}
            <div id="picture"
                class="picture w-full h-fit rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
                {/* <!-- picture 영역 padding 적용 --> */}
                <div class="px-6 py-5">
                    <div id="text_farm" class="font-bold text-xl mb-3">나의 농장</div>
                    <div class="image-container">
                        <img id="image_main" class="image h-[300px] rounded-md mb-3 bg-gray-800"
                            src={ImgEx} alt="Sunset in the mountains"></img>
                    </div>
                    {/* <!-- Four columns --> */}
                    <ul className="flex h-fit">
                        {data.length !== 0 ? (
                            data.slice(0, 4).map((user, index) => (
                                <li key={index} className={`w-1/4 bg-gray-500 ${index !== 3 ? 'mr-3' : ''} rounded-[5px]`}>
                                    <img className="image-item" src={user.avatar} alt="User Avatar" />
                                </li>
                            ))
                        ) : (
                            <h1>로딩중...</h1>
                        )}
                    </ul>


                </div>
            </div>
            {/* <!-- 방명록 --> */}
            <div id="guest_book"
                class="guest_book w-full h-[35%] rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">방명록</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                        Maiores
                        et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </section>

    );
};

export default HomeImage;
