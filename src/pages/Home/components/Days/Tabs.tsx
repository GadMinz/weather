import React from "react";
import s from "./Days.module.scss";

interface TabsProps {}

const tabs: string[] = ["На неделю", "На 10 дней", "На месяц"];

const Tabs: React.FC<TabsProps> = () => {
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab: string) => (
          <div className={s.tab} key={tab}>
            {tab}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};

export default Tabs;
