import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router';

const MainLayut = () => {
    return (
        <div>
            <Navbar>
            </Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
    
        </div>
    );
};

export default MainLayut;