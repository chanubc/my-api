import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ChatItem from './guest/ChatItem';


const HomeGuest = ({userId}) => {
    return (
        // <!-- 방명록 -->
        <section id="guest_book"
            // h 35%
            className="guest_book w-full h-[35%] rounded-[20px]  shadow-lg bg-[#FAFAFA]">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">방명록</div>
            </div>
            <div className="pl-6 py-4 overflow-y-auto h-[65%]">
                <ChatItem userId={userId} />
            </div>
        </section>
    )
}

export default HomeGuest;