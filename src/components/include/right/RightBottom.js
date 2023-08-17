import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { SalesProduct } from '../SalesProduct';
import Img01 from '../img/img01.jpg';
import ImgHeart from '../img/Vector.svg';




const RightBottom = () => {
    return (
        <section id="hot_product_title" className="hot_product_title w-full h-[73%] rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">최근 인기상품</div>



                <div class="hot_product_items" style={{padding: '5px'}} >
                    <div className="product_img_div">
                        <div class="hot_img">
                            <img style={{ width: 317, height: 160, background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 5, border: '1.50px #BBBDC3 solid' }}
                                src={Img01} className="product_img" /></div>
                    </div>
                    <div class="product_container">
                        <h5 className="product_title" style={{ color: 'black', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word', position: 'relative', top: '5px' }}>
                            못난이 여름 딸기 1kg
                        </h5>
                        <div class="purchase_RB" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', top: '5px' }}>
                            <div class="likes_m_text">
                                <img src={ImgHeart} alt="하트 아이콘"></img>
                                <span class="count">현재 12명이 구매 중입니다.</span>
                            </div>

                            <span style={{ color: '#FF4D00', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }} className="product_mon">17900원</span>

                        </div>
                    </div>
                </div>

                <div class="hot_product_items" >
                    <div className="product_img_div">
                        <div class="hot_img">
                            <img style={{ width: 317, height: 160, background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 5, border: '1.50px #BBBDC3 solid' }}
                                src={Img01} className="product_img" /></div>
                    </div>
                    <div class="product_container">
                        <h5 className="product_title" style={{ color: 'black', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word', position: 'relative', top: '5px' }}>
                            못난이 여름 딸기 1kg
                        </h5>
                        <div class="purchase_RB" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', top: '5px' }}>
                            <div class="likes_m_text">
                                <img src={ImgHeart} alt="하트 아이콘"></img>
                                <span class="count">현재 12명이 구매 중입니다.</span>
                            </div>

                            <span style={{ color: '#FF4D00', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }} className="product_mon">17900원</span>

                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="px-6 pt-4 pb-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
        </section >
    );
};

export default RightBottom;