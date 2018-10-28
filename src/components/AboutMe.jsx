import React from 'react';

const AboutMe = () =>{
    return(
        <div className="about--container__style">
            <hr/>
            <h2 className="about--title__style">More About Me</h2>
            <div className="seconday--container__style">
                <img src={require("../Assets/aboutme.jpg")} alt="Shows Tony G" className="about--img__style"/>
                <p className="about--text__style">Hi, I'm seeking a career in web development which will allow me to use my technical knowledge. I'm likewise looking for a fast-paced work atmosphere that will allow me to learn different skills every day.</p>
            </div>
        </div>
    )
};

export default AboutMe;