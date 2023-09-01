import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';

const Layout = () => {
    return (
        <div className='bg-black  min-h-screen overflow-hidden'>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;