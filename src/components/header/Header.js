import React, { Component } from 'react';
import animateScrollTo from 'animated-scroll-to';
import './header.css'

class Header extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    onNavClick( offset ) {
        const options = {
            speed: 500,
            minDuration: 400,
            maxDuration: 800,
            element: window,
            cancelOnUserAction: true
        }
        const desiredOffset = offset

        animateScrollTo( desiredOffset, options )
    }

    render() {
        return(
            <div className='header-body'>
                <section className='header-left'>
                    <div className='header-link-title' onClick={() => this.onNavClick( 0 )} >Vincent Palmer</div>
                </section>

                <section className='header-right'>
                    <nav>
                        <div className='header-link' onClick={() => this.onNavClick( 0 )} >Home</div>
                        <div className='header-link' onClick={() => this.onNavClick( 600 )} >Skills</div>
                        <div className='header-link' onClick={() => this.onNavClick( 992 )} >Projects</div>
                        {/* <div className='header-link' onClick={() => this.onNavClick( 1650 )} >About</div> */}
                        <div className='header-link header-contact' onClick={() => this.onNavClick( 2000 )} >Contact Me</div>
                    </nav>
                </section>
            </div>
        )
    }
}

export default Header;