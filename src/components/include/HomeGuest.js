import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ChatItem from './guest/ChatItem';
import axios from 'axios';
import { ApiSeverUrl } from '../../api/DefaultSetup';
import LoadingText from '../effect/LoadingText';

const HomeGuest = ({ userId }) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetchData(userId);
    }, [userId])



    const fetchData = async (userId) => {

        // return await axios.get(ApiSeverUrl + "/farmer/${setindex+1}/farm/?format=json", {
        return axios.get(`${ApiSeverUrl}/farmer/${userId}/sortingguestbook/?format=json`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json",
                "ngrok-skip-browser-warning": "true",
            }

        }).then((response) => {
            console.log(response);
            setData(response.data);

        }).catch((error) => {
            console.log(error);
        });
    }



    return (
        // <!-- 방명록 -->
        <section id="guest_book"
            // h 35%
            className="guest_book w-full h-[32%] rounded-[20px]  shadow-lg bg-[#FAFAFA]">
            <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2">방명록</div>
            </div>
            <div className="px-6">
                {/* <ChatItem userId={userId} /> */}

                {data.length !== 0 ? (
                    <>
                        {data.slice(0,2).map((item) => (
                            <>
                                {/* <!-- 채팅 item --> */}
                                <main className='mb-4' key={item.id}>
                                    {/* 내부요소 수직 좌측 정렬 flex item-center /justify-between 는 없음. */}
                                    <section className='rounded-xl shadow-md bg-[#00A884] z-50 py-4 min-h-[3.5rem] h-16 px-3 flex items-center'>

                                        <p className='text-gray-50   text-base font-semibold '>
                                            {item.create_date}
                                        </p>
                                        <p className='text-gray-50 ml-3 text-base font-semibold  '>
                                            {item.content}
                                        </p>

                                    </section>
                                </main>
                            </>
                        ))}
                    </>
                ) : (
                    <>
                        <LoadingText />
                    </>
                )}


            </div>
        </section>
    )
}

export default HomeGuest;