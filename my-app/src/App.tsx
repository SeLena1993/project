import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Basket from "./pages/Basket/Basket";
import Card from "./pages/Card/Card";
import Container from "./useCallback/Container";

function App() {
  return (
    <>
      <Header />
      {/* <Container/> */}
      <div className="Home-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/card/:id" element={<Card />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
