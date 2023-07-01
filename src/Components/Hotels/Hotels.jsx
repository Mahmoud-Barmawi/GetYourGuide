import React, { useEffect, useState } from 'react'
import axios from 'axios';
import vwe from './ved.mp4';
import style from './main.module.css'
import imge from './booking logo.png'
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import {Helmet} from "react-helmet";

export default function Hotels() {
    let [Des, SetDest] = useState();
    let [HotsData, SetHotsData] = useState([]);
    let [order,setOrder]=useState('');
    let [datIn,setDin]=useState('')
    let [datout,setDout]=useState('')
    let [adu,setAdu]=useState(0)
    let [roms,setRoms]=useState(0);
    async function Hotels(Dest) {
        const { data } = await axios.get(`https://booking-com.p.rapidapi.com/v1/hotels/locations`, {
            params: {
                name: Dest,
                locale: 'en-gb'
            },
            headers: {
                'X-RapidAPI-Key': '271f89e579msh54ce4c6aded94ccp1091a3jsn03a505dc180a',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        });
        console.log(data);

        SetDest(data[0].dest_id);
    }

    async function get_Data_Hotels(Dst,ordBy,Din,Dout,oad,rms) {
        console.log(Dst) 
        console.log(ordBy)
        console.log(Din)
        console.log(Dout)
        console.log(oad)
        console.log(rms)
        let { data } = await axios.get(`https://booking-com.p.rapidapi.com/v2/hotels/search`, {
            params: {
                order_by: ordBy,
                adults_number: oad,
                checkin_date: Din,
                filter_by_currency: 'AED',
                dest_id: Dst,
                locale: 'en-gb',
                checkout_date: Dout,
                units: 'metric',
                room_number: rms,
                dest_type: 'city',
                include_adjacency: 'true',
                children_number: '2',
                page_number: '0',
                children_ages: '5,0',
                categories_filter_ids: 'class::2,class::4,free_cancellation::1'
            },
            headers: {
                'X-RapidAPI-Key': '271f89e579msh54ce4c6aded94ccp1091a3jsn03a505dc180a',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        })
        SetHotsData(data.results);
        console.log(data);
    }

    function hndelBlr(e){
        console.log(e.target.value);
        Hotels(e.target.value);
    }
    function handOrder(e){
        setOrder(e.target.value);
    }
    function dataIn(e){
        setDin(e.target.value);

    }
    function dataOut(e){
        setDout(e.target.value);

    }
    function Adu(e){
        setAdu(e.target.value);

    }
    function rooms(e){
        setRoms(e.target.value);
    }
    return (
        <>
                <Helmet>
<meta charSet="utf-8" />
<title>Book Things To Do Attractions, and Tours | GetYourGuide</title>
<meta name="description" content="This is Hotels Page" />
</Helmet>
            <Zoom>
            <div className={`position-relative`}>
                <center className={`${style.contV}`}>
                    <video autoPlay loop muted >
                        <source src={vwe} type='video/mp4' />
                    </video>
                </center>
                <div className={`${style.searCont}`}>
                    <div className={`${style.firstCont}`}>
                        <input type="text" name="" id="" placeholder='Where to ?' onBlur={hndelBlr} />
                        <select  name="" id="" onChange={handOrder}>
                            <option value=" ">Order By</option>
                            <option value="price">Price</option>
                            <option value="popularity">Popularity</option>
                        </select>
                        <p><span>Check In</span> <input type="date" name="" id=""  onBlur={dataIn}/></p>
                        <p><span>Check Out</span> <input type="date" name="" id="" onBlur={dataOut} /></p>
                    </div>
                    <div className={`${style.secCont}`}>
                        <input type="number" placeholder='Adults Number' onBlur={Adu} />
                        <input type="number" placeholder='Room Number' onBlur={rooms} />
                        <button data-text="Awesome" className={`${style.button}`} onClick={()=>get_Data_Hotels(Des,order,datIn,datout,adu,roms)}>
                            <span className={`${style.actual_text}`}>&nbsp;Search&nbsp;</span>
                            <span className={`${style.hover_text}`} aria-hidden="true">&nbsp;Search&nbsp;</span>
                        </button>
                    </div>
                </div>

            </div>

            </Zoom>
            <div>
                {HotsData.map((ele)=>{
                    return <Fade cascade>
                        <div className={`${style.Hotel_Content}`}>
                        <div className={`${style.image} `}><img src={ele.photoMainUrl}  alt="" /></div>
                        <div className={`${style.sePart}`}>
                        <h1>{ele.name}</h1>
                        
                        <a href="https://www.booking.com/searchresults.en-gb.html?ss=Berlin&ssne=Berlin&ssne_untouched=Berlin&label=gog235jc-1DCAEoggI46AdIM1gDaLoBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuAKby_WkBsACAdICJDBkMGYwNWI1LTQ2NmEtNDFiNi1iYmE5LTUzZWZkMTQ2NzMwZdgCBOACAQ&sid=e8ebb65642f85c154b50726ea288c0ca&aid=397594&lang=en-gb&sb=1&src_elem=sb&src=searchresults&dest_id=-1746443&dest_type=city&checkin=2023-07-11&checkout=2023-07-12&group_adults=3&no_rooms=3&group_children=0" target='_blank'><img src={imge}alt="" /></a>
                        <p>Wish List :{ele.wishlistName}</p>
                        <p className={`${style.pric}`}>Total Price :{ele.priceBreakdown.grossPrice.value} <span>{ele.priceBreakdown.grossPrice.currency}</span></p>
                        </div>
                        <div className={`${style.thPart}`}>
                            <div className={`${style.rating}`}>Rating {ele.reviewScore} <i class="fa-solid fa-star"></i></div>
                            
                            <div>
                                <h3>Check In</h3>
                                <p>From :{ele.checkin.fromTime} </p>
                                <p>To :{ele.checkin.untilTime}</p>
                            </div>

                            <div>
                            <h3>Check Out</h3>
                            <p>From :{ele.checkout.fromTime}</p>
                            <p>To :{ele.checkout.untilTime}</p>
                            </div>
                        </div>
                    </div>
                    </Fade>
                })}
            </div>
        </>
    )
}
