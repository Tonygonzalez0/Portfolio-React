import React from 'react';
import ImageCard from './ImageCard';


const Projects = (props) =>{
    const imgCard = props.imgData.map(img =>{
        return (
            <ImageCard
            key = {img.imgId}
            imgLink = {img.imgLink}
            imgText = {img.imgText}
            imgSource = {img.imgSource}
            />
        )
    })

    return(
        <div className="project--container__style">
            <hr/>
            <h2 className="project--title__style">Projects I've Done</h2>
            <div className="row">
                {imgCard}
            </div>
        </div>
    )
};

export default Projects;