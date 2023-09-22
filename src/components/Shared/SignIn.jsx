import React from 'react';
import join from '../../assets/join.jpg';
import { Link } from 'react-router-dom';
const SignIn = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${join})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
    };
    return (
        <div style={divStyle} className='font-poppins overflow-hidden'>
            <header className="pt-4 w-full">
                <nav className="flex justify-between items-center my-container">
                    <div>
                        <Link to="/">
                            <h1 className='md:text-5xl text-3xl font-cinzel text-[#e50914] font-semibold'>NETFLIX</h1>
                        </Link>
                    </div>
                </nav>
            </header>
            <div className='my-container text-center py-20'>
                <div className='md:w-[600px] bg-black opacity-70 rounded-lg p-8 mx-auto my-36 space-y-2'>
                    <h1 className='text-3xl text-left md:ml-10 text-white font-semibold'>Sign In</h1>
                    <div className='py-8 text-left md:text-center space-y-3'>
                        <input type="text" placeholder="Your Email" className="input h-16 input-bordered w-full max-w-md" /><br />
                        <input type="password" placeholder="Your Password" className="input h-16 input-bordered w-full max-w-md" />
                    </div>
                    <div className='w-full'>
                        <div className=' text-left md:text-center space-y-3'>
                            <input type="button" value="Sign In" className="input bg-[#e50914] text-white text-lg font-semibold h-16 input-bordered w-full max-w-md" />
                        </div>
                        <div className='py-4 md:flex justify-between w-full max-w-md lg:ml-12'>
                            <div className="form-control  text-white">
                                <div className='inline-flex gap-2'>
                                    <input type="checkbox" className="checkbox bg-gray-500" />
                                    <span className="text-lg">Remember me</span>
                                </div>
                            </div>
                            <p className='text-white text-lg text-left mt-2 md:mt-0'>Need help?</p>
                        </div>
                        <div className='py-16 w-full max-w-md text-left lg:ml-12'>
                            <p className='text-lg text-gray-500'>New to Netflix?<span className='text-white'> Sign up now.</span></p>
                            <p className='text-lg my-3 text-gray-500'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-blue-700'>  Learn more.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;