import React, { use, useEffect, useRef, useState } from 'react';
import { motion } from "motion/react"
import './Banner.css'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import Menu from './Menu';
import GlobeBanner from './GlobeBanner';
import Globe from "react-globe.gl";


const Banner = () => {

    const globeRef = useRef();
    const [size, setSize] = useState({
        width: window.innerWidth < 768 ? 300 : 400, // smaller for mobile
        height: window.innerWidth < 768 ? 300 : 400
    });

    useEffect(() => {
        // handle resize
        const handleResize = () => {
            setSize({
                width: window.innerWidth < 768 ? 300 : 400,
                height: window.innerWidth < 768 ? 300 : 400
            });
        };
        window.addEventListener("resize", handleResize);

        if (globeRef.current) {
            globeRef.current.controls().enableZoom = false;
            globeRef.current.controls().enablePan = false;
            globeRef.current.controls().enableRotate = false;
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 0.8;
        }

        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (
        <div className="banner  bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle ">

            <div className='flex flex-col justify-center items-center text-center pb-15'>

                <div className="  pointer-events-none ">
                    <Link  to="/allPackages">
                        <Globe
                            ref={globeRef}
                            width={size.width}
                            height={size.height}
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            backgroundColor="rgba(0,0,0,0)"
                        />
                    </Link>
                </div>


                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-bold drop-shadow-lg z-20 -mt-10">Explore the World</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="mt-4 text-md md:text-lg opacity-90 z-20">Discover destinations, book trips, and travel smart</motion.p>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className=' z-20'
                >
                    <Link
                        to="/allPackages"
                        className="mt-6 inline-block px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white shadow-lg"
                    >
                        Start Your Journey
                    </Link>
                </motion.div>
            </div>

            <Menu></Menu>
        </div>
    );
};

export default Banner;