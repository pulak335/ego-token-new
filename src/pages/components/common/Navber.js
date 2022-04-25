import React,{useState} from 'react';
import '../../../style/nav.css';

import Logo from '../../../assets/Logo/ego-logo.png'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';


const Navber = () => {

      const [modalShow, setModalShow] = useState(false);
      
    return (
        <div className="nav-conatainer">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="" srcSet="" />
                    </a>
                    <button className="navbar-toggler button-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-style">
                            <i className="fa-solid fa-bars-sort"></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse nav-item d-flex d-md-flex d-sm-block align-items-center justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#tokenomics">Tokenomics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#roadmap">Roadmap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.dropbox.com/s/m3rlnua3xx5rx6r/EGO%20White%20Paper.pdf?dl=0" target="_blank">Whitepaper</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  onClick={() => setModalShow(true)}>DAAP</a>

                                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                            </li>
                        </ul>

                        <a className="buy-btn me-2" type="submit" href='https://pancakeswap.finance/' target="blank">Buy EGO</a>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;