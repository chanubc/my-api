import React, { useEffect, useState } from 'react';
import '../../css/home.css';
import LoadingText from '../../effect/LoadingText';
import axios from 'axios'; // Import Axios
import { ApiSeverUrl } from '../../../api/DefaultSetup';




const NeighborList = () => {

    const [data, setData] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null); // 추가: 선택된 사용자 상태

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        return await axios.get(ApiSeverUrl + "/farmer/1/?format=json", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json",
                "ngrok-skip-browser-warning": "true",
            }

        }).then((response) => {
            console.log(response);
            setData(response.data);
            console.log(response.data.Farmer_back_pic.substr(1))
            console.log(decodeURIComponent(response.data.Farmer_back_pic.substr(1)))
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleUserClick = (index) => {
        setSelectedUser(data[index]); // 사용자를 선택한 경우, 선택된 사용자 상태를 업데이트
    }


    return (
        <>
            {data.length !== 0 ? (
                <>
                    {data.slice(0, 3).map((user, index) => (
                        <>
                            <div key={index} className='block overflow-hidden' onClick={() => handleUserClick(index)} >
                                <section className="flex items-center py-2 hover:bg-[#D3DEDA] hover:rounded-[10px] duration-300 ease-in-out">

                                    <img className="w-14 h-14 rounded-full mr-2 bg-black" src={user.avatar} alt="Avatar of Jonathan Reinink" />
                                    <div className="text-base font-semibold align-middle items-center justify-center">
                                        <p className="text-gray-900">{user.first_name}</p>
                                        <p className="text-[#8C8C8C]">{user.email}</p>
                                    </div>

                                </section>
                            </div>
                        </>
                    ))}
                </>

            ) : (
                <LoadingText />
            )}

        </>
    )
}
export default NeighborList

// {/* <img class="w-14 h-14 rounded-full mr-2 bg-black" src={data[0].avatar} alt="Avatar of Jonathan Reinink" />
// <div class="text-base font-semibold align-middle items-center justify-center">
// <p class="text-gray-900">닉넴1</p>
// <p class="text-[#8C8C8C]">소같이 일하자</p>
// </div> */}