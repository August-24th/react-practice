import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Practice1 from "./pages/Practice1";

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <ol>
          <li>
            <Link to="practice-1">Practice 1</Link>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
