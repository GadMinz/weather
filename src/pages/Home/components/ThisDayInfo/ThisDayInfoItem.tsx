import React from "react";
import s from "./ThisDayInfo.module.scss";
import IndicatorSvgSelector from "../../../../assets/icons/indicators/IndicatorSvgSelector";

interface ThisDayInfoItemProps {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayInfoItem: React.FC<ThisDayInfoItemProps> = ({
  icon_id,
  name,
  value,
}) => {
  return (
    <div className={s.item}>
      <div className={s.indicator__icon}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  );
};

export default ThisDayInfoItem;
