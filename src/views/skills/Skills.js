import React from 'react';
import api from '../../images/api.svg';
import css from '../../images/css.svg';
import html from '../../images/html.svg';
import js from '../../images/js.svg';
import node from '../../images/node.svg';
import post from '../../images/post.svg';
import react from '../../images/react.svg';
import './skills.css';

function Skills() {
    return(
        <div className='skills-body'>
            {/* <div className='skills-title'>Skills</div> */}

            <div className='skills'>
                <div>
                    <img src={react} alt='' />
                    <p>React</p>
                </div>
                <div>
                    <img src={node} alt='' />
                    <p>Node.JS</p>
                </div>
                <div>
                    <img src={post} alt='' />
                    <p>PostgreSQL</p>
                </div>
                <div>
                    <img src={api} alt='' />
                    <p>RESTful API</p>
                </div>
            </div>

            <div className='skills two'>
                <div>
                    <img src={js} alt='' />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={html} alt='' />
                    <p>HTML5</p>
                </div>
                <div>
                    <img src={css} alt='' />
                    <p>CSS3</p>
                </div>
            </div>

        </div>
    )
}

export default Skills;