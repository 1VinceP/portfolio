import React, { Component } from 'react';
import data from '../../components/projectData/ProjectData';
import github from '../../images/github.svg';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Slider from '../../components/Slider/Slider';
import './projects.css';


class Projects extends Component {
    constructor() {
        super();

        this.state = {
            showDetails: false
        }
    }

    showDetails( i ) {
        let info = document.getElementById(`info${i}`)
        let deet = document.getElementById(`deet${i}`)

        if( info.style.display === 'flex' ) {
            info.style.display = 'none'
            deet.style.display = 'flex'
        }
        else if( deet.style.display === 'flex' ) {
            info.style.display = 'flex'
            deet.style.display = 'none'
        }
    };

    render() {

        let mappedData = data.map( ( project, i ) => {
            return(
                <div className='projects-project' key={i}>
                    <div className='projects-project-title'>
                        <div>{project.title}</div>
                        {
                            project.github && <a href={project.github} target='_blank' rel='noopener noreferrer'><img className='project-gh-link' src={github} alt='' /></a>
                        }
                    </div>

                    <Slider link={project.link} images={project.image} />
                    <br/>
                    <ProjectCard project={project} />
                </div>
            )
        } )

        return(
            <div className='projects-body'>
                <div className='projects-title'>Projects</div>

                <section className='projects-display'>
                    <div className='projects-hint-banner'>
                        <p>Click the image to head to the website.</p>
                        <p>Click the text to show more details.</p>
                    </div>
                    {mappedData}

                </section>
            </div>
        )
    }
}

export default Projects;