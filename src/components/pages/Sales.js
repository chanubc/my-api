import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../include/nav/Navbar";
import Left from '../include/Left';
import RightTop from '../include/right/RightTop';
import RightBottom from '../include/right/RightBottom';
import SalesProduct from '../include/SalesProduct';

// 필요한 코드를 추가하세요
const Sales = () => {
  return (
    <>
      <Navbar />
      <div class="wrapping">
        {/* navbar제외 영역 */}
        <main id="content" class="content">
          {/* 가운데 정렬 */}
          <main class="wrapper flex mx-auto">

            {/* 좌측 */}
            <Left />

            {/* 가운데 */}
            <section id="center_card" class="center_card  h-screen">
              <SalesProduct />
            </section>

            {/* 우측 */}
            <aside id="right_card" class="w-[26%]  h-full ml-4">
              <RightTop />
              <RightBottom />
            </aside>

          </main>

        </main>
      </div >
    </>
  );
};

export default Sales;
