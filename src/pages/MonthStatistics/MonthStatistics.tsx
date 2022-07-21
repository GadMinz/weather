import React from "react";
import s from "./MonthStatistics.module.scss";

interface MonthStatisticsProps {}

const MonthStatistics: React.FC<MonthStatisticsProps> = () => {
  return <div className={s.monthStatistic}>MonthStatistics</div>;
};

export default MonthStatistics;
