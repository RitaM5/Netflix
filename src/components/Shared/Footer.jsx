import React from 'react';

const Footer = () => {
    return (
        <div className='my-container text-lg pt-5'>
            <h1 className='text-2xl text-gray-400 font-semibold hover:underline underline-offset-2 my-5'>Questions? Contact us.</h1>
            <div className='text-gray-400 my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='space-y-3'>
                    <p className='hover:underline underline-offset-2'>FAQ</p>
                    <p className='hover:underline underline-offset-2'>Investor Relations</p>
                    <p className='hover:underline underline-offset-2'>Privacy</p>
                    <p className='hover:underline underline-offset-2'>Speed Test</p>
                </div>
                <div className='space-y-3'>
                    <p className='hover:underline underline-offset-2'>Help Center</p>
                    <p className='hover:underline underline-offset-2'>Jobs</p>
                    <p className='hover:underline underline-offset-2'>Cookie Preferences</p>
                    <p className='hover:underline underline-offset-2'>Legal Notices</p>
                </div>
                <div className='space-y-3'>
                    <p className='hover:underline underline-offset-2'>Account</p>
                    <p className='hover:underline underline-offset-2'>Ways to Watch</p>
                    <p className='hover:underline underline-offset-2'>Corporate Information</p>
                    <p className='hover:underline underline-offset-2'>Only on Netflix</p>
                </div>
                <div className='space-y-3'>
                    <p className='hover:underline underline-offset-2'>Media Center</p>
                    <p className='hover:underline underline-offset-2'>Terms of Use</p>
                    <p className='hover:underline underline-offset-2'>Contact Us</p>
                </div>
                <div className='space-y-3 mt-6'>
                    <p className='hover:underline underline-offset-2'>Netflix Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;