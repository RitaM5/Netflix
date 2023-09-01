import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="bg-[#000] fixed w-full z-10">
                <nav className="flex justify-between items-center my-container">
                    <div>
                        <h1 className='text-4xl font-cinzel text-[#e50914] font-semibold md:block hidden'>NETFLIX</h1>
                    </div>

                    <div className="flex items-center gap-6 text-white font-poppins text-lg">
                        <p className='lg:block hidden'>UNLIMITED TV SHOWS & MOVIES</p>
                        <Link to="/joinnow">
                            <button className=' bg-[#e50914] px-5 py-3 rounded-md'>JOIN NOW</button>
                        </Link>
                        <Link to="/signin">
                            <button className='border rounded-md py-2 px-5 text-white'>Sign In</button>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;