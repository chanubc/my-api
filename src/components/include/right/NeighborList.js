import React, { useEffect, useState } from 'react';
import '../../css/home.css';


const NeighborList = () => {
    return (
        <>
            <section class="flex items-center py-2 hover:bg-[#D3DEDA] hover:rounded-[10px] duration-300 ease-in-out">
                
                
                <img class="w-14 h-14 rounded-full mr-2 bg-black" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
                <div class="text-base font-semibold align-middle items-center justify-center">
                    <p class="text-gray-900">닉넴1</p>
                    <p class="text-[#8C8C8C]">소같이 일하자</p>
                </div>
            
            </section>
        </>
    )
}

export default NeighborList