import React from 'react';
import Ladies from '../../Products/Ladies/Ladies';
import Panjabies from '../../Products/Panjabies/Panjabies';
import Sharts from '../../Products/Shart/Sharts';
import Shoes from '../../Products/Shoes/Shoes';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Panjabies/>
            <Sharts/>
            <Ladies/>
            <Shoes/>
        </div>
    );
};

export default Home;