import React, { use, useEffect, useState } from 'react';
import Menu from './Menu';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import ScrollToTopButton from './ScrollToTopButton';

const MyBookings = () => {

    
        const { user } = use(AuthContext);
    const [bookings, setBookings] = useState([]);

    // Fetch bookings of logged-in user
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/bookings?buyer_email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setBookings(data))
                .catch((err) => console.error(err));
        }
    }, [user]);

    // Handle confirm booking (status → completed)
    const handleConfirm = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/bookings/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: "completed" }),
            });

            if (res.ok) {
                setBookings((prev) =>
                    prev.map((b) => (b._id === id ? { ...b, status: "completed" } : b))
                );
                alert("Booking confirmed ✅");
            } else {
                alert("Failed to confirm booking ❌");
            }
        } catch (error) {
            console.error(error);
            alert("Error confirming booking ❌");
        }
    };



    return (
        <div className='bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle back'>
            <ScrollToTopButton/>
            <Menu></Menu>
            <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>

            {/* Empty state */}
            {bookings.length === 0 ? (
                <p className="text-center text-gray-600">No bookings found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg">
                        <thead className="bg-blue-500 text-white">
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
                                <tr key={booking._id} className="hover:bg-blue-50">
                                    <td className="font-semibold">{booking.tour_name}</td>
                                    <td>
                                        <div>
                                            <p>{booking.guide_name}</p>
                                            <p className="text-sm text-gray-500">
                                                📞 {booking.guide_contact_no}
                                            </p>
                                        </div>
                                    </td>
                                    <td>{booking.departure_date}</td>
                                    <td>{booking.departure_location}</td>
                                    <td>{booking.destination}</td>
                                    <td>{booking.special_note || "—"}</td>
                                    <td>
                                        <span
                                            className={`badge ${booking.status === "completed"
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
                                                className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white"
                                            >
                                                Confirm
                                            </button>
                                        ) : (
                                            <button className="btn btn-sm btn-disabled">
                                                Completed
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyBookings;