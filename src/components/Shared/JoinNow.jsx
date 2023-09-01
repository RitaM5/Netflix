import React from 'react';
import join from '../../assets/join.jpg';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
const JoinNow = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${join})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
    };
    return (
        <div>
            <div style={divStyle} className='font-poppins'>
                <header className="pt-4 w-full">
                    <nav className="flex justify-between items-center my-container">
                        <div>
                            <Link to="/">
                                <h1 className='md:text-5xl text-3xl font-cinzel text-[#e50914] font-semibold'>NETFLIX</h1>
                            </Link>
                        </div>
                        <div className="flex items-center gap-6 text-white font-poppins text-lg">
                            <button className=' bg-[#e50914] px-7 md:py-3 py-2 rounded-md'>Sign Out</button>
                        </div>
                    </nav>
                </header>
                <div className='text-white my-container text-center space-y-6 relative top-80'>
                    <h3 className='text-[20px] font-semibold'>Welcome back!</h3>
                    <h1 className='text-5xl font-extrabold'>Unlimited movies, TV shows, and more</h1>
                    <p className='text-[20px] font-semibold'>Plans now start at USD2.99/month.</p>
                    <button className=' bg-[#e50914] px-10 py-4 text-lg font-semibold rounded-md inline-flex gap-2 items-center'><span>Finish Sign Up</span><FiChevronRight size={20} /></button>
                </div>
            </div>
            <div className='lg:flex items-center  text-white my-container my-12'>
                <div className=' space-y-7 px-3 lg:px-0'>
                    <h1 className='text-5xl font-extrabold'>Enjoy on your TV</h1>
                    <p className='text-[20px] font-semibold w-1/2'>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </p>
                </div>
                <div>
                    <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="nmhp-card-animation-asset-image" className="default-ltr-cache-1d3w5wq w-[500px]" />
                </div>
            </div>
            <div className=' border border-b-4 border-gray-700'></div>
            <div className='lg:flex items-center gap-8  text-white my-container my-16 relative lg:left-32'>
                <div>
                    <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="nmhp-card-animation-asset-image" className="default-ltr-cache-1d3w5wq h-[500px] w-[650px]" />
                    <div className='grid grid-cols-3 items-center border rounded-lg bg-slate-900 w-[350px] mx-auto relative bottom-36'>
                        <div className='w-20'>
                            <img className='w-full ' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" srcset="" />
                        </div>
                        <div>
                            <p className='font-semibold'>Stranger Things</p>
                            <p className=' text-blue-700'>Downloading...</p>
                        </div>
                        <div className='ml-14'>
                            <FaDownload size={30} />
                        </div>
                    </div>
                </div>
                <div className=' space-y-7 px-3 lg:px-0'>
                    <h1 className='text-5xl font-extrabold'>Download your shows to watch offline</h1>
                    <p className='text-[20px] font-semibold w-1/2'>
                        Save your favorites easily and always have something to watch.
                    </p>
                </div>
            </div>
            <div className=' border border-b-4 border-gray-700'></div>
            <div className='my-container my-24 text-white space-y-7 px-3 lg:px-36'>
                <h1 className='text-5xl font-extrabold w-1/2'>Download your shows to watch offline</h1>
                <p className='text-[20px] font-semibold w-1/2'>
                    Save your favorites easily and always have something to watch.
                </p>
            </div>
            <div className=' border border-b-4 border-gray-700'></div>
            <div className='lg:flex items-center gap-8  text-white my-container my-16 relative lg:left-32'>
                <div>
                    <img alt="" src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" data-uia="nmhp-card-animation-asset-image" className="default-ltr-cache-1d3w5wq h-[500px] w-[650px]" />
                </div>
                <div className=' space-y-7 px-3 lg:px-0'>
                    <h1 className='text-5xl font-extrabold'>Create profiles for kids</h1>
                    <p className='text-[20px] font-semibold w-1/2'>
                        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                    </p>
                </div>
            </div>
            <div className=' border border-b-4 border-gray-700'></div>
            <div className='text-white my-container text-center my-16'>
                <h1 className='text-5xl font-extrabold'>Frequently Asked Questions</h1>
                <div className='my-20'>
                    <div tabIndex={0} className="collapse collapse-plus py-6 bg-gray-800">
                        <div className="collapse-title text-3xl text-left font-medium">
                            What is Netflix ?
                        </div>
                        <div className="collapse-content text-left">
                            <div className=' border border-b-1 border-gray-700'></div>
                            <p className='my-3 text-lg'>tabIndex={0} Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus my-3 py-6 bg-gray-800">
                        <div className="collapse-title text-3xl text-left font-medium">
                            How much does Netflix cost ?
                        </div>
                        <div className="collapse-content text-left">
                            <div className=' border border-b-1 border-gray-700'></div>
                            <p className='my-3 text-lg'>tabIndex={0} Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD2.99 to USD9.99 a month. No extra costs, no contracts.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus my-3 py-6 bg-gray-800">
                        <div className="collapse-title text-3xl text-left font-medium">
                            Where can I watch ?
                        </div>
                        <div className="collapse-content text-left">
                            <div className=' border border-b-1 border-gray-700'></div>
                            <p className='my-3 text-lg'>tabIndex={0} Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus py-6 my-3 bg-gray-800">
                        <div className="collapse-title text-3xl text-left font-medium">
                            How do I cancel ?
                        </div>
                        <div className="collapse-content text-left">
                            <div className=' border border-b-1 border-gray-700'></div>
                            <p className='my-3 text-lg'>tabIndex={0} Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus py-6 my-3 bg-gray-800">
                        <div className="collapse-title text-3xl text-left font-medium">
                            How can I watch on Netflix ?
                        </div>
                        <div className="collapse-content text-left">
                            <div className=' border border-b-1 border-gray-700'></div>
                            <p className='my-3 text-lg'>tabIndex={0} Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus py-6 my-3 bg-gray-800">
                        <div className="collapse-title text-3xl text-left font-medium">
                            Is Netflix good for kids ?
                        </div>
                        <div className="collapse-content text-left">
                            <div className=' border border-b-1 border-gray-700'></div>
                            <p className='my-3 text-lg'>tabIndex={0} The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                        </div>
                    </div>
                </div>
                <button className=' bg-[#e50914] px-10 py-4 text-lg font-semibold rounded-md inline-flex gap-2 items-center'><span>Finish Sign Up</span><FiChevronRight size={20} /></button>
            </div>
            <div className=' border border-b-4 border-gray-700'></div>
        </div>
    );
};

export default JoinNow;