import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ChatItem from './guest/ChatItem';


const HomeGuest = () => {
    return (
        // <!-- 방명록 -->
        <section id="guest_book"
        // h 35%
            className="guest_book w-full h-[35%] rounded-[20px] overflow-y-auto shadow-lg bg-[#FAFAFA]">
            <div className="pl-6 py-4">
                <div className="font-bold text-xl mb-2">방명록</div>
                <ChatItem />
            </div>
        </section>
    )
}

export default HomeGuest;