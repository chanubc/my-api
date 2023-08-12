import React, { useEffect, useState } from 'react';
import '../../css/home.css';
import LoadingText from '../../effect/LoadingText';



const NeighborList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const delay = setTimeout(() => {
            fetchData();
        }, 3000);

        return () => clearTimeout(delay);
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("https://reqres.in/api/users?page=1")
            if (!response.ok) {
                throw new Error("응답 없음");
            }

            const jsonData = await response.json();
            setData(jsonData.data);
            console.log(data);

        } catch (error) {
            console.error("Fetch 도중 오류 발생");
        }
    }


    return (
        <>
            {data.length !== 0 ? (
                <>
                    {data.slice(0, 3).map((user, index) => (
                        <>
                            <div key={index} className='block' >
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