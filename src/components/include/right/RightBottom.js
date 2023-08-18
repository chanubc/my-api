import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { SalesProduct } from '../SalesProduct';
/* import Img01 from '../img/img01.jpg'; */
import ImgHeart from '../../img/Vector.svg';
import axios from 'axios';
import { ApiSeverUrl } from '../../../api/DefaultSetup';





const RightBottom = ({ userId }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [userId])

    const fetchData = async () => {
        return await axios.get(ApiSeverUrl + "/farmer/" + userId + "/sale/?format=json", {
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

        <section id="hot_product_title" className="mt-7 hot_product_title w-full h-[73%] rounded-[20px] overflow-hidden shadow-lg bg-[#FAFAFA]">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">최근 인기상품</div>

                <>
                    {data !== undefined ? (
                        <>
                            {data && data.slice(0, 2).map((
                                f) => (
                                <>
                                    <div class="hot_product_items" style={{ padding: '5px' }} >
                                        <div className="product_img_div">
                                            <div class="hot_img">
                                                <img style={{ width: 317, height: 160, background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 5, border: '1.50px #BBBDC3 solid' }}
                                                    src={f.Post_pics} className="product_img" /></div>
                                        </div>
                                        <div class="product_container" >
                                            <div className="product_title" style={{
                                                color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '600', position: 'relative', top: '5px'
                                                , whiteSpace: 'nowrap', overflow: 'hidden', letterSpacing: '-0.5px'
                                            }}>
                                                {f.title}
                                            </div>
                                            <div class="purchase_RB" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', top: '5px' }}>
                                                <div class="likes_m_text">
                                                    <img src={ImgHeart} alt="하트 아이콘"></img>
                                                    <span class="count">현재 {f.like}명이 구매중입니다.</span>
                                                </div>

                                                <span style={{ color: '#FF4D00', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }} className="product_mon">{f.price}원</span>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </>
                    )
                        :
                        (
                            <>
                                <h1>로딩중.....</h1>
                            </>
                        )




                    }
                </>
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