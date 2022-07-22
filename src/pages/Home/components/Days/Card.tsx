import React from "react";
import s from "./Days.module.scss";
import { Day } from "./Days";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";

const Card: React.FC<Day> = ({
  day,
  day_info,
  info,
  temp_day,
  icon_id,
  temp_night,
}) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day}</div>
      <div className={s.day__info}>{day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={s.temp__day}>{temp_day}</div>
      <div className={s.temp__night}>{temp_night}</div>
      <div className={s.info}>{info}</div>
    </div>
  );
};

export default Card;
