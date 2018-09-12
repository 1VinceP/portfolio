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

    componentWillMount() {
        this.setState({
            width: window.innerWidth
        })
    }

    componentDidMount() {

        if( this.state.width > 800 ) {
            this.setState({
                skills: 600,
                projects: 1090,
                contact: 2000,
                contactTitle: 'Contact Me'
            })
        }
        else {
            this.setState({
                skills: 570,
                projects: 950,
                about: 2180,
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