import React from 'react';
import SkillContainer from './SkillContainer';
import api from '../../images/api.svg';
import css from '../../images/css.svg';
import html from '../../images/html.svg';
import js from '../../images/js.svg';
import node from '../../images/node.svg';
import post from '../../images/post.svg';
import react from '../../images/react.svg';
import './skills.css';

function Skills() {
   // const vue = 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Font_Awesome_5_brands_vuejs.svg';

    return(
        <div className='skills-body'>
            <div className='skills'>
                <SkillContainer icon={react} title='React' />
                <SkillContainer icon={node} title='Node.js' />
                <SkillContainer icon={post} title='PostgreSQL' />
                <SkillContainer icon={api} title='RESTful API' />
                <SkillContainer icon={js} title='JavaScript' />
                <SkillContainer icon={html} title='HTML5' />
                <SkillContainer icon={css} title='CSS3' />
            </div>
        </div>
    )
}

export default Skills;