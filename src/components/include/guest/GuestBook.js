import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import IconMessage from '../../img/MessageIcon.svg'

const GuestBook = () => {
    return (
        // <!-- 방명록 -->
        <section id="picture"
            className="picture w-full h-[85%] rounded-[20px] overflow-y-auto shadow-lg bg-[#FAFAFA]">
            {/* <!-- 전체 영역 padding 적용 --> */}
            <div className="px-6 py-5">
                {/* 상단 text 영역 */}
                <article className='flex h-[50px] items-center mb-3'>
                    <img className='h-[1.1rem] w-[1.1rem] mr-[6px]' src={IconMessage} alt='logo' />
                    <p className="font-bold text-xl">방명록</p>
                </article>
               
                

            </div>
        </section>
    )
}

export default GuestBook;