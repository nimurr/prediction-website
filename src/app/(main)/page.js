
import Bonuses from '@/Components/Common/Home/Bonuses';
import Hero from '@/Components/Common/Home/Hero';
import Poker from '@/Components/Common/Home/Poker';
import Predictions from '@/Components/Common/Home/Predictions';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Hero />
            <Predictions />
            <Bonuses />
            <Poker />
        </div>
    );
}

export default Page;
