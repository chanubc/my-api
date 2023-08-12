import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NeighborList from './right/NeighborList';

const RightTop = () => {
    return (
        // <!-- 우측 -->

        <section id="neighbor" className="neighbor w-full h-[50%] rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">이웃 목록</div>

                <div class="flex items-center">
                    <img class="w-10 h-10 rounded-full mr-4 bg-black" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                        <p class="text-gray-600">Aug 18</p>
                    </div>
                </div>

                <NeighborList />
                <NeighborList />
                <NeighborList />
                <NeighborList />

            </div>

        </section>

    )
}

export default RightTop;