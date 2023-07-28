import React, { useEffect, useState } from 'react';
import { MyDiv } from "./HomeStyle";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";

// 필요한 코드를 추가하세요
const Home = () => {

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
      console.log(data);

    } catch (error) {
      console.error("Fetch 도중 오류 발생");
    }
  }

  useEffect(() => {
    console.log("데이터: " + data);
  }, [data]);

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/example">Example</Link></li>
        </ul>
      </nav>

      <DatePicker />

      <div>
        <h1>홈페이지</h1>
        <MyDiv>Styled-Component 예시</MyDiv>
      </div>

      {data.length !== 0 ?
        (
          <>
            <h1> 유저 목록</h1>
            <ul>
              {data.map((user) => (
                <li key={user.id}>
                  <img src={user.avatar} alt={""} />
                  <p>
                    이름: {user.first_name} {user.last_name}
                  </p>
                  <p>이메일: {user.email}</p>
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
