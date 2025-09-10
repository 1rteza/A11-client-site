import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner h-[60vh] flex flex-col justify-center items-center text-center  bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle">

            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">Explore the World</h1>
            <p className="mt-4 text-md md:text-lg opacity-90">Discover destinations, book trips, and travel smart</p>

            <button className="mt-6 btn btn-lg border-0 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white shadow-lg">
                Start Your Journey
            </button>
        </div>
    );
};

export default Banner;