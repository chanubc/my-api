import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Guest from './components/pages/Guest';
import Sales from './components/pages/Sales';

// 필요한 라우터를 추가하세요
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/sales/:key" element={<Sales/>} /> */}
        <Route path="/sales" element={<Sales/>} />
        <Route path="/guest" element={<Guest/>} />
      </Routes>
    </Router>
  );
};

export default App;
