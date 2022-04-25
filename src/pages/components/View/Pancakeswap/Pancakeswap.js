import React,{useEffect} from 'react';
import './Pancakeswap.css';

import Analysis from '../../../../assets/data-analysis.gif';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Pancakeswap = () => {

    useEffect(() => {
    
    AOS.init({duration:3000});

}, [])

    return (
        <div className='pancakeswap-bg'>
            <div className='d-flex justify-content-between pancakeswap-flex' data-aos="fade-up">
                <div className='swap'>
                    <h3 className='swap-subtitle'>Buy EGO on</h3>
                    <h1 className='swap-title'>Pancakeswap</h1>
                    <div className='swap-text d-flex align-items-center'>
                        <p className='mt-3 me-4'>Pancakeswap</p>
                        <div className="icon-social d-flex justify-content-between">
                            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-discord"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-twitter mx-3"></i>
                            </a>
                            <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-paper-plane"></i>
                            </a>
                        </div>
                    </div>
                    <p className='swap-text'>or,</p>
                    <p className='swap-text'>0x1DF2C6DF4d4E7F3188487F4515587c5E8b75dbfa</p>
                </div>

                <div className='swap-img'>
                    <img src={Analysis} alt="" srcSet="" />
                </div>
            </div>
        </div>
    );
};

export default Pancakeswap;