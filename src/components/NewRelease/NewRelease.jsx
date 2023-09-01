import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}
const NewRelease = () => {
    const [releaseData, setReleaseData] = useState([]);
    useEffect(() => {
        fetch('/newrelease.json')
            .then(res => res.json())
            .then(data => setReleaseData(data))
    }, []);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            //   {
            //     breakpoint: 480,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 1
            //     }
            //   }
        ]
    };
    return (
        <div className=' pt-6 my-container'>
            <Slider {...settings} className=''>
                {
                    releaseData?.map(release => (

                        <Link to={`../releaseDetails/${release?.id}`}>
                            <div className="w-full px-2">
                                <div className=''>
                                    <div className='w-full'>
                                        <img src={release?.image} className='w-[450px]' alt="" srcset="" />
                                    </div>
                                    <p className='text-center mt-4 text-[22px]'>{release?.name}</p>
                                </div>
                            </div>
                        </Link>


                    ))
                }
            </Slider>
        </div>
    );
};

export default NewRelease;