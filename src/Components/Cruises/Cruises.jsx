import React, { useEffect, useState } from 'react'
import style from './Cruises.module.css'
import axios from 'axios';
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import {Helmet} from "react-helmet";

export default function Cruises() {
    const [showDiv, setShowDiv] = useState(false);
    let [Sid, setId] = useState();
    let [CruisesData, setCruisesData] = useState([])
    let [orderr, setOrderr] = useState();
    let [dest, setDest] = useState('');
    async function Cruises_Search(Id, order) {
        console.log(Id, order)
        const { data } = await axios.get(`https://tripadvisor16.p.rapidapi.com/api/v1/cruises/searchCruises`, {
            params: { destinationId: Id, order: order, page: '1', currencyCode: 'USD' },
            headers: {
                'X-RapidAPI-Key': '271f89e579msh54ce4c6aded94ccp1091a3jsn03a505dc180a',
                'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
            }
        });
        setCruisesData(data.data.list);
    }

    function getId(id) {
        setId(id);
        setShowDiv(!showDiv);

    }
    function close() {
        setShowDiv(!showDiv);

    }
    function whereYouGo(e) {
        setDest(e.target.value);
    }
    function order(e) {
        setOrderr(e.target.value);
    }
    const generateRandomPrice = () => {
        const min = 100;
        const max = 1000;
        const generatedPrice = Math.floor(Math.random() * (max - min + 1)) + min;
        return generatedPrice;
    };
    useEffect(() => {
        if (showDiv) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showDiv]);

    return (
        <>
                        <Helmet>
<meta charSet="utf-8" />
<title>Book Things To Do Attractions, and Tours | GetYourGuide</title>
<meta name="description" content="This is Cruises Page" />
</Helmet>
            <Zoom>
            <div className={`${style.search}`}>
                <Zoom> <h1>Find the best cruise for you</h1></Zoom>
                <div className={`${style.searchContent}`}>
                    < >
                    <div className={`${style.select}`}>
                        <select onChange={whereYouGo}>
                            <option value="147237">Caribbean </option>
                            <option value="147414">Bahamas </option>
                            <option value="150768">Mexico </option>
                            <option value="28923">Alaska </option>
                            <option value="147255">Bermuda </option>
                            <option value="153339">Canada </option>
                            <option value="14114078">Mediterranean </option>
                            <option value="6">Africa </option>
                            <option value="12">Antarctica </option>
                            <option value="2">Asia </option>
                            <option value="255055">Australia </option>
                            <option value="291958">Central America </option>
                            <option value="294211">China </option>
                            <option value="4">Europe </option>
                            <option value="28932">Hawaii </option>
                            <option value="670819">Indian Ocean </option>
                            <option value="21">Middle East </option>
                            <option value="13">South America </option>
                            <option value="8">South Pacific </option>
                        </select>
                    </div>
                    </>
                    <div className={`${style.select} mx-3`}>
                        <select onChange={order}>

                            <option value="">Order</option>
                            <option value="popularity">Popularity</option>
                            <option value="departure_date">Departure Date</option>
                            <option value="price">Price</option>
                            <option value="lenght">Length</option>
                            <option value="ship">Ship</option>
                        </select>
                    </div>
                    <button className={`${style.button84}`} onClick={() => Cruises_Search(dest, orderr)} role="button">Search</button>

                </div>
            </div>
            </Zoom>

            <div className={`row  m-0 w-100 ms-0 left-0`}>
                {CruisesData.map((ele) => {
                    return <>
                        <>
                        <div className={` ${style.MainCard}  mt-5 `}>
                            <a className={`${style.titt} `}>{ele.title}</a>
                            <div className={`${style.cardCruises} row d-flex `}>
                                <Slide direction='up'>
                                <div className={`col-md-6`}>
                                    <div className={`${style.price_logo}`}>
                                        <div><img src={ele.cruiseLine.logoUrl} alt="" /></div>
                                        <p>Total cost :$ {generateRandomPrice()} </p>
                                    </div>

                                </div>
                                </Slide>
                                <Fade>
                                <div className={`${style.leftDet} col-md-6 `}>
                                    {ele.ship.reviewSummaryInfo && ele.ship.reviewSummaryInfo.overallRatings && (
                                        <div>Rating {ele.ship.reviewSummaryInfo.overallRatings} <span><i class="fa-solid fa-star"></i></span></div>
                                    )}
                                    <div style={{ display: 'flex', marginLeft: '-15px' }}>
                                        <span>Sailing Date:</span>
                                        <select>
                                            {ele.sailings.results.map((elee) => (
                                                <option key={elee.departureDate}>
                                                    {elee.departureDate}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <p className={` mb-0`}>Port Departure :{ele.portDeparture.name}</p>
                                    <p className={` mb-0`}>Port Arrival:{ele.portArrival.name}</p>
                                    {/* <button >Itinerary</button> */}
                                    <button onClick={() => getId(ele.id)} className={`${style.button57}`} role="button"><span class="text">Itinerary</span><span>itinerary</span></button>
                                </div>
                                </Fade>
                            </div>

                        </div>
                        </>

                        {/* {showDiv && (
                            <div className={`${style.subDiv}`}
                                style={{
                                    position: 'fixed',
                                    top: '50%',
                                    left: '50%',
                                }}
                            >
                                <div className={`${style.mark}`} onClick={()=>close()}><i class="fa-solid fa-xmark"></i></div>
                                {CruisesData.map((eleSub) => {
                                    if (eleSub.id === Sid) {
                                        return (
                                            < >{eleSub.itinerary.results.map((iti) => {
                                                return <div className={`${style.subData}`}>Day <span>{iti.day}</span> {iti.port.name}</div>
                                            })}</>

                                        );
                                    }
                                })}
                            </div>
                        )} */}
                        {showDiv && (
                            <>
                                <div
                                    className={`${style.overlay}`}
                                    style={{
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        zIndex: 9999,
                                    }}
                                />
                                <div
                                    className={`${style.subDiv}`}
                                    style={{
                                        position: 'fixed',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 10000,
                                    }}
                                >
                                    <div className={`${style.mark}`} onClick={() => close()}>
                                        <i className="fa-solid fa-xmark" />
                                    </div>
                                    {CruisesData.map((eleSub) => {
                                        if (eleSub.id === Sid) {
                                            return (
                                                <>
                                                    {eleSub.itinerary.results.map((iti) => (
                                                        <div className={`${style.subData}`}>
                                                            Day <span>{iti.day}</span> {iti.port.name}
                                                        </div>
                                                    ))}
                                                </>
                                            );
                                        }
                                    })}
                                </div>
                            </>
                        )}

                    </>
                })}



            </div>


        </>
    )
}


// {showDiv && <div className={`position-absolute  bg-info ${style.subData}` } style={{ height: '80%', width: '80%' }}>

//                 {CruisesData.map((eleSub)=>{
//                     if (eleSub.id === Sid) {
//                         return (
//                             < >{eleSub.itinerary.results.map((iti)=>{
//                                 return <div className={`${style.subData}`}><span>{iti.day}</span> {iti.port.name}</div>
//                             })}</>

//                         );
//                     }
//             })}
//             </div>}


