import React from 'react';
import "./Footer.css";
import Wave from "../img/wave.svg";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";



function Footer() {
  return (
    <div className='footer'>
        <img src={Wave} alt="footer svg" />
            <div className="f-content">
                <span>daivat796@gmail.com</span>
                <div className="f-icons">
                    <Insta color='white' size='3rem' to='https://instagram.com/daivat__dhimmar?utm_source=qr&igshid=MThlNWY1MzQwNA==' />
                    <Facebook color='white' size='3rem' to='https://instagram.com/daivat__dhimmar?utm_source=qr&igshid=MThlNWY1MzQwNA=='/>
                    <Linkedin color='white' size='3rem' to='https://www.linkedin.com/in/daivat-dhimmar-3903a1172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'/>
                    <Github color='white' size='3rem' to='https://github.com/daivat9228'/>
                </div>
            </div>
    </div>
  )
}

export default Footer;
