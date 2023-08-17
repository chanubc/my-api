import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import IconMessage from '../img/MessageIcon.svg'
import AxiosTest from './InputButton';
import ChatItem from './ChatItem';

const GuestBook = () => {
    return (
        // <!-- 방명록 -->
        <section className="relative w-full h-[85%] rounded-[20px] shadow-lg bg-[#FAFAFA]">
            {/* <!-- 전체 영역 padding 적용 --> */}
            <main className="pl-6 py-5">
                {/* 상단 text 영역 */}
                <article className='flex items-center mb-3'>
                    <img className='h-[1.1rem] w-[1.1rem] mr-[6px]' src={IconMessage} alt='logo' />
                    <p className="font-bold text-xl">방명록</p>
                </article>

                {/* 중반부 박스 */}
                <div className='h-[29rem] overflow-y-scroll'>
                    <ChatItem />
                </div>


            </main>
            {/* 하단부 input */}
            <div className='h-fit w-full bottom-0  absolute pl-4 pr-4 py-5 justify-center items-center '>
                <AxiosTest />
            </div>
        </section>
    )
}

export default GuestBook;