import React from 'react';
import SkillCard from './SkillCard';

const Skills = (props) =>{

    const SkillCards = props.skillData.map(skill =>{
        return (
            <div key={skill.skillCardId}>
            <SkillCard
            skillCardText = {skill.skillCardText}
            skillImage = {skill.skillImage}
            />
            </div>
        )
    })

    return(
        <div className="skills--container__style">
            <hr/>
            <h2 className="main--text__style">My Skills</h2>
            {SkillCards}
        </div>
    )
};

export default Skills;