import React from 'react';
import NewRelease from '../NewRelease/NewRelease';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='text-white my-container font-poppins'>
            <div className='pt-32 space-y-5'>
                <h1 className=' text-4xl font-extrabold'>Movies</h1>
                <p className='text-lg md:w-1/2'>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
            </div>
            <div className='my-12'>
                <h2 className='text-[24px]'>New Releases</h2>
                <NewRelease></NewRelease>
            </div>
            <div className='my-12'>
                <h2 className='text-[24px]'>Popular on Netflix</h2>
                <NewRelease></NewRelease>
            </div>
            <div className='my-12'>
                <h2 className='text-[24px]'>Comedy Movies</h2>
                <NewRelease></NewRelease>
            </div>
            <div className='my-12'>
                <h2 className='text-[24px]'>Thriller Movies</h2>
                <NewRelease></NewRelease>
            </div>
            <div className='blur-lg'>
                <div className='my-12'>
                    <h2 className='text-[24px]'>Comedy Movies</h2>
                    <NewRelease></NewRelease>
                </div>
                <div className='my-12'>
                    <h2 className='text-[24px]'>Thriller Movies</h2>
                    <NewRelease></NewRelease>
                </div>
            </div>
            <div className='text-center space-y-6'>
                <h1 className='text-4xl font-semibold'>There’s even more to watch.</h1>
                <p className='md:text-[20px] text-[15px] font-semibold md:w-1/2 mx-auto'>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                </p>
                <Link to="/joinnow">
                    <button className='mt-6 bg-[#e50914] px-12 py-4 rounded-md'>JOIN NOW</button>
                </Link>
            </div>
            <p className='mt-36 text-gray-400 text-lg font-semibold hover:underline underline-offset-2'>Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</p>
        </div>
    );
};

export default Home;