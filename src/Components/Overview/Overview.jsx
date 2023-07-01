import React from 'react'
import Slider from "react-slick";
import stylee from './style.module.css'
import img1 from './GettyImages-177723673.webp'
import img2 from './GettyImages-178640523.webp'
import img3 from './GettyImages-474693922.webp'
import img4 from './GettyImages-480217257.webp'
import img5 from './GettyImages-487828389.webp'
import img6 from './GettyImages-505777764.webp'
import img11 from './1123305036_WxH.jpg'
import img21 from './1142193110_WxH.jpg'
import img31 from './1142193409_WxH.jpg'
import img41 from './1159632815_WxH.jpg'
import img51 from './769442643_WxH.jpg'
import img61 from './992419403_WxH.jpg'
import img111 from './carnival-valor-ta-listings.jpg'
import img211 from './viking-sky-ta-listings.jpg'
import img311 from './122.avif'
import img411 from './msc-seaview-ta-listings.jpg'
import img511 from './hp-card-cruise-tips-ideas-768.webp'
import img611 from './ta-carnival-horizon-camp.jpg'
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import {Helmet} from "react-helmet";

export default function Overview() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Book Things To Do Attractions, and Tours | GetYourGuide</title>
                <meta name="description" content="This is Overview Page" />
            </Helmet>
            <Slide direction='down'>
                <h1 className={`${stylee.hh1}`}>
                    Your One-Stop Travel Companion 👯🧑‍🤝‍🧑
                </h1>
            </Slide>
            <div className={`${stylee.wle}`}>
                Welcome to our all-inclusive travel website, where flights, hotels, and cruises come together to create unforgettable travel experiences. <br />
                We strive to be your ultimate resource for all your travel needs, offering a seamless and convenient platform to plan, book, and explore. Whether you're seeking adventure, relaxation, or cultural immersion, our website is designed to inspire and guide you every step of the way. Let us be your trusted companion on your next travel endeavor.
            </div>

            <Fade cascade>

                <div className={`${stylee.fly}`}>
                    <h2>1- Discover the World of Flights</h2>
                    <p>Embark on a journey through the skies with our comprehensive flight information hub. From finding the best deals to exploring exotic destinations, our website is your go-to resource for all things flight-related. Whether you're a frequent flyer or planning your dream vacation, we provide up-to-date schedules, airline reviews, and insider tips to ensure smooth and enjoyable air travel experiences.</p>
                </div>
            </Fade>
            
            <Zoom>
            <Slider className={`${stylee.slick_slider}`} {...settings}>
                <div className={`${stylee.ims}`}>
                    <img src={img1} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img2} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img3} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img4} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img5} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img6} alt="" />
                </div>
            </Slider>
            </Zoom>
            <Fade cascade>
                <div className={`${stylee.fly}`}>
                    <h2>
                        2- Unveiling the Art of Hotel Selection
                    </h2>
                    <p>Indulge in the luxury of choice as you navigate through our extensive collection of hotels. From budget-friendly accommodations to lavish resorts, our website is your ultimate guide to finding the perfect place to stay. We offer detailed descriptions, real-time availability, and user reviews, allowing you to make informed decisions and book with confidence. Let us help you create unforgettable memories by finding the ideal hotel for your next getaway.</p>
                </div>
            </Fade>

            

            <Zoom>
            <Slider className={`${stylee.slick_slider}`} {...settings}>
                <div className={`${stylee.ims}`}>
                    <img src={img11} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img21} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img31} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img41} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img51} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img61} alt="" />
                </div>
            </Slider>
            </Zoom>
            <Fade cascade>
                <div className={`${stylee.fly}`}>
                    <h2>
                        3- Embark on a Voyage of Discovery with Cruises
                    </h2>
                    <p>Set sail on a remarkable adventure across the seas with our comprehensive cruise information portal. Discover a world of breathtaking destinations, enticing itineraries, and luxurious onboard experiences. Whether you're a seasoned cruiser or planning your first voyage, our website provides a wealth of resources, including cruise line comparisons, destination guides, and expert advice to ensure an unforgettable journey from start to finish.</p>

                </div>
            </Fade>
            

            <Zoom>
            <Slider className={`${stylee.slick_slider}`} {...settings}>
                <div className={`${stylee.ims}`}>
                    <img src={img111} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img211} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img311} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img411} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img511} alt="" />
                </div>
                <div className={`${stylee.ims}`}>
                    <img src={img611} alt="" />
                </div>
            </Slider>
            </Zoom>
        </>
    )
}
