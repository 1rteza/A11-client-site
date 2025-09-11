import React from 'react';
import Navbar from './shared/Navbar';
import { Link } from 'react-router';
import Footer from './shared/Footer';
import errorSearch from '../assets/lotties/errrorSearch.json'
import oops from '../assets/lotties/oops.json'
import Lottie from 'lottie-react';
import { motion } from "motion/react"

const Error = () => {
    return (
        <div className='bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle back md:py-10'>
            <div className='pt-1 p-5 mx-auto items-center flex flex-col gap-5'>
                <div className=' mx-auto w-50 md:w-90'>
                    <Lottie animationData={errorSearch} className='w-50 md:w-72 lg:w-90 max-w-full' loop={true}></Lottie>
                    <Lottie animationData={oops} className='w-50 md:w-76 max-w-full -mt-10' loop={true}></Lottie>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="mt-4 text-md md:text-2xl font-bold opacity-90">You walked into a wrong path by mistake!</motion.p>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <Link
                        to="/"
                        className="mt-6 inline-block px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white shadow-lg"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Error;