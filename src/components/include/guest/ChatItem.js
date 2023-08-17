import React, { useEffect, useState } from 'react';

import IconWrite from '../img/Icon_write.svg'
import IconDelete from '../img/Icon_trash.svg'
import LoadingText from '../../effect/LoadingText';

const ChatItem = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const delay = setTimeout(() => {
            fetchData();
        });

        return () => clearTimeout(delay);
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("https://reqres.in/api/users?page=1", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "content-type": "application/json",
                }

            });

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

    return (
        <>
            {data.length !== 0 ? (
                <>
                    {data.map((item) => (
                        <>
                            {/* <!-- 채팅 item --> */}
                            <main className='mb-3 mr-6' key={item.id}>
                                <p className='flex items-center justify-center text-sm mb-1'>
                                    {item.last_name}
                                </p>
                                {/* 내부요소 수직 좌측 정렬 flex item-center /justify-between 는 없음. */}
                                <section className='rounded-md bg-[#E3EDE3] z-50 py-4 min-h-[3.5rem] px-3 flex items-center w-full justify-between'>
                                    <p className='block w-full ml-2 text-base font-semibold overflow-x-hidden overflow-y-auto flex-grow'>
                                        {item.email}
                                    </p>
                                    <div className='flex items-end me-3'>
                                        <img className='p-1  rounded hover:bg-[#D3DEDA]' src={IconWrite} alt='write'></img>
                                        <img className='p-1 rounded hover:bg-[#D3DEDA]' src={IconDelete} alt='delete'></img>
                                    </div>
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

        </>
    )
};

export default ChatItem;
