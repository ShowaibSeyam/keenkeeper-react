import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router';

const MainLayut = () => {
    return (
        <div>
            <Navbar>
            </Navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
    
        </div>
    );
};

export default MainLayut;