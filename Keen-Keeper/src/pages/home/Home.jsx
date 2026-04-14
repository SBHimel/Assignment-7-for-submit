import React from 'react';

import Counter from '../../components/home/Counter';
import Banner from '../../components/home/Banner';
import FriendsCard from '../../components/home/FriendsCard';



const Home = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <Banner></Banner>
            <Counter></Counter>
            <FriendsCard></FriendsCard>
        </div>
    );
};

export default Home;