import React from 'react';
import "./Contact.css";


function Contact() {
  return (
    <div className='contact-form' id='Contact'>
        <div className="c-left">
        <span>Get In Touch</span>
        <span>Contact Me</span>
        </div>
        <div className="c-right">
            <form >
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="text" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Enter Your Message here...'></textarea>
                <input type="submit" value="Send" className='button' />
            </form>
        </div>
    </div>
  )
}

export default Contact