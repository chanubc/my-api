import React from 'react';
import {Link} from "react-router-dom";

// 필요한 코드를 추가하세요
const Example = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/example">Example</Link></li>
        </ul>
      </nav>

      <div>
        <h1>예시 페이지</h1>
        <p>예시 페이지</p>
      </div>
    </>
  );
};

export default Example;
