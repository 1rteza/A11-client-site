import React from 'react';
import { motion } from "motion/react"
import './Banner.css'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="banner h-[60vh] flex flex-col justify-center items-center text-center  bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle">


            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-bold drop-shadow-lg">Explore the World</motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="mt-4 text-md md:text-lg opacity-90">Discover destinations, book trips, and travel smart</motion.p>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                <Link
                    to="/allPackages"
                    className="mt-6 inline-block px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white shadow-lg"
                >
                    Start Your Journey
                </Link>
            </motion.div>


        </div>
    );
};

export default Banner;