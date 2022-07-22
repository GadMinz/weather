import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import changeTheme from "../../assets/img/change-theme.svg";
import Select from "react-select";

interface HeaderProps {}

const options = [
  { value: "city-1", label: "Москва" },
  { value: "city-2", label: "Санкт-Петербург" },
  { value: "city-3", label: "Ижевск" },
];

const customStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "rgba(71, 147, 255, 0.2)",
    width: "194px",
    height: "35px",
    border: "none",
    borderRadius: "10px",
  }),
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <img width={64} src={logo} alt="logo" />
        </div>
        <div className={s.title}>
          <h1>Погода</h1>
        </div>
      </div>
      <div className={s.wrapper}>
        <div>
          <img width={28} src={changeTheme} alt="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={customStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
