import React, { use, useEffect, useState } from 'react';
import Menu from './Menu';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import ScrollToTopButton from './ScrollToTopButton';
import './MyBookings.css'
import Swal from 'sweetalert2';
import { useLoaderData, useOutletContext } from 'react-router';


const MyBookings = () => {


    const { user } = use(AuthContext);
    const [bookings, setBookings] = useState([]);
    const {fetchBookings} = useOutletContext();


    useEffect(() => {
        if (user?.email) {
            fetch(`https://chill-and-travel-server.vercel.app/bookings?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setBookings(data))
                .catch((err) => console.error(err));
        }
    }, [user]);


    const handleConfirm = async (id) => {
        try {
            const res = await fetch(`https://chill-and-travel-server.vercel.app/bookings/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: "confirmed" }),
            });

            if (res.ok) {
                setBookings((prev) =>
                    prev.map((b) => (b._id === id ? { ...b, status: "confirmed" } : b))
                );
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your tour has been confirmed",
                    showConfirmButton: false,
                    timer: 1500
                });
                fetchBookings();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
            });
        }
    };



    return (
        <div className='min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle back'>
            <ScrollToTopButton />
            <Menu></Menu>
            <div className='p-5 md:p-10'>
                <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>

                {/* Empty state */}
                {bookings.length === 0 ? (
                    <p className="text-center text-gray-600">No bookings found.</p>
                ) : (
                    <div className="overflow-x-auto rounded-lg">
                        <table className="table-xs md:table-md xl:table-lg  w-full dark-toggle tableContainer">
                            <thead className="tableHeader">
                                <tr>
                                    <th>Tour</th>
                                    <th>Guide</th>
                                    <th>Departure</th>
                                    <th>Location</th>
                                    <th>Destination</th>
                                    <th>Special Note</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <tr key={booking._id} className="tableRow">
                                        <td className="font-semibold">{booking.tour_name}</td>
                                        <td>
                                            <div>
                                                <p>{booking.guide_name}</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    📞 {booking.guide_contact_no}
                                                </p>
                                            </div>
                                        </td>
                                        <td className='text-sm'>{booking.departure_date}</td>
                                        <td>{booking.departure_location}</td>
                                        <td>{booking.destination}</td>
                                        <td>{booking.notes || "—"}</td>
                                        <td>
                                            <span
                                                className={`badge ${booking.status === "confirmed"
                                                    ? "badge-success"
                                                    : "badge-warning"
                                                    }`}
                                            >
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td>
                                            {booking.status === "pending" ? (
                                                <button
                                                    onClick={() => handleConfirm(booking._id)}
                                                    className="btn btn-sm rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 text-white border-0"
                                                >
                                                    Confirm
                                                </button>
                                            ) : (
                                                <button className="btn btn-sm btn-disabled">Confirmed</button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                )}
            </div>
        </div>
    );
};

export default MyBookings;