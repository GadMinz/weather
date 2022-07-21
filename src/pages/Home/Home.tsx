import React from 'react';
import s from './Home.module.scss'
interface HomeProps {

}


const Home: React.FC<HomeProps> = () => {
    return (
        <div className={s.home}>
            Home
        </div>
    );
};

export default Home;
