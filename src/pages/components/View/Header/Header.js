import React,{useEffect, useState} from 'react';
import Navber from '../../common/Navber';
import './Header.css';
// import Clock from '../../common/Clock';

import AOS from 'aos';
import 'aos/dist/aos.css';



const Header = () => {
    const [trading, setTrading] = useState('Open')

        useEffect(() => {
    
    AOS.init({duration:3000});

}, [])

    return (
        <div className='header-bg'>
            <div className="container">
                <div className="header-container">
                        <Navber/> 
                        
                    <div className="header-title ">
                        <h2 className='trading-text'>Trading {trading} </h2>

                        <h1>A decentralized,<br/> <span>self-sustaining financial</span> organization </h1>
                        <h3>focused on securing investors’ financial freedom. </h3>
                        <div className='d-flex justify-content-center'>
                            <a href='https://ego-1.gitbook.io/ego/' target="_blank" className='btn-base'>Knowledge Base</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;