import React from 'react';
import Banner from './Banner';

const Home = () => {
    return (
        <div className="bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 dark-toggle">
            {/* Hero Section */}
            <Banner></Banner>
            <div className='min-h-screen dark-toggle banner bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300'></div>
            <div className='min-h-screen dark-toggle banner bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300'></div>
        </div>

    );
};

export default Home;