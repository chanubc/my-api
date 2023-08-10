import React, { useEffect, useState } from 'react';
import { MyDiv } from "./HomeStyle";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import  Navbar  from "./include/Navbar";

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
        <Navbar/>
        <DatePicker />
  
      </>
    );
  };
  
  export default Guest;
  