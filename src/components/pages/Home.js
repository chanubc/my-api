import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
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

  const [data, setData] = useState([]);


  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserSelect = (userId) => {
      setSelectedUserId(userId); // 선택된 사용자 정보를 업데이트
  }


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
      console.log(data);

    } catch (error) {
      console.error("Fetch 도중 오류 발생");
    }
  }

  // useEffect(() => {
  //   console.log("데이터: " + data);
  // }, [data]);

  return (
    <>
      <Navbar />

      <div className="wrapping">
        {/* navbar제외 영역 */}
        <main id="content" className="content">
          {/* 가운데 정렬 */}
          <main className="wrapper flex mx-auto">

            {/* 좌측 */}
            <Left userId={selectedUserId}/>

            {/* 가운데 */}
            <section id="center_card" className="center_card  h-screen">
              <HomeImage  />
              <HomeGuest />
              {/* <ChatItem /> */}

            </section>

            {/* 우측 */}
            <aside id="right_card" className="w-[26%]  h-full ml-4">
              <RightTop onUserSelect={handleUserSelect} />
              <RightBottom />
            </aside>

          </main>

        </main>
      </div >


      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/example">Example</Link></li>
      </ul>


      <DatePicker />

      <div>
        <h1>홈페이지</h1>
      </div>

      {data.length !== 0 ?
        (
          <>
            <h1> 유저 목록</h1>
            <ul>
              {data.map((agent) => (
                <li key={agent.id}>
                  <img src={agent.avatar} alt={""} />
                  <p>
                    이름: {agent.first_name} {agent.last_name}
                  </p>
                  <p>이메일: {agent.email}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h1>로딩중...</h1>
          </>
        )
      }


    </>
  );
};

export default Home;
