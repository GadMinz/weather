import React from "react";
import s from "./Home.module.scss";
import ThisDay from "./components/ThisDay/ThisDay";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={s.home}>
      <ThisDay />
    </div>
  );
};

export default Home;
