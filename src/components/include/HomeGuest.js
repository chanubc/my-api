import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const HomeGuest = () => {
    return (
        // <!-- 방명록 -->
        <section id="guest_book"
            className="guest_book w-full h-[35%] rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">방명록</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores
                    et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </section>
    )
}

export default HomeGuest;