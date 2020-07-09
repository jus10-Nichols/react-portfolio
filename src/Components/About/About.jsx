import React from 'react';
import './About.css';
import ProfilePic from '../../assets/profilePic.png';

export default function About(){
    return(
        <div className ="aboutMe">
            <div className = "introBody">
            <div className = "profilePic">
            <img  alt= "myFace" class="circleImg" src={ProfilePic} />
            </div>
            <div className = "myBio">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus accusamus aperiam, autem facilis sed odio non magnam incidunt optio voluptatem quis, id sint ipsum. Consectetur veniam quos 
                    voluptatem laudantium quibusdam!</p>
            </div>
            </div>
        </div>
    )
}