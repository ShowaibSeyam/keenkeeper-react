import React from 'react';
import { IoMdHome } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import { Link, NavLink } from 'react-router'; // Import NavLink!
import logoImage from '../assets/logo.png'

const Navbar = () => {
    // You can adjust this hex code to exactly match your design's green
    const activeStyle = "bg-[#1b4d41] text-white focus:bg-[#1b4d41] focus:text-white";
    const inactiveStyle = "text-gray-500 hover:text-gray-700";

    return (
     
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-8"> 
            <div className="flex-1">
               <Link to="/" className="btn btn-ghost hover:bg-transparent">
                    <img 
                        src={logoImage} 
                        alt="KeenKeeper Logo" 
                        className="h-8 md:h-10 w-auto" 
                    />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                        >
                            <IoMdHome className="text-lg" /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/timeline" 
                            className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                        >
                            <IoTimeOutline className="text-lg" /> Timeline
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/stats"
                            className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                        >
                            <ImStatsDots className="text-lg" /> Stats
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;