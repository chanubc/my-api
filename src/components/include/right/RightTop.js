import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NeighborList from './NeighborList';
import ButtonRight from './ButtonRight';

const RightTop = ({onUserSelect,userId}) => {
    // const [selectedUser, setSelectedUser] = useState(null);

    const handleUserSelect = (userId) => {
        onUserSelect(userId); // 선택된 사용자 정보를 부모 컴포넌트로 전달
        console.log(userId)
    }

    return (
        // <!-- 우측 -->

        <section id="neighbor" className="neighbor w-full h-[50%] max-h-[500px] rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA] ">
            <div className="px-6 py-5">
                <div className="font-bold text-xl mb-2">이웃 목록</div>

                <NeighborList onUserSelect={handleUserSelect} userId={userId}/>

                <ButtonRight />


            </div>

        </section>

    )
}

export default RightTop;