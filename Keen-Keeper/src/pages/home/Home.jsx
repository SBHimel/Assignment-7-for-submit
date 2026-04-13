import React from 'react';
import Banner from '../../components/home/Banner';
import Counter from '../../components/home/Counter';
import Friends from '../../components/home/Friends';

const Home = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <Banner></Banner>
            <Counter></Counter>
            <Friends></Friends>
        </div>
    );
};

export default Home;