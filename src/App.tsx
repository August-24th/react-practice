import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Practice1 from "./pages/Practice1";
import Practice2 from "./pages/Practice2";

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <ol>
          <li>
            <Link to="practice-1">useState(), 이벤트 리스너 등록 예제</Link>
          </li>
          <li>
            <Link to="practice-2">To-do List 간단 예제</Link>
          </li>
        </ol>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/practice-1" element={<Practice1 />}></Route>
          <Route path="/practice-2" element={<Practice2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
