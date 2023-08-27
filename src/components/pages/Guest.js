import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import Navbar from "../include/nav/Navbar";
import Left from '../include/Left';
import RightTop from '../include/right/RightTop';
import RightBottom from '../include/right/RightBottom';
import GuestBook from '../include/guest/GuestBook';
import AxiosTest from '../include/guest/InputButton';
import browserStorage from '../../utils/BrowserStorage';

const Guest = () => {


  // browserStorage.set('selectUserId', 1); // userId를 localStorage에 저장
  const firstUserId = localStorage.getItem('selectUserId'); // userId를 localStorage에서 읽어옴

  console.log(firstUserId + " selectedUserId in guest");


  useEffect(() => {
    if (firstUserId) {
      handleUserSelect(firstUserId);
    }
    else {
      handleUserSelect(1);
    }

  }, [firstUserId])



  const [selectedUserId, setSelectedUserId] = useState(firstUserId);

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId); // 선택된 사용자 정보를 업데이트
  }





  return (
    <>
      <Navbar />
      <div className="wrapping">
        {/* navbar제외 영역 */}
        <main id="content" className="content">
          {/* 가운데 정렬 */}
          <main className="wrapper flex mx-auto">

            {/* 좌측 */}
            <Left userId={selectedUserId} />

            {/* 가운데 */}
            <section id="center_card" className="center_card  h-screen">
              <GuestBook userId={selectedUserId} />

            </section>

            {/* 우측 */}
            <aside id="right_card" className="w-[26%]  h-full ml-4">
              <RightTop onUserSelect={handleUserSelect} userId={selectedUserId} />
              <RightBottom userId={selectedUserId} />
            </aside>

          </main>

        </main>
      </div >

    </>
  );
};

export default Guest;
