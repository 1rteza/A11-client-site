import React from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router';
import ScrollToTopButton from './ScrollToTopButton';

const About = () => {
    return (
        <div className="bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle back">
            <section className="text-center max-w-3xl mx-auto py-10 md:py-16 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-600 dark:text-blue-400"
                >
                    “Travel isn’t just about where you go, it’s about how it makes you feel.”
                </motion.h1>
                <p className="text-lg opacity-90">
                    At <span className="font-semibold">Travel & Chill</span>, we believe every
                    journey should be stress-free, inspiring, and unforgettable. From
                    discovering new places to planning your dream trip, we’re here to make
                    traveling as easy as chilling.
                </p>
            </section>
            <ScrollToTopButton/>
            {/* Storytelling Section */}
            <section className="text-center max-w-4xl mx-auto py-10 md:py-16 px-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    🛫 Our Journey
                </h2>
                <p className="text-md md:text-lg opacity-90 leading-relaxed">
                    We started with a simple idea: make travel smarter, simpler, and more
                    exciting. No more endless tabs, confusing plans, or stressful bookings.
                    With Travel & Chill, you’ll find everything you need — all in one place.
                    <br />
                    <br />
                    Whether you dream of beaches, bustling cities, or quiet mountain
                    escapes, we help turn those dreams into reality.
                </p>
            </section>

            {/* Cards Section */}
            <section className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto px-6 py-10 md:py-16">
                <motion.div
                    whileHover={{ scale: 1.05 }} className="card bg-white/70 backdrop-blur-md border border-slate-200 dark-toggle dark shadow-lg">
                    <div className="card-body  ">
                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                            🌍 Discover Destinations
                        </h3>
                        <p>
                            From hidden gems to world-famous landmarks, find trips tailored to
                            your style of adventure.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }} className="card bg-white/70 backdrop-blur-md border border-slate-200 dark-toggle dark shadow-lg">
                    <div className="card-body">
                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                            🛎 Smart Booking
                        </h3>
                        <p>
                            Book with ease, knowing your plans are secure, simple, and
                            stress-free.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }} className="card bg-white/70 backdrop-blur-md border border-slate-200 dark-toggle dark shadow-lg">
                    <div className="card-body">
                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                            💡 Travel Smarter
                        </h3>
                        <p>
                            Guides, tips, and insider recommendations — helping you enjoy every
                            step of the journey.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }} className="card bg-white/70 backdrop-blur-md border border-slate-200 dark-toggle dark shadow-lg">
                    <div className="card-body">
                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                            🤝 A Traveler’s Community
                        </h3>
                        <p>
                            Join a growing community of explorers who share stories, ideas, and
                            inspiration.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Closing Section */}
            <section className="text-center py-10 md:py-16 px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    🌴 Why Travel & Chill?
                </h2>
                <p className="max-w-2xl mx-auto text-md md:text-lg opacity-90 mb-6">
                    Because exploring the world should feel as effortless as relaxing with
                    friends — simple, joyful, and unforgettable.
                </p>

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


            </section>
        </div>

    );
};

export default About;