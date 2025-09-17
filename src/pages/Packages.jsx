import React, { useState } from 'react';
import Menu from './Menu';
import { useLoaderData, useNavigate } from 'react-router';
import FeaPack from './FeaPack';
import ScrollToTopButton from './ScrollToTopButton';

const Packages = () => {


    const packages = useLoaderData(); // all packages loaded once
    const [search, setSearch] = useState("");

    // Filter packages based on search
    const filteredPackages = packages.filter(pkg =>
        pkg.tourName?.toLowerCase().includes(search?.toLowerCase()) ||
        pkg.destination?.toLowerCase().includes(search?.toLowerCase())
    );



    return (
        <div className='bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle back'>
            <div className='p-5 md:p-10'>
                <div className='p-2 md:p-5 md:py-10 border-4 rounded-2xl text-center'>
                    <ScrollToTopButton />
                    <Menu></Menu>
                    <h2 className='font-bold text-3xl md:text-5xl mt-2 md:mt-5'>All Packages</h2>
                    <p className='mt-4'>Go through all of our wonderful packages to get an overview of where to chill!</p>

                    <div className="my-6">
                        <input
                            type="text"
                            placeholder="Search by name or destination..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full md:w-1/2 p-3 border-2 rounded-lg shadow-sm"
                        />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-10'>
                        {
                            filteredPackages.map((feaPack) =>
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