import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import IconMessage from '../../img/MessageIcon.svg'
import AxiosTest from './InputButton';
import ChatItem from './ChatItem';
import axios from 'axios';
import { ApiSeverUrl } from '../../../api/DefaultSetup';
import IconButton from '../../img/Button_write.svg'


const GuestBook = ({ userId }) => {

    const [inputTest, setTextareaValue] = useState(""); // 제목 값을 저장하는 상태 변수
    const [ButtonClick, setButtonClick] = useState(1); // 제목 값을 저장하는 상태 변수



    const handleSubmit = async (userId) => {
        try {
            PostData()
            setButtonClick(ButtonClick+1)
            setTextareaValue("")

        } catch (error) {
            console.error("POST 요청 중 오류 발생", error);
        }
    };


    // 현재 시간을 얻기 위한 함수로 교체해주세요
    const getCurrentTime = () => {
        return new Date().toISOString();
    };

    // const [textareaValue, setTextareaValue] = useState('');

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };


    // post 통신
    const PostData = async () => {

        let data = JSON.stringify({
            "author": userId,
            "content": inputTest,
            "create_date": getCurrentTime()
        });
        console.log(inputTest + "in parent")
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: ApiSeverUrl + `/farmer/${userId}/guestbook/`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });


    }


    return (
        // <!-- 방명록 -->
        <section className="relative w-full h-[85%] rounded-[20px] shadow-lg bg-[#FAFAFA]">
            {/* <!-- 전체 영역 padding 적용 --> */}
            <main className="pl-6 py-5">
                {/* 상단 text 영역 */}
                <article className='flex items-center mb-3'>
                    <img className='h-[1.1rem] w-[1.1rem] mr-[6px]' src={IconMessage} alt='logo' />
                    <p className="font-bold text-xl">방명록</p>
                </article>

                {/* 중반부 박스 */}
                <div className='h-[29rem] overflow-y-scroll'>
                    <ChatItem userId={userId} ButtonClick={ButtonClick} />
                </div>


            </main>
            {/* 하단부 input */}
            <div className='h-fit w-full bottom-0  absolute pl-4 pr-4 py-5 justify-center items-center '>
                {/* <AxiosTest /> */}

                <section className='flex items-center justify-between'>

                    <article className="relative w-[85%] " data-te-input-wrapper-init>
                        <textarea
                            id="exampleFormControlTextarea1"
                            className="peer focus:outline-[#29A99A] focus:border-[#29A99A] block border-[#29A99A] border h-[60px] w-full rounded-xl bg-white px-3 py-[0.32rem] leading-[1.6] focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            rows="4"
                            value={inputTest}
                            onChange={handleTextareaChange}
                        ></textarea>
                        <label
                            htmlFor="exampleFormControlTextarea1"
                            className={`font-medium pointer-events-none absolute left-3 top-0 bottom-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${inputTest.trim() === '' ? '' : 'opacity-0'
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
            </div>
        </section>
    )
}

export default GuestBook;