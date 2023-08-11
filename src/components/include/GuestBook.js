import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const GuestBook = () => {
    return (
        // <!-- 방명록 -->
        // <!-- picture -->
        <section id="picture"
            className="picture w-full h-[85%] rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
            {/* <!-- picture 영역 padding 적용 --> */}
            <div className="px-6 py-5">
                <div id="text_farm" className="font-bold text-xl mb-3">방명록</div>

            </div>
        </section>
    )
}

export default GuestBook;