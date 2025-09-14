import React, { use} from 'react';
import { NavLink, useOutletContext } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const Menu = () => {

    const { bookings } = useOutletContext();
    const { user } = use(AuthContext);


    const listItems = <>
        <NavLink to="/" className="px-5 py-2 rounded-xl text-blue-400
        bg-white/10 backdrop-blur-md border border-white/20 
        transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
        hover:text-white 
            font-bold    text-[10px] dark-toggle">Home</NavLink>
        <NavLink to="/allPackages" className="px-5 rounded-xl text-blue-400
        bg-white/10 backdrop-blur-md border border-white/20 
        transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
        hover:text-white 
            font-bold    text-[10px] dark-toggle">All Packages</NavLink>
        {
            user ?
                <NavLink to="/myBookings" className="px-5 rounded-xl text-blue-400
                bg-white/10 backdrop-blur-md border border-white/20 
                transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
                hover:text-white 
                    font-bold    text-[10px] dark-toggle">
                    {/* if bookings available, implement condition */}
                    My Bookings
                    <div className="badge badge-xs text-white bg-blue-400 font-semibold text-[10px] bottom-2 w-2 rounded-full border-0 absolute">{bookings ? bookings : 0}</div>
                </NavLink>
                :
                ''
        }

        <NavLink to="/about" className="px-5 rounded-xl text-blue-400
        bg-white/10 backdrop-blur-md border border-white/20 
        transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 
        hover:text-white 
            font-bold    text-[10px] dark-toggle">About Us</NavLink>

    </>


    return (
        <ul
            className="lg:hidden fixed bottom-7 left-1/2 -translate-x-1/2 
  z-50 flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm 
  rounded-2xl shadow-lg border border-white/20 dark-toggle text-center"
        >
            {listItems}
            {/* <li>
                    <a className="tooltip" data-tip="Home">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a className="tooltip" data-tip="Details">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a className="tooltip" data-tip="Stats">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </a>
                </li> */}
        </ul>
    );
};

export default Menu;