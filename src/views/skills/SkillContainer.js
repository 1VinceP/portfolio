import React from 'react';

export default function SkillContainer({ icon, title }) {

    return (
        <div>
            <img src={icon} alt='' />
            <p>{title}</p>
        </div>
    )
}