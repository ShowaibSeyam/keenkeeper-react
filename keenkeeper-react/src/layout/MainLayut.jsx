import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayut = () => {
    return (
        <div>
            <Navbar>

            </Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayut;