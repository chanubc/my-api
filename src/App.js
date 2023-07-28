import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './components/Home';
import Example from './components/Example';

// 필요한 라우터를 추가하세요
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/example" element={<Example/>} />
      </Routes>
    </Router>
  );
};

export default App;
