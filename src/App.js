import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Lobby from "./components/Lobby";
import Uniswap from "./components/Uniswap";
import Docs from "./components/Docs";
import Treasury from "./components/Treasury";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Uniswap />
      <Lobby /> */}

      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/uniswap" element={<Uniswap />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/treasury" element={<Treasury />} />
      </Routes>
    </div>
  );
}

export default App;
