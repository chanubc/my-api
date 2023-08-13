import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import Navbar from "../include/nav/Navbar";
import Left from '../include/Left';
import RightTop from '../include/right/RightTop';
import RightBottom from '../include/right/RightBottom';
import GuestBook from '../include/guest/GuestBook';

const Guest = () => {

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
      // console.log(data);

    } catch (error) {
      console.error("Fetch 도중 오류 발생");
    }
  }

  useEffect(() => {
    console.log("데이터: " + data);
  }, [data]);

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
              <GuestBook />

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

export default Guest;
