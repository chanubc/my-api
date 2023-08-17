import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NeighborList from './NeighborList';
import ButtonRight from './ButtonRight';

const RightTop = (onUserSelect ) => {
    // const [selectedUser, setSelectedUser] = useState(null);

    // const handleUserSelect = (user) => {
    //     setSelectedUser(user);

    // }

    return (
        // <!-- 우측 -->

        <section id="neighbor" className="neighbor w-full h-[50%] max-h-[500px] rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA] ">
            <div className="px-6 py-5">
                <div className="font-bold text-xl mb-2">이웃 목록</div>

                <NeighborList/>

                <ButtonRight />


            </div>

        </section>

    )
}

export default RightTop;