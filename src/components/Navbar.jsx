import React from 'react';
import './Navbar.css';
import {Link} from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper"> 
        <div className="n-left">
                <div className="n-name">Daivat D.</div>
                {/* <span>Toggle</span> */}
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li><Link activeClass='active' to='Home' spy={true} smooth={true}>Home</Link></li>
                        <li><Link to='Techstack' spy={true} smooth={true}>Techstack</Link></li>
                        <li><Link to='Hobbies' spy={true} smooth={true}>Hobbies</Link></li>
                        <li><Link to='Timeline' spy={true} smooth={true}>Timeline</Link></li>
                        <li><Link to='Contact' spy={true} smooth={true}>Contact</Link></li>
                    </ul>
                </div>
                <button className="button n-button">Contact</button>
            </div>
    </div>
  )
}

export default Navbar