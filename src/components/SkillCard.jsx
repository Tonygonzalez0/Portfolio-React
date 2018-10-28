import React from 'react';

const SkillCard = (props) =>{
    return(
        <div className="skills--card__container">
            <div className="icon--container__style">
                <img src={props.skillImage} alt="Html icon" className="card--icon__stlye"/>  
            </div>
            <h3 className="card--text__style">{props.skillCardText}</h3>
        </div>
    )
};

export default SkillCard;