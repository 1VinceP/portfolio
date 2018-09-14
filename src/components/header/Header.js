import React, { Component } from 'react';
import animateScrollTo from 'animated-scroll-to';
import './header.css'

class Header extends Component {
    constructor() {
        super();

        this.state = {
            width: 0,
            skills: 0,
            projects: 0,
            about: 0,
            contact: 0,
            contactTitle: ''
        }
    }

    componentDidMount() {
        this.setState({
            width: window.innerWidth
        }, () => {
            this.setScrollValues()
        })
    }

    setScrollValues() {
        // Set scroll values for desktop
        if( this.state.width > 800 ) {
            this.setState({
                skills: 600,
                projects: 900,
                contact: 2000,
                contactTitle: 'Contact Me'
            })
        }
        // Set scroll values for mobile
        else {
            let toProjects = 1150
            this.setState({
                skills: 570,
                projects: toProjects,
                about: toProjects + (460 * 5),
                contact: 6000,
                contactTitle: 'Contact'
            })
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
                        <div className='header-link' onClick={() => this.onNavClick( this.state.skills )} >Skills</div>
                        <div className='header-link' onClick={() => this.onNavClick( this.state.projects )} >Projects</div>
                        <div className='header-link header-about' onClick={() => this.onNavClick( this.state.about )} >About</div>
                        <div className='header-link header-contact' onClick={() => this.onNavClick( this.state.contact )} >{this.state.contactTitle}</div>
                    </nav>
                </section>
            </div>
        )
    }
}

export default Header;