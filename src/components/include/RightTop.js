import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const RightTop = () => {
    return (
        // <!-- 우측 -->
        
            <section id="neighbor" className="neighbor w-full h-[50%] rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">이웃 목록</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                        Maiores
                        et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </section>
      
    )
}

export default RightTop;