import React from 'react';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import './contact.css';

function Contact() {
    return(
        <div className='contact-body'>
            <div className='contact-header'>Contact Me</div>

            <div className='contact-links'>
                <a href='https://www.linkedin.com/in/1vincep/'><img src={linkedin} alt='' /></a>
                <a href='https://github.com/1VinceP'><img src={github} alt='' /></a>
            </div>
        </div>
    )
}

export default Contact;