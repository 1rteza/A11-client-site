import React from 'react';
import { motion } from "motion/react"
import './Card.css'
import { Link } from 'react-router';

const FeaPack = ({ feaPack }) => {

    console.log(feaPack);

    const { _id,image, tour_name, guide_name, guide_photo, duration, departure_date, price } = feaPack;

    console.log(image);

    return (
        <motion.div
            whileHover={{ scale: 1.03 }} transition={{ duration: 0.2, delay: 0.1 }} className="card border-3 dark-card cursor-pointer bg-base-100 dark-toggle shadow-md">
            <figure className="h-56 w-full overflow-hidden">
                <img
                    src={image}
                    alt={tour_name}
                    className="h-full w-full object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{tour_name}</h2>

                {/* Guide Info */}
                <div className="flex items-center gap-2 ">
                    <img
                        src={guide_photo}
                        alt={guide_name}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-semibold text-blue-500">{guide_name}</span>
                </div>

                {/* Tour Details */}
                <p className="text-sm text-cyan-600">Duration: {duration}</p>
                <p className="text-sm text-zinc-400">Departure: {departure_date}</p>
                <p className="text-lg font-semibold text-green-500">BDT {price}</p>

                {/* Actions */}
                <div className="card-actions justify-center mt-2">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <Link
                            to={`/package/${_id}`}
                            className="mt-6 inline-block px-6 py-3 rounded-xl font-semibold 
                            bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-500 hover:to-teal-400 text-white shadow-lg"
                        >
                            View Details
                        </Link>

                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default FeaPack;