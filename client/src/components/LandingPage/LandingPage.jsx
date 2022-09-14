import React from 'react';
import $ from 'jquery'; 
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import logo from './logoJRremovebg.png';
import Lottie from 'react-lottie';
import rocketLP from '../../assets/rocketLP.json';
import './LandingPage.scss';

export default function LandingPage() {

    const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: rocketLP,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	};


    return (
  
        <div className="landingpageContainer">
            
            <Link to='/home'>
                <div>
                    <div className='night'>
                        <img src={logo} className='logolandingpage'/>
                        <span className='moon'></span>
                        <span className="spot1"></span>
                        <span className="spot2"></span>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>	
                        </ul>
                    </div>
                </div>
            </Link>
            <div>
                <Typewriter
                    options={{
                        strings: ['En Junior POTENCIA tu carrera como DESARROLLADOR'],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        pauseFor: 20000
                    }}
                />
            </div>
            <span id='rocketLandingPage'>
                <Lottie 
						options={defaultOptions}
						height={500}
						width={350}
				/>
            </span>
        </div>
      
    )
}








