import React from 'react';
import Products from '../../Products/Products/Products';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Footer/>
        </div>
    );
};

export default Home;