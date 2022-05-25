import React from 'react';
import Products from '../../Products/Products/Products';
import Review from '../../Review/Review';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Review /> 
            <Footer />
        </div>
    );
};

export default Home;