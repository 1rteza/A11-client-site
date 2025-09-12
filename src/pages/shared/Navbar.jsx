// import React, { use } from 'react';
import { use } from 'react';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import './Navbar.css'
import { motion } from "motion/react"

const Navbar = ({ toggleDarkMode, isDark }) => {
    const { user, signOutUser } = use(AuthContext);
    const bookings = '';

    const listItems = <>
        <NavLink to="/" className="px-4 mx-3 rounded-xl text-blue-400
        bg-white/10 backdrop-blur-md border border-white/20 
        transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
        hover:text-white 
            font-bold text-xs md:text-sm dark-toggle">Home</NavLink>
        <NavLink to="/allPackages" className="px-4 mx-3 rounded-xl text-blue-400
        bg-white/10 backdrop-blur-md border border-white/20 
        transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
        hover:text-white 
            font-bold text-xs md:text-sm dark-toggle">All Packages</NavLink>
        {
            user ?
                <NavLink to="/myBookings" className="px-4 mx-3 rounded-xl text-blue-400
                bg-white/10 backdrop-blur-md border border-white/20 
                transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
                hover:text-white 
                    font-bold text-xs md:text-sm dark-toggle">
                    {/* if bookings available, implement condition */}
                    My Bookings
                    <div className="badge badge-sm text-white bg-blue-400 font-semibold text-xs bottom-2 w-2 rounded-full border-0 absolute">{bookings ? bookings : 0}</div>
                </NavLink>
                :
                ''
        }

        <NavLink to="/about" className="px-4 mx-3 rounded-xl text-blue-400
        bg-white/10 backdrop-blur-md border border-white/20 
        transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
        hover:text-white 
            font-bold text-xs md:text-sm dark-toggle">About Us</NavLink>

    </>

    // const {  } = use(AuthContext);


    const handleLogout = () => {

        signOutUser()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Logged Out Successfully!",
                    showConfirmButton: false,
                    timer: 1200
                });
            })
            .catch(e => {
                console.log(e);
            })
    }



    return (
        <div className='mt-5 back py-5 dark-toggle bg-gradient-to-tr from-sky-100 via-blue-200 to-sky-300'>
            <div className="navbar bg-white border-5 border-blue-400 dark-toggle w-11/12  mx-auto rounded-xl py-4 px-3 md:px-5">
                <div className="navbar-start flex items-center dark-toggle">
                    <div className="dropdown dark-toggle">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-1  h-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-5 w-4 md:w-5 dark-toggle " fill="light-blue" viewBox="0 0 24 24" stroke="lightBlue"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow dark-toggle">
                            {listItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost hover:bg-white hover:border-0 hover:shadow-xs text-blue-400 dark-toggle font-bold italic px-0 md:text-3xl text-xl ">
                        {/* <GradientText
                        colors={["#40ffaa", "#4079ff", "#4079ff"]}
                        animationSpeed={8}
                        showBorder={false}
                        className="custom-class"
                    > */}
                        Chill & Travel
                        {/* </GradientText> */}
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 dark-toggle ">
                        {listItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate mr-1 md:mr-3 z-10">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onClick={toggleDarkMode} />

                        {/* sun icon */}
                        <svg
                            className="swap-on w-6 md:h-6 md:w-7 text-blue-400 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off w-6 md:h-6 md:w-7 text-blue-600 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>

                    </label>
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 border-1 hover:bg-slate-100 hover:border-blue-200 rounded-full">
                                        <img
                                            alt="User"
                                            src={user.photoURL || 'https://img.icons8.com/?size=100&id=42384&format=png&color=000000'} className='dark-toggle' />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-blue-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-blue-500 gap-2 dark-toggle">
                                    <NavLink to="/addPackage" className='px-4 mx-3 rounded-xl text-blue-400
    bg-white/10 backdrop-blur-md border border-white/20 
    transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
    hover:text-white 
        font-bold text-xs md:text-sm dark-toggle'>
                                        <p className="">
                                            Add Package
                                        </p>
                                    </NavLink>
                                    <NavLink to="/myPackages" className='px-4 mx-3 rounded-xl text-blue-400
    bg-white/10 backdrop-blur-md border border-white/20 
    transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
    hover:text-white 
        font-bold text-xs md:text-sm dark-toggle '>
                                        <p className="">
                                            Manage My Packages
                                        </p>
                                    </NavLink>
                                    <button onClick={handleLogout}>
                                        <li className='px-4 mx-3 rounded-xl text-blue-400
    bg-white/10 backdrop-blur-md border border-white/20 
    transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
    hover:text-white 
        font-bold text-xs md:text-sm dark-toggle text-left'>
                                            Logout
                                        </li>
                                    </button>
                                </ul>
                            </div>
                            :
                            <div className='space-x-1 md:space-x-2'>
                                <NavLink className="p-3 rounded-xl text-blue-400
                            bg-white/10 backdrop-blur-md border border-white/20 
                            transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
                            hover:text-white 
                                font-bold text-xs md:text-sm dark-toggle" to="/register">SignUp</NavLink>
                                <span className='text-blue-500  p-1 text-xs md:text-sm md:text-md font-bold'>/</span>

                                <NavLink className="p-3 rounded-xl text-blue-400
                            bg-white/10 backdrop-blur-md border border-white/20 
                            transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
                            hover:text-white font-bold text-xs md:text-sm dark-toggle" to="/login">LogIn</NavLink>
                            </div>
                    }
                </div>
            </div>

            {
                user ?
                    <>
                        {
                            isDark ?
                                '' :
                                <div
                                    className='absolute '>
                                    <div className=' relative left-55 bottom-9 md:left-145 lg:bottom-8 lg:left-205 xl:left-315'>

                                        <motion.img 
                                        src="https://img.icons8.com/?size=100&id=ClCGsFRdf5gA&format=png&color=000000"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
                                        className='w-15 md:w-18 lg:w-20 rotate-70' alt="" />
                                        <h2 className='text-[8px] md:text-[10px] lg:text-xs relative right-10 text-blue-500 font-semibold'>Try Dark Mode for better experience</h2>

                                    </div>
                                </div>
                        }
                    </>

                    :
                    <>
                        {
                            isDark ?
                                '' :
                                <div
                                    className='absolute '>
                                    <div className=' relative left-40 bottom-7 md:left-122 md:bottom-6 lg:left-180 xl:bottom-7 xl:left-290 '>

                                        <motion.img 
                                        src="https://img.icons8.com/?size=100&id=ClCGsFRdf5gA&format=png&color=000000" 
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                        className='w-15 md:18 lg:w-20 -rotate-40 scale-x-[-1]' alt="" />
                                        <h2 className='text-[8px] lg:text-xs relative right-10 text-blue-500 font-semibold'>Try Dark Mode for better experience</h2>

                                    </div>
                                </div>
                        }
                    </>
            }


        </div>
    );

};

export default Navbar;