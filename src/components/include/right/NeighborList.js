import React, { useEffect, useState } from 'react';
import LoadingText from '../../effect/LoadingText';
import NeighborApi from '../../../api/NeighborApi';

const NeighborList = (props) => {
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(1);

    useEffect(() => {
        if (selectedUser) { // selectedUser가 null이 아닌 경우에만 fetchData 호출
            fetchData(selectedUser);
        }
    }, [selectedUser]);

    const fetchData = async (userId) => {
        try {
            const response = await NeighborApi.getNeighborList(userId);
            setData(response.data.neighbors);
            console.log(userId + " userId in neighbor");

        } catch (error) {
            console.error("Fetch 도중 오류 발생");
        }
    };

    const handleUserClick = (userId) => { // userId를 매개변수로 받음
        props.onUserSelect(userId)
        setSelectedUser(userId); // 사용자 아이디를 선택된 사용자로 업데이트
        console.log(userId + " click");
        fetchData(userId); // 사용자가 클릭되면 해당 사용자의 데이터를 가져옴
    };

    return (
        <>
            {data.length !== 0 ? (
                <>
                    {data.map((user, id) => (
                        <div key={id} className='block overflow-hidden' onClick={() => handleUserClick(user.id)}>
                            <section className={`flex items-center py-2 hover:bg-[#D3DEDA] hover:rounded-[10px] duration-300 ease-in-out`}>
                                <div className='relative flex'>
                                    <img className="object-cover w-14 h-14 rounded-full overflow-hidden mr-3" src={user.Farmer_pic} alt="Avatar" />
                                    <div className="text-base font-semibold align-middle items-center justify-center overflow-hidden">
                                        <p className="text-gray-900">{user.Farmer_name}</p>
                                        <p className="text-[#8C8C8C] truncate">{user.Farmer_intro}</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    ))}
                </>
            ) : (
                <LoadingText />
            )}
        </>
    )
}

export default NeighborList;