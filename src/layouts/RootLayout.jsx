import React, { use, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const RootLayout = () => {


    const { user } = use(AuthContext);
    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () => {
        if (!user) return;
        try {
            const res = await fetch(
                `https://chill-and-travel-server.vercel.app/bookings?email=${user.email}`
            );
            const data = await res.json();
            setBookings(data.length);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBookings();
    });


    const [isDark, setIsDark] = useState(false);
    const location = useLocation();

    const toggleDarkMode = () => {
        const elements = document.getElementsByClassName("dark-toggle");

        if (!isDark) {
            // Switching to dark mode
            for (let el of elements) {
                el.classList.add("dark");
            }
        } else {
            // Switching to light mode
            for (let el of elements) {
                el.classList.remove("dark");
            }
        }

        setIsDark(!isDark);

    };

    useEffect(() => {
        if (isDark) {
            const elements = document.getElementsByClassName("dark-toggle");
            for (let el of elements) el.classList.add("dark");
        }
    }, [location, isDark]);



    return (
        <div className='dark-toggle back -my-5 min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 '>
            <Navbar bookings={bookings} refreshBookings={fetchBookings} isDark={isDark} toggleDarkMode={toggleDarkMode}></Navbar>
            <Outlet context={{ fetchBookings,isDark, toggleDarkMode, bookings }}></Outlet>
            <Footer context={toggleDarkMode}></Footer>
        </div>
    );
};

export default RootLayout;