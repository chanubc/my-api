import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../css/sale.css';
import ImgHeart from '../img/Vector.svg';
import Thumb from '../img/thumb.jpg';
import Img01 from '../img/img01.jpg';

const SalesProduct = () => {
    return (
        // <!-- 판매중인 상품 -->
        // <!-- 전체 배경 -->
        <section id="picture"
            className="picture w-full rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
            {/* <!-- picture 영역 padding 적용 --> */}
            <div className="px-6 py-5">

                <section id="main_container">
                    <div class="inner">
                        <div class="contents_box">
                            <article class="contents">

                                <header class="top">
                                    <div class="profile_img">
                                        <img src={Thumb} className='h-[32px] [bg-gray-500]' alt="프로필이미지"></img>

                                    </div>

                                    <div class="user_name">
                                        <div class="nick_name m_text">berryberry01</div>
                                        <div class="timer">10분전 </div>

                                    </div>
                                </header>

                                <div class="img_section">
                                    <div class="trans_inner">
                                        <div>
                                            <img src={Img01} alt="img01"></img>
                                        </div>
                                    </div>
                                </div>


                                <div class="bottom_icons">
                                </div>


                                <div class="comment_container">
                                    <div class="comment">
                                        <div>안녕하세요 새콤달콤한 딸기가 왔어요~ 못난이 딸기 싸게 판매합니다! 선착순으로 20분 남았습니다! 여름에
                                            이 기회 놓치지 마세요! 자세한 내용은 음성으로도 들으실 수 있습니다. 앞으로도 많은 관심 부탁드려요
                                        </div>


                                    </div>

                                    <div class="purchase">
                                        <button class="my-button">구매하기</button>

                                        <div class="likes_m_text">
                                            <img src={ImgHeart} alt="하트아이콘"></img>
                                            <span class="count">현재 12명이 구매중입니다.</span>
                                        </div>


                                    </div>
                                </div>


                            </article>
                        </div>
                    </div>
                </section>

            </div>


        </section>



    )
    {/* <!-- 우측 --> */ }
    < aside id="right_card" class="w-[26%]  h-full ml-4" >

        {/* <!-- 이웃목록 --> */}
        <section id="neighbor" class="neighbor" >
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

}

    

export default SalesProduct;
