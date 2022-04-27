import React, { useEffect, useState } from 'react';
import './Breakdown.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Treding1 from "../../../../assets/cripto-walltet-icon/Ellipse 014.png";
import Treding2 from "../../../../assets/cripto-walltet-icon/Ellipse 015.png";
import Treding3 from "../../../../assets/cripto-walltet-icon/Ellipse 016.png";
import Treding4 from "../../../../assets/cripto-walltet-icon/Ellipse 017.png";
import Treding5 from "../../../../assets/cripto-walltet-icon/Ellipse 018.png";
// import Clock from '../../common/Clock';

const Breakdown = () => {
    const [trading, setTrading] = useState(true);
    
    const [SecState, setSecState] = useState(null);
    const [MinsState, setMinsState] = useState(null);
    const [HourState, setHoursState] = useState(null);

    useEffect(() => {
      setInterval(() => {
          let date = new Date();
          setSecState(date.getSeconds())
          setMinsState(date.getMinutes())
          setHoursState(date.getHours())
      }, 1000);
    }, [])

    useEffect(() => {
    
    AOS.init({duration:800});

}, [])



    return (
        <div className="Breakdown-bg">
            <div className="graph-container">
                <div className='row time-container'>
                    <div className="text-white text-center d-flex justify-content-between time-box-container">
                        <div>
                            <div className={`time-box ${trading? 'green-text':'red-text'}`}>
                                {HourState}
                            </div>
                            <p>Hour</p>
                        </div>
                        <div>
                        <div className={`time-box ${trading? 'green-text':'red-text'}`}>
                            {MinsState}
                        </div>
                            <p>Minutes</p>
                        </div>
                        <div>
                            <div className={`time-box ${trading? 'green-text':'red-text'}`}>
                            {SecState}</div>
                        <p>Seconds</p>
                        </div>
                    </div>
                </div>

                <div className='Breakdown-container' data-aos="fade-up">
                    <div className="title">
                        <div id="tokenomics" className="token-btn d-flex justify-content-center">
                            <button>Tokenomics</button>
                        </div>
                    </div>
                </div>

                <div className="treding-bg">                
                    <div className="treding-container">
                        <div className="treding-icon row" data-aos="fade-up">

                            <div className="icon-box col col-md col-sm-12 col-sm-12 col-xs-12">
                                <img src={Treding1} alt="" srcSet="" className='treading-img'/>
                                <div className="treding-text">
                                    <h3>Supply</h3>
                                    <p>1,000,000,000</p>
                                </div>
                            </div>
                            
                            <div className="icon-box col col-md col-sm-12 col-xs-12">
                                <img src={Treding2} alt="" srcSet="" />
                                <div className="treding-text">
                                    <h3>Max Wallet</h3>
                                    <p>25,000,000,000</p>
                                </div>
                            </div>
                            <div className="icon-box col col-md col-sm-12 col-xs-12">
                                <img src={Treding3} alt="" srcSet="" />
                                <div className="treding-text">
                                    <h3>Max Buy</h3>
                                    <p>10,000,000,000</p>
                                </div>
                            </div>
                            <div className="icon-box col col-md col-sm-12 col-xs-12">
                                <img src={Treding4} alt="" srcSet="" />
                                <div className="treding-text">
                                    <h3>Max Sell</h3>
                                    <p>5,000,000,000</p>
                                </div>
                            </div>
                            <div className="icon-box col col-md col-sm-12 col-xs-12">
                                <img src={Treding5} alt="" srcSet="" />
                                <div className="treding-text">
                                    <h3>Cool Down</h3>
                                    <p>60 Seconds</p>
                                </div>
                            </div>
                        </div>
                            <div className='row  time-container-2'>
                                
                            <h6 className='let-text'>Let your Ego rest with you</h6>
                                <div className="text-white text-center d-flex justify-content-between time-box-container">
                                    <div>
                                        <div className={`time-box ${trading? 'green-text':'red-text'}`}>
                                            {HourState}
                                        </div>
                                        <p>Hour</p>
                                    </div>
                                    <div>
                                    <div className={`time-box ${trading? 'green-text':'red-text'}`}>
                                        {MinsState}
                                    </div>
                                        <p>Minutes</p>
                                    </div>
                                    <div>
                                        <div className={`time-box ${trading? 'green-text':'red-text'}`}>    {SecState}
                                        </div>
                                    <p>Seconds</p>
                                    </div>
                                </div>
                            </div>
                            
                        <div className='treding-hour-container-time-line'>
                            <h1 className='time-shedule-title'>Staking Rewards</h1>

                            <div className='time-shedule-container'>
                                <h2 className='time-1'>7 DAYS = 2.5%</h2>
                                <h2 className='time-2'>30 DAYS = 15%</h2>
                                <h2 className='time-3'>90 DAYS = 30% every 30 days</h2>
                            </div>
                        <div className="treding-hour-container" data-aos="fade-up">
                            <h2>Trending Hours</h2>
                            <p className='treding-hour-container-text'>The EGO Token will operate solely during weekdays on New York Stock<br/>Exchange Hours. you can now sleep easy at night knowing that you won’t wake up to a crashed portfolio!</p>
                        </div>

                        <div className="d-none clock-section">
                                {/* <Clock/> */}
                            </div>

                            
                        
                            
                            
                        <div >
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Breakdown;