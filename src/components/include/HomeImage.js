import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../css/home.css'
// 이미지 로컬 경로
import ImgEx from "../img/farmMain.jpg";
// import generateImageItems from '../function/data.js'; // data.js 파일의 함수를 가져옴
import Loading from '../effect/Loading';


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
        // <!-- picture -->
        <section id="picture"
            className="picture w-full h-fit rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
            {/* <!-- picture 영역 padding 적용 --> */}
            <div className="px-6 py-5">
                <div id="text_farm" className="font-bold text-xl mb-3">나의 농장</div>
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
            </div>
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
