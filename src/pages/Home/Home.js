import React from 'react';
import '../../style/home.css'
import Header from '../components/View/Header/Header';
import Breakdown from '../components/View/Breakdown/Breakdown';
import Roadmap from '../components/View/RoadMap/Roadmap';
import Specialities from '../components/View/Specialities/Specialities';
import Questions from '../components/View/Questions/Questions';
import Pancakeswap from '../components/View/Pancakeswap/Pancakeswap';
import Footer from '../components/View/Footer/Footer';


const Home = () => {
    return (
        <div className='home-container'>
            <Header/>
            <Breakdown/>
            <Roadmap/>
            <Specialities/>
            <Questions/>
            <Pancakeswap/>
            <Footer/>
        </div>
    );
};

export default Home;