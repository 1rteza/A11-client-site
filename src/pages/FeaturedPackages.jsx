import React from 'react';
import { useLoaderData } from 'react-router';
import FeaPack from './FeaPack';
import { motion } from "motion/react"
import { Link } from 'react-router';

const FeaturedPackages = () => {


    const packages = useLoaderData();

    const featuredPackages = packages.slice(0, 6);

    console.log(featuredPackages);


    return (
        <div className="banner flex flex-col justify-center items-center text-center  bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle py-5 md:py-10 p-2 md:p-5">
            <div className='p-2 md:p-5 md:py-10 border-4 rounded-2xl'>
                <h2 className='font-bold text-3xl md:text-5xl mt-2 md:mt-5'>Featured Packages</h2>
                <p className='mt-4'>Go through some of our featured packages to get an overview of where to visit!</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-10'>
                    {
                        featuredPackages.map((feaPack) =>
                            <FeaPack key={feaPack._id} feaPack={feaPack}></FeaPack>
                        )
                    }
                </div>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <Link
                        to="/allPackages"
                        className="inline-block px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white shadow-lg"
                    >
                        Show All Packages
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default FeaturedPackages;