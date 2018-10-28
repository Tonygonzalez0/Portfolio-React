import React from 'react';
import ImageCard from './ImageCard';


const Projects = (props) =>{
    const imgCard = props.imgData.map(img =>{
        return (
            <div key={img.imgId}>
            <ImageCard
            imgLink = {img.imgLink}
            imgText = {img.imgText}
            imgSource = {img.imgSource}
            />
            </div>
        )
    })

    return(
        <div className="project--container__style">
            <hr/>
            <h2 className="project--title__style" id="project--tag">Projects I've Done</h2>
            {imgCard}
        </div>
    )
};

export default Projects;