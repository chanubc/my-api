import React, { useState } from 'react';
import axios from 'axios';

const AxiosTest = () => {
    const [inputTest, setTitle] = useState(""); // 제목 값을 저장하는 상태 변수

    const handleSubmit = async () => {
        try {
            const response = await axios.post("https://9bf2-121-135-149-228.ngrok-free.app/farmin/posts/", {
                
                "title": inputTest,
               
                "create_date": getCurrentTime(),
                
                "author": 1,
                
            });

            console.log(response.data); // 응답 데이터
        } catch (error) {
            console.error("POST 요청 중 오류 발생", error);
        }
    };

    // 현재 시간을 얻기 위한 함수로 교체해주세요
    const getCurrentTime = () => {
        // 현재 시간을 얻는 로직을 여기에 구현해주세요
        return new Date().toISOString();
    };

    return (
        <div className='bg-gray-900 h-fit'>
            <input
                type="text"
                value={inputTest}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목"
            />
            <button className='bg-blue-500 w-7 h-7' onClick={handleSubmit}>제출</button>
        </div>
    );
}

export default AxiosTest;
