import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Flights.module.css'
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import './loading.css';
import {Helmet} from "react-helmet";

export default function Flights() {
    const [errorAirportCode, setErrorAirportCode] = useState(0);
    const [det, setDetails] = useState(false);
    const [flights, setFlights] = useState([]);
    const [airportcodes, setAirportCodes] = useState('');
    const [airportcodes2, setAirportCodes2] = useState('');
    const [date, setDate] = useState('');
    const [itineraryType, setItineraryType] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [numAdults, setNumAdults] = useState('');
    const [numSeniors, setNumSeniors] = useState('');
    const [classOfService, setClassOfService] = useState('');
    const [Loading, setLoading] = useState(false);
    const [isData, setData] = useState(true)

    async function airport(msg, keyy) {
        if (msg == "") {
            console.log('no data')
        } else {
            const logf = await axios.get(`https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport`, {
                params: { query: msg },
                headers: {
                    'X-RapidAPI-Key': '271f89e579msh54ce4c6aded94ccp1091a3jsn03a505dc180a',
                    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
                }
            });

            let { data } = logf;
            if (data.data[0] != null) {
                if (keyy == 0) {
                    setAirportCodes(data.data[0].airportCode);
                }
                if (keyy == 1) {
                    setAirportCodes2(data.data[0].airportCode);
                }
            } else {
                setErrorAirportCode(1);

            }

        }
    }


    async function searchFlights(sourceAirportCode, destinationAirportCode, date, itineraryType, sortOrder, numAdults, numSeniors, classOfService) {
        console.log(sourceAirportCode);
        console.log(destinationAirportCode);
        if (sourceAirportCode == "" || destinationAirportCode == "" || date == "" || itineraryType == "" || sortOrder == "" || numAdults == "" || numSeniors == "" || classOfService == "") {
            setData(false)
            setLoading(false);
        } else {
            setLoading(true);
            const { data } = await axios.get(`https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights`,
                {
                    params: {
                        sourceAirportCode: sourceAirportCode,
                        destinationAirportCode: destinationAirportCode,
                        date: date,
                        itineraryType: itineraryType,
                        sortOrder: sortOrder,
                        numAdults: numAdults,
                        numSeniors: numSeniors,
                        classOfService: classOfService,
                        pageNumber: '1',
                        currencyCode: 'USD'
                    },
                    headers: {
                        'X-RapidAPI-Key': '271f89e579msh54ce4c6aded94ccp1091a3jsn03a505dc180a',
                        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
                    },
                });

            if (data.status == false) {

            }
            else {
                setFlights(data.data.flights);
                setDetails(true)
                setLoading(false);
                setData(true);
                // setAirportCodes('');
                // setAirportCodes2('');
                // setDate('');
                // setItineraryType('');
                // setSortOrder('');
                // setNumAdults('');
                // setNumSeniors('');
                // setClassOfService('');
            }
        }


    }


    function handleBlur1(e) {
        airport(e.target.value, 0);
    }
    function handleBlur2(e) {
        if (e.target.value) {
            airport(e.target.value, 1);
        } else {

        }
    }
    function handleDateChange(e) {
        if (e.target.value) {
            setDate(e.target.value);
        }
        else {

        }
    }
    function handleItineraryType(e) {
        if (e.target.value) {
            setItineraryType(e.target.value);
        }
        else {

        }
    }
    function handleSortOrder(e) {
        if (e.target.value) {
            setSortOrder(e.target.value);
        }
        else {

        }
    }
    function handleNumAdults(e) {
        if (e.target.value) {
            setNumAdults(e.target.value);
        }
        else {

        }
    }
    function handlenNumSenior(e) {
        if (e.target.value) {
            setNumSeniors(e.target.value);
        }
        else {

        }
    }
    function handleClassOfService(e) {
        if (e.target.value) {
            setClassOfService(e.target.value);
        }
        else {

        }
    }


    return (

        <>
                <Helmet>
<meta charSet="utf-8" />
<title>Book Things To Do Attractions, and Tours | GetYourGuide</title>
<meta name="description" content="This is Flights Page" />
</Helmet>
            <Zoom>
                <div className={`${style.titles}`}>
                    <h1>The best flight deals to everywhere, from anywhere</h1>
                </div>
                <div className={`${style.sendData}`}>
                    <p>Here you can put the flight information you want to search for.
                        <br /> Thank you for choosing us</p>
                    <div className={`${style.content}`}>
                        <div className={`${style.Srccontent}`}>
                            <i class="fa-solid fa-location-dot"></i>
                            <input className={`${style.inpt}`} required type="text" id="message" name="message" placeholder='From: Girona' onBlur={handleBlur1} />

                        </div>

                        <div className={`${style.destcontent}`}>
                            <i class="fa-solid fa-location-dot"></i>
                            <input className={`${style.inpt}`} type="text" id="message" name="message" placeholder='TO : Madrid' onBlur={handleBlur2} />
                        </div>

                        <div className={`${style.daatee}`}>
                            <input type="date" onBlur={handleDateChange} />
                        </div>
                        <div className={`${style.tripType}`}>
                            <select value={itineraryType} onChange={handleItineraryType}>
                                <option value="">Trip Type</option>
                                <option value="ONE_WAY">ONE_WAY</option>
                                <option value="ROUND_TRIP">ROUND_TRIP</option>
                            </select>
                        </div>

                        <div className={`${style.triprType}`}>
                            <select value={sortOrder} onChange={handleSortOrder}>
                                <option value="">Sort Order</option>
                                <option value="PRICE">PRICE</option>
                                <option value="DURATION">DURATION</option>
                            </select>
                        </div>



                    </div>

                    <div className={`${style.content} `}>
                        <div className={`${style.inp_ad}`}>
                            <i class="fa-solid fa-users"></i>
                            <input className={`${style.inpt}`} type="number" placeholder='Number of Adults' onBlur={handleNumAdults} />
                        </div>

                        <div className={`${style.inp_sen}`}>
                            <i class="fa-solid fa-users"></i>
                            <input className={`${style.inpt}`} type="number" placeholder='Number of Senior' onBlur={handlenNumSenior} />
                        </div>

                        <div className={`${style.classof_serv}`}>
                            <select value={classOfService} onChange={handleClassOfService}>
                                <option value="">Class Of Service</option>
                                <option value="ECONOMY">ECONOMY</option>
                                <option value="BUSINESS">BUSINESS</option>
                                <option value="FIRST">FIRST</option>
                            </select>
                        </div>

                    </div>
                    <div>
                        <button className={`${style.button_89}`} role="button" onClick={() => searchFlights(airportcodes, airportcodes2, date, itineraryType, sortOrder, numAdults, numSeniors, classOfService)}><i class="fa-solid fa-plane-departure"></i> Let's fly to get the data</button>
                    </div>
                </div>
            </Zoom>
            {isData ? <></> : 'plz cheack your input'}
            {Loading ? <>
                <center><br /><br /><br />
                    <div className="loader" id="loader" />
                    <div className="loader" id="loader2" />
                    <div className="loader" id="loader3" />
                    <div className="loader" id="loader4" />
                    <span id="text">LOADING...</span><br />
                </center>
            </> : ''}


            <Fade cascade damping={.5}>
                <div>
                    {flights.map((flight, index) => (
                        <div key={index}>
                            {flight.segments.map((segment, segmentIndex) => (
                                <Fade cascade>
                                    <div className={`row`} key={segmentIndex}>
                                        {segment.legs.map((leg, legIndex) => (
                                            <Fade cascade>
                                                <div className={`${style.flightsCont} col-md-8`} key={legIndex}>
                                                    <div className={`${style.flightsDetails}`} >
                                                        <p>Flight Number: {leg.flightNumber}</p>
                                                        <p>Flight Name: {leg.equipmentId}</p>
                                                        <p>Airline: {leg.marketingCarrier.displayName}</p>
                                                    </div>
                                                    <div>
                                                        <p className={`mx-5 mb-3`}>Departure Time: {leg.departureDateTime}</p>
                                                        <p >Arrival Time: {leg.arrivalDateTime}</p>
                                                    </div>
                                                    <div className={`${style.flightsTime}`}>
                                                        <p>Origin: {leg.originStationCode}</p>
                                                        <p>Destination: {leg.destinationStationCode}</p>

                                                    </div>
                                                    <p className={`${style.logo} mt-4`} >
                                                        <img src={leg.operatingCarrier.logoUrl} alt="" />
                                                        <br />
                                                        <span>{leg.operatingCarrier.displayName}</span>
                                                    </p>

                                                </div>
                                            </Fade>
                                        ))}
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    ))}
                </div>

            </Fade>
        </>
    )
}

