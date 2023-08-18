import React, { useEffect, useState } from 'react';
import Navbar from "../include/nav/Navbar";
import '../css/home.css';
import HomeImage from '../include/HomeImage';
import HomeGuest from '../include/HomeGuest';
import Left from '../include/Left';
import RightTop from '../include/right/RightTop';
import RightBottom from '../include/right/RightBottom';
import ChatItem from '../include/guest/ChatItem';

// 필요한 코드를 추가하세요
const Home = () => {

  const [selectedUserId, setSelectedUserId] = useState(1);

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId); // 선택된 사용자 정보를 업데이트
    console.log(userId+"inHome.js");
  }



  return (
    <>
      <Navbar userId={selectedUserId}/>

      <div className="wrapping">
        {/* navbar제외 영역 */}
        <main id="content" className="content">
          {/* 가운데 정렬 */}
          <main className="wrapper flex mx-auto">

            {/* 좌측 */}
            
            <Left userId={selectedUserId} />

            {/* 가운데 */}
            <section id="center_card" className="center_card  h-screen">
              <HomeImage userId={selectedUserId} />
              <HomeGuest userId={selectedUserId}/>
              {/* <ChatItem /> */}

            </section>

            {/* 우측 */}
            <aside id="right_card" className="w-[26%]  h-full ml-4">
              <RightTop onUserSelect={handleUserSelect} />
              <RightBottom userId={selectedUserId}/>
            </aside>

          </main>

        </main>
      </div >



    </>
  );
};

export default Home;
