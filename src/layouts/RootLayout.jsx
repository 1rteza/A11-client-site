import React, { use, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const RootLayout = () => {


     const { user } = use(AuthContext);

    // useEffect(() => {
    //     if (!user) return;
    //     const url = `https://plantea-server-1rteza-1rtezas-projects.vercel.app/plants`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(plants => {
    //             const myList = plants.filter(p => p.userEmail === user.email);
    //             setPlants(myList);
    //         })
    //         .catch(console.error);
    // }, [user]);



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
            <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode}></Navbar>
            <Outlet context={{isDark, toggleDarkMode}}></Outlet>
            <Footer context={toggleDarkMode}></Footer>
        </div>
    );
};

export default RootLayout;