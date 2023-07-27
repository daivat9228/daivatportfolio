import React from 'react';
import "./Footer.css";
import Wave from "../img/wave.svg";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";



function Footer() {
  return (
    <div className='footer'>
        <img src={Wave} alt="footer svg" />
            <div className="f-content">
                <span>daivat796@gmail.com</span>
                <div className="f-icons">
                    <Insta color='white' size='3rem' />
                    <Facebook color='white' size='3rem'/>
                    <Linkedin color='white' size='3rem'/>
                </div>
            </div>
    </div>
  )
}

export default Footer;