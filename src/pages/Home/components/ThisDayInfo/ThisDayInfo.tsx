import React from "react";
import s from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/img/cloud.png";
import ThisDayInfoItem from "./ThisDayInfoItem";

interface ThisDayInfoProps {}
interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayInfo: React.FC<ThisDayInfoProps> = () => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayInfoItem key={item.icon_id} {...item} />
        ))}
      </div>
      <img className={s.cloud} src={cloud} alt="cloud" />
    </div>
  );
};

export default ThisDayInfo;
