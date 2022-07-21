import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/month-statistics" element={<MonthStatistics />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default App;
