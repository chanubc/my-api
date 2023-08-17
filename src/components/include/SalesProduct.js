import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../css/sale.css';
import ImgHeart from '../img/Vector.svg';
/*import Thumb from '../include/img/thumb.jpg';
import Img01 from '../include/img/img01.jpg'; */
import axios from 'axios';
import { ApiSeverUrl } from '../../api/DefaultSetup';

const SalesProduct = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        return await axios.get(ApiSeverUrl + "/farmer/1/sale/?format=json", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json"
            }

        }).then((response) => {
            console.log(response);
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (

        <>
            {data !== undefined ? (
                <>
                    {data && data.map((f) => (
                        <>

                            {/* <!-- 판매중인 상품 --> */}
                            {/* <!-- 전체 배경 --> */}
                            <section key={f.author} id="picture"
                                className="picture w-full rounded-[20px] overflow-hidden shadow-lg bg-[#FBFBFB] mb-6">
                                {/* <!-- picture 영역 padding 적용 --> */}
                                < div className="px-6 py-5">
                                    <section id="main_container">
                                        <div class="inner">
                                            <div class="contents_box">
                                                <article class="contents">
                                                    <header class="top">
                                                        <div class="profile_img">
                                                            <img src={f.author_pic} className='w-full h-full [bg-gray-500]' alt={"프로필이미지"} />

                                                        </div>

                                                        <div class="user_name">
                                                            <div class="nick_name m_text">{f.author}</div>
                                                            <div class="timer">10분전 </div>

                                                        </div>
                                                    </header>


                                                    <div class="img_section">
                                                        <div class="trans_inner">
                                                            <div>
                                                                {/* <img src={Img01} alt="img01"></img> */}

                                                                <img src={f.Post_pics} className='w-full h-[300.88px] bg-[lightgray 0px -596.153px / 105.366% 246.463% no-repeat, #D9D9D9] ' alt={"프로필이미지"} />
                                                            </div>
                                                        </div>
                                                    </div>




                                                    <div class="bottom_icons">
                                                    </div>


                                                    <div class="comment_container">
                                                        <div class="comment">
                                                            <div>
                                                                {f.content}
                                                            </div>


                                                        </div>

                                                        <div class="purchase">
                                                            <button className="my-button">
                                                                구매하기</button>

                                                            <div class="likes_m_text">
                                                                <div class="likes_m_container" >
                                                                    <img src={ImgHeart} alt="하트아이콘" ></img>
                                                                    <span class="count" >현재 {f.like}명이 구매중입니다.</span>


                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>



                                                </article>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </section>
                        </>
                    ))}
                </>
            ) : (
                <>
                    <h1>로딩중.....</h1>
                </>
            )}

            {/* <!-- 우측 --> */}
            < aside id="right_card" class="w-[26%]  h-full ml-4" >

                {/* <!-- 이웃목록 --> */}
                <section section id="neighbor" class="neighbor" >
                    <script>
                        $('#neighbor').load('/include/right.html')
                    </script>
                </section>

                {/* <!-- 최근인기상품 --> */}
                <section section id="hot_product" class="hot_product" >
                    <script>
                        $('#hot_product').load('/include/right_bottom.html')
                    </script>
                </section>


            </aside >
        </>
    )


};
export default SalesProduct;