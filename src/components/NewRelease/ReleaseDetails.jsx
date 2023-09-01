import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ReleaseDetails = () => {
    const [details, setDetails] = useState({})
    const dynamicId = useParams();
    const id = dynamicId.id;
    const data = useLoaderData();
    useEffect(() => {
        if (data) {
            const movieDetailsData = data.find(detail => detail.id === id)
            setDetails(movieDetailsData)
        }
    }, [])
    console.log(data);
    return (
        <div>
            <div className=' min-h-screen w-full py-32' style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 100) 0%, rgba(0, 0, 0, 0) 100%), url(${details?.background})`, backgroundSize: 'cover' }}>
                <div className='my-container  text-white  text-center lg:text-left space-y-6 font-poppins'>
                    <img src={details?.logo} className='lg:w-1/3 w-1/2  mx-auto lg:mx-0' alt="" srcset="" />
                    <h2 className='text-2xl mt-12 font-semibold  font-poppins text-white'>{details?.name}</h2>
                    <div className='inline-flex text-gray-400 gap-3 font-semibold'>
                        <h2>{details?.year} <span className='text-2xl'>|</span></h2>
                        <h2>{details?.views} <span className='text-2xl'>|</span></h2>
                        <h2>{details?.time} <span className='text-2xl'>|</span></h2>
                        <h2 className='mt-1'>{details?.title}</h2>
                    </div>
                    <p className='md:w-1/2 text-lg mx-auto lg:mx-0'>{details?.description}</p>
                    <p className='text-lg'><span className='text-gray-400'>Starring:</span> {details.starring}</p>
                </div>
            </div>
            <div className='my-container rounded-md items-center relative bottom-20 shadow-2xl  font-poppins md:flex justify-between bg-[#181818] text-white text-lg'>
                <p className=' inline-flex gap-4 items-center'>
                    <span className='font-cinzel text-[#e50914] text-5xl font-semibold'>N</span>
                    <span>Watch all you want.</span>
                </p>
                <button className=' bg-[#e50914] px-6 py-2 rounded-md block ml-14 md:ml-0'>JOIN NOW</button>
            </div>
            <div className='my-container font-poppins mt-8'>
                <div className='text-white inline-flex gap-3 items-center'>
                    <span className='text-3xl font-semibold'>Videos</span><span className='text-2xl'>|</span><span className='text-[20px]'>{details?.name}</span>
                </div>
                <img className='mt-7' src={details?.video} alt="" srcset="" />
                <svg viewBox="0 0 50 50" className="additional-video-play-icon h-11 w-11 relative bottom-16 left-6" data-uia="additional-video-play-icon"><g fill="none" fill-rule="nonzero"><path fill="#fff" d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0s25 11.2 25 25-11.2 25-25 25z" className="base w-11"></path><path fill="#000" d="M35.3 25l-15.6-8.6v17.2z" className="triangle"></path></g></svg>
                <p className='text-white text-[22px]'>Trailer: <span>{details?.name}</span></p>
            </div>
            <div className="my-container font-poppins">
                <h1 className='text-3xl font-semibold text-white'>More Details</h1>
                <div className='text-white text-lg grid lg:grid-cols-3 my-5'>
                    <div>
                        <h1 className='text-gray-400'>Watch offline</h1>
                        {details?.Watch_offline?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                    <div>
                        <h1 className='text-gray-400'>Genres</h1>
                        {details?.Genres?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                    <div>
                        <h1 className='text-gray-400'>This movie is...</h1>
                        {details?.This_movie_is?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className='text-white text-lg grid lg:grid-cols-3 my-5'>
                    <div>
                        <h1 className='text-gray-400'>Audio</h1>
                        {details?.Audio?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                    <div>
                        <h1 className='text-gray-400'>Subtitles</h1>
                        {details?.Subtitles?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className='text-white text-lg my-5'>
                    <h1 className='text-gray-400'>Cast</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        {details?.cast?.map((itemGroup, index) => (
                            <div key={index} className='block'>
                                {itemGroup.artis_name.map((artist, artistIndex) => (
                                    <p key={artistIndex}>{artist}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="my-container mt-12 font-poppins">
                <h1 className='text-3xl font-semibold text-white'>More Like This</h1>
                <div className=' grid grid-cols-1 md:grid-cols-3 my-4 gap-3'>
                    {

                        data?.map(release => (
                            <div className='w-full'>
                                <img className='w-[450px]' src={release?.image} alt="" srcset="" />
                            </div>
                        ))

                    }
                </div>
            </div>
            <div className="my-container mt-12 font-poppins text-white">
                <h1 className='text-3xl font-semibold text-white'>Coming Soon</h1>
                <div className='text-[20px] grid lg:grid-cols-3 grid-cols-1 gap-8 mt-5'>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer" className=' font-semibold'>Berlin</a>
                        <p className='mt-2'>Back to his golden age before the events of "Money Heist," Berlin and a masterful gang gather in Paris to plan one of his most ambitious robberies ever.</p>
                    </div>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer" className=' font-semibold'>ONE PIECE</a>
                        <p className='mt-2'>With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.</p>
                    </div>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer" className=' font-semibold'>Avatar The Last Airbender</a>
                        <p className='mt-2'>Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.</p>
                    </div>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer" className=' font-semibold'>The Archies</a>
                        <p className='mt-2'>Director/producer Zoya Akhtar and producer Reema Kagti reimagine the beloved Archie comics in this live action musical film set in 1960s India.</p>
                    </div>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer" className=' font-semibold'>Batman: The Animated Series</a>
                        <p className='mt-2'>The Caped Crusader struggles to overcome his demons while battling Gotham's most notorious villains, including the Joker, Penguin and Harley Quinn.</p>
                    </div>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer" className=' font-semibold'>The Powerpuff Girls</a>
                        <p className='mt-2'>Delightfully sweet sisters Blossom, Bubbles and Buttercup have dedicated their lives to saving the world from crime and fighting the forces of evil.</p>
                    </div>
                </div>
                <div className='text-[20px] grid lg:grid-cols-3 grid-cols-1 gap-8 mt-5'>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer" className=' font-semibold'>Choona</a>
                        <p className='mt-2'>When an unlikely group of misfits discovers a common enemy in the same ruthless yet superstitious politician, they plot a heist to exact revenge.</p>
                    </div>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer" className=' font-semibold'>3 Body Problem</a>
                        <p className='mt-2'>A fateful decision in 1960s China echoes across space and time to a group of scientists in the present, forcing them to face humanity's greatest threat.</p>
                    </div>
                </div>
                <div className='text-[20px] grid lg:grid-cols-3 grid-cols-1 gap-8 my-20'>
                     <div>
                        <p>
                        Go behind the scenes of Netflix TV shows and movies, see what's coming soon and watch bonus videos on Tudum.com.
                        </p>
                     </div>
                </div>
            </div>
        </div>

    );
};

export default ReleaseDetails;