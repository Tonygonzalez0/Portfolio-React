import React from 'react';


const Hero = () =>{
    return(
        <div className="main--hero__style">
            <h1 className="main--text__style">Tony G</h1>
            <p className="sub--text__style">Web Developer | | Junior Developer</p>
            <img src={require("../Assets/img-tony.jpg")} alt="Tony Gonzalez" className="hero--img__style"/>

            <div className="main-icon__style">
                <a href="https://github.com/Tonygonzalez0" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a> 
                <a href="https://www.linkedin.com/in/tony-gonzalez-275323168/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin-in"></i> </a> 
            </div>
        </div>
    )
};

export default Hero;