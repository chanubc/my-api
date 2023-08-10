import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const HomeGuest = () => {
    return (
        // <!-- 방명록 -->
        <section id="guest_book"
            class="guest_book w-full h-[35%] rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">방명록</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores
                    et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </section>
    )
}

export default HomeGuest;