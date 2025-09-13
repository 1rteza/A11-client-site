import React from 'react';
import Menu from './Menu';
import { useLoaderData } from 'react-router';
import FeaPack from './FeaPack';
import ScrollToTopButton from './ScrollToTopButton';

const Packages = () => {


    const packages = useLoaderData();
    console.log(packages);


    return (
        <div className='bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle back'>
            <div className='p-5 md:p-10'>
                <div className='p-2 md:p-5 md:py-10 border-4 rounded-2xl text-center'>
                    <ScrollToTopButton/>
                    <Menu></Menu>
                    <h2 className='font-bold text-3xl md:text-5xl mt-2 md:mt-5'>All Packages</h2>
                    <p className='mt-4'>Go through all of our wonderful packages to get an overview of where to chill!</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-10'>
                        {
                            packages.map((feaPack) =>
                                <FeaPack key={feaPack._id} feaPack={feaPack}></FeaPack>
                            )
                        }
                    </div>
                </div>
                <Menu></Menu>
            </div>
        </div>
    );
};

export default Packages;