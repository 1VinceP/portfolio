import React, { Component } from 'react';
import data from '../../components/projectData/ProjectData';
import workFlow from '../../images/dashboard.jpg';
import treeFrogsWed from '../../images/tree-frogs-order.PNG';
import truthClone from '../../images/dress-truth-clone.PNG';
import swanson from '../../images/swanson-thumbnail.png';
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
            console.log( 'hit' )
            info.style.display = 'none'
            deet.style.display = 'flex'
        }
        else if( deet.style.display === 'flex' ) {
            console.log( 'hit2' )
            info.style.display = 'flex'
            deet.style.display = 'none'
        }
    };

    render() {

        let imgArr = [ workFlow, treeFrogsWed, truthClone, swanson ]

        let mappedData = data.map( ( project, i ) => {
            return(
                <div className='projects-project' key={i}>
                    <a href={project.link} target='_blank' rel='noopener noreferrer'><img src={imgArr[i]} alt='' /></a>
                    {/* Info View */}
                    <div className='projects-project-info' style={{display: 'flex'}} id={'info' + i} onClick={() => this.showDetails(i)}>
                        <p className='projects-tech'>{project.techs}</p>
                        <p>{project.info}</p>
                    </div>
                    {/* Details View */}
                    <div className='projects-project-details' style={{display: 'none'}} id={'deet' + i} onClick={() => this.showDetails(i)}>
                        <p className='project-details-box'>{project.details}</p>
                    </div>
                    
                </div>
            )
        } )

        return(
            <div className='projects-body'>
                <section className='projects-display'>

                    <div className='projects-hint-banner'>
                        <p>Click the image to head to the website</p>
                        <p>Click the text to show more details</p>
                    </div>
                    {mappedData}
                    
                </section>
            </div>
        )
    }
}

export default Projects;