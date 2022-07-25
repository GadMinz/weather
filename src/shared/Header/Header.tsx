import React from "react";
import s from "./Header.module.scss";
import Select from "react-select";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";

interface HeaderProps {}

const options = [
  { value: "city-1", label: "Москва" },
  { value: "city-2", label: "Санкт-Петербург" },
  { value: "city-3", label: "Ижевск" },
];

const Header: React.FC<HeaderProps> = () => {
  const [theme, setTheme] = React.useState("light");

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === "dark" ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "35px",
      border: "none",
      borderRadius: "10px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === "dark" ? "#ffffff" : "#000000",
    }),
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  React.useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;

    const components: string[] = [
      "--body-background",
      "--components-background",
      "--card-background",
      "--card-shadow",
      "--text-color",
    ];

    components.forEach((component: string) => {
      root.style.setProperty(
        `${component}-default`,
        `var(${component}-${theme})`
      );
    });
  }, [theme]);
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>
          <h1>Погода</h1>
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
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
