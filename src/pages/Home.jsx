import React from 'react';
import Banner from './Banner';
import FeaturedPackages from './FeaturedPackages';
import ScrollToTopButton from './ScrollToTopButton';
import About from './About';

const Home = () => {
    return (
        <div className="bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 dark-toggle">
            {/* Hero Section */}
            <Banner></Banner>
            <ScrollToTopButton/>
            <FeaturedPackages></FeaturedPackages>
            {/* <About></About> */}
        </div>

    );
};

export default Home;