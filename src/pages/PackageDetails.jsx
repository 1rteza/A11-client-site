import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import Menu from './Menu';
import ScrollToTopButton from './ScrollToTopButton';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { motion } from "motion/react"
import axios from "axios";
import { Link } from 'react-router';
import './Modal.css'
import Swal from 'sweetalert2';

const PackageDetails = () => {

    const data = useLoaderData();
    const {
        _id,
        tour_name,
        image,
        duration,
        departure_location,
        destination,
        price,
        departure_date,
        package_details,
        guide_name,
        guide_email,
        guide_photo,
        guide_contact_no,
    } = data;

    const [bookingCount, setBookingCount] = useState(data.bookingCount || 0);

    const { user } = use(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [specialNote, setSpecialNote] = useState("");


    const handleBooking = async (e) => {
        e.preventDefault();

        const newBooking = {
            tour_id: _id,
            tour_name,
            price,
            buyer_name: user?.displayName,
            buyer_email: user?.email,
            booking_date: new Date().toISOString(),
            notes: specialNote,
            status: "pending",
            guide_name,
            guide_email,
            guide_contact_no,
            departure_date,
            departure_location,
            destination,
        };
        axios
            .post("https://chill-and-travel-server.vercel.app/bookings", newBooking)
            .then(res => {
                if (res.data.success) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your booking has been confirmed. Status: Pending",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setShowModal(false);
                    setBookingCount(prev => prev + 1);
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                    });
                }
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            });

    };

    return (
        <div className="bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-600 min-h-screen p-6 pt-8 dark-toggle back">
            <ScrollToTopButton />
            <Menu />

            {/* Tour Card */}
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden dark-toggle banner ">
                <img src={image} alt={tour_name} className="w-full h-72 object-cover" />

                <div className="p-6">
                    <h1 className="text-3xl font-bold  mb-4">{tour_name}</h1>

                    {/* Guide Info */}
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={guide_photo}
                            alt={guide_name}
                            className="w-16 h-16 rounded-full border-2 border-blue-400 object-cover"
                        />
                        <div>
                            <p className="font-semibold text-lg">{guide_name}</p>
                            <p className="text-sm text-gray-900">{guide_email}</p>
                            <p className="text-sm text-green-600">📞 {guide_contact_no}</p>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <p><span className="font-semibold">Duration:</span> {duration}</p>
                        <p><span className="font-semibold ">Price:</span> <span className='text-green-500'> ${price}</span></p>
                        <p><span className="font-semibold">Departure:</span> {departure_location} ({departure_date})</p>
                        <p><span className="font-semibold">Destination:</span> {destination}</p>
                        <p><span className="font-semibold ">Bookings:</span> <span className='text-green-500 text-lg'>{bookingCount}</span> </p>
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-2">Package Details</h2>
                        <p className="text-white-700 leading-relaxed">{package_details}</p>
                    </div>

                    {/* Book Now */}
                    <div className="mt-8 flex justify-end">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <button
                                onClick={() => setShowModal(true)}
                                className="mt-6 inline-block px-6 py-3 rounded-xl font-semibold cursor-pointer 
                            bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-blue-600 hover:to-sky-500 text-white shadow-lg"
                            >
                                Book Now
                            </button>

                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 dark-toggle modaal">
                    <div className=" bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 rounded-xl shadow-lg w-full max-w-md p-6 dark-toggle banner">
                        <h2 className="text-2xl font-bold mb-4 text-blue-600">Book Tour</h2>
                        <form onSubmit={handleBooking} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Tour Package</label>
                                <input type="text" value={tour_name} disabled className="input input-bordered w-full bg-blue-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Price</label>
                                <input type="text" value={`$${price}`} disabled className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Your Name</label>
                                <input type="text" value={user?.displayName} disabled className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Your Email</label>
                                <input type="email" value={user?.email} disabled className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Special Note</label>
                                <textarea
                                    className="textarea textarea-bordered w-full "
                                    placeholder="Any special requests?"
                                    value={specialNote}
                                    onChange={(e) => setSpecialNote(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-end gap-2">
                                <button type="button" onClick={() => setShowModal(false)} className="px-6 py-3 rounded-xl font-semibold cursor-pointer text-red-500 bg-white hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500 hover:text-white">
                                    Cancel
                                </button>
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <button
                                        type="submit"
                                        className=" inline-block px-6 py-3 rounded-xl font-semibold cursor-pointer 
                            bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-blue-600 hover:to-sky-500 text-white shadow-lg"
                                    >
                                        Confirm Booking
                                    </button>

                                </motion.div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
export default PackageDetails;