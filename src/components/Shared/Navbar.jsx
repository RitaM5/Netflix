import React from 'react';

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
                        <button className=' bg-[#e50914] px-5 py-3 rounded-md'>JOIN NOW</button>
                            <button className='btn btn-outline text-white'>Sign Out</button>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;