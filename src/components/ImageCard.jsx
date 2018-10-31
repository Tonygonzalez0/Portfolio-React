import React from 'react';


const ImageCard =(props)=>{
    return(
        <div className="row__content">
            <div className="image--container__style">
                <img src={props.imgSource} alt="Gataway Project" className="project--img__style"/>
                <p className="img--text__style">{props.imgText}</p>
                <a href={props.imgLink} className="img--link__style" target="_blank" rel="noopener noreferrer">Click Here!</a>
            </div>
        </div>
    )
};

export default ImageCard;