import React, { useState } from 'react';
import axios from 'axios';
import IconButton from '../../img/Button_write.svg'

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

    const [textareaValue, setTextareaValue] = useState('');

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    return (
        <>
            {/* 원본 */}
            {/* <div className='bg-gray-900 h-fit'>
                <input
                    type="text"
                    value={inputTest}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                />
                <button className='bg-blue-500 w-7 h-7' onClick={handleSubmit}>제출</button>
            </div> */}





            {/* input 예시1 */}
            {/* <input type="text" id="large-input" rows='3'
                className="block w-full p-4 text-gray-900 border border-[#29A99A] rounded-lg bg-gray-50 sm:text-md focus:ring-#29A99A focus:border-#29A99A focus:outline-[#29A99A]" placeholder='방명록을 남겨주세요' /> */}



            <section className='flex items-center justify-between'>

                <article className="relative w-[85%] " data-te-input-wrapper-init>
                    <textarea
                        id="exampleFormControlTextarea1"
                        className="peer focus:outline-[#29A99A] focus:border-[#29A99A] block border-[#29A99A] border h-[60px] w-full rounded-xl bg-transparent px-3 py-[0.32rem] leading-[1.6] focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        rows="4"
                        value={textareaValue}
                        onChange={handleTextareaChange}
                    ></textarea>
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className={`font-medium pointer-events-none absolute left-3 top-0 bottom-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${textareaValue.trim() === '' ? '' : 'opacity-0'
                            } peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                    >
                        방명록을 남겨주세요
                    </label>
                </article>

                {/* <button className='bg-blue-500 w-7 h-7' onClick={handleSubmit}>제출</button> */}

                <button

                    className="ml-2 inline-block rounded-2xl w-20 h-20 py-4 pl-3 pr-2 bg-[#00A884] text-sm font-semibold  leading-normal text-white shadow-md transition duration-150 ease-in-out
                                hover:bg-[#0F8E73] active:bg-[#00755C] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    onClick={handleSubmit}

                >
                    <img className='h-full w-full' src={IconButton} alt='button'>
                    </img>
                </button>


            </section>

            {/* 원본 */}
            {/* <div className='bg-gray-900 h-fit'>
                <input
                    type="text"
                    value={inputTest}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                />
                <button className='bg-blue-500 w-7 h-7' onClick={handleSubmit}>제출</button>
            </div> */}





        </>
    );
}

export default AxiosTest;
