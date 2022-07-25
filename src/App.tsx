import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Header from "./shared/Header/Header";
import Popup from "./shared/Popup/Popup";

const App = () => {
  return (
    <>
      <Popup />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
