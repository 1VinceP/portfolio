import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';

class ProjectCard extends Component {
    state = {
        isFlipped: false
    }

    handleFlip() {
        this.setState({ isFlipped: !this.state.isFlipped });
    };

    render() {
        const { project } = this.props

        return (
            <FlexyFlipCard
                disabled
                frontBackgroundColor='transparent'
                flipped={this.state.isFlipped}
            >
                {/* This is the front */}
                <section ref='flipper'>
                    <div className='projects-project-info' style={{display: 'flex'}} onClick={() => this.handleFlip()}>
                        <p className='projects-tech'>{project.techs}</p>
                        <p>{project.info}</p>
                    </div>
                </section>

                {/* This is the back */}
                <section ref='flipper'>
                    <div className='projects-project-details' onClick={() => this.handleFlip()}>
                        <p className='project-details-box'>{project.details}</p>
                    </div>
                </section>
            </FlexyFlipCard>
        )
    }
}

export default ProjectCard;