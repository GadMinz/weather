import React from "react";
import s from "./Popup.module.scss";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import ThisDayInfoItem from "../../pages/Home/components/ThisDayInfo/ThisDayInfoItem";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";

interface PopupProps {}

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

const Popup: React.FC<PopupProps> = () => {
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Среда</div>
          <div className={s.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.day__city}>
            Время: <span>Санкт-Петербург</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item: Item) => (
            <ThisDayInfoItem key={item.icon_id} {...item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
