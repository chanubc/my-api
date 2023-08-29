import React, { useEffect, useState } from 'react';
import LoadingText from '../../effect/LoadingText';
import NeighborApi from '../../../api/NeighborApi';
import { useLocation } from 'react-router';

const NeighborList = (props) => {
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(1);
    const firstUserId = localStorage.getItem('selectUserId'); // userId를 localStorage에서 읽어옴


    useEffect(() => {
        if (selectedUser) { // selectedUser가 null이 아닌 경우에만 fetchData 호출
            fetchData(selectedUser);
        }
        // else if(firstUserId){
        //     fetchData(firstUserId);
        // }
    }, [selectedUser,firstUserId]);

    const fetchData = async (userId) => {
        try {
            const response = await NeighborApi.getNeighborList(userId);
            setData(response.data.neighbors);
            console.log(userId + " userId in neighbor");

        } catch (error) {
            console.error("Fetch 도중 오류 발생");
        }
    };


    const location = useLocation();
    const currentPath = location.pathname; // 현재 경로 가져오기
    const handleUserClick = (userId) => { // userId를 매개변수로 받음
        props.onUserSelect(userId)
        setSelectedUser(userId); // 사용자 아이디를 선택된 사용자로 업데이트
        localStorage.setItem('selectUserId', userId); // userId를 localStorage에 저장
        console.log(userId + " click");
        fetchData(userId); // 사용자가 클릭되면 해당 사용자의 데이터를 가져옴
        // props.history.push( currentPath: "/Next", state : {displays: displays})
        // state: {displays: displays});
        // pathname: "/Next",
        // state: {displays: displays}
        
//         {
//             pathname:`/order/payment`,
//             props:{
//               buyingList : [{
//                   pname: product.pname,
//                   quantity: product.quantity,
//                   price: product.price,
//                   images: product.images
//               }],
//   totalPrice : product.price * product.quantity
//             }
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