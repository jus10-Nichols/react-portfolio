import React from 'react';
import './About.css';
import ProfilePic from '../../assets/profilePic.png';

export default function About(){
    return(
        <div className ="aboutMe">
            <div className = "introBody">
            <div className = "profilePic">
            <img  alt= "myFace" className="circleImg" src={ProfilePic} />
            </div>
            <div className = "myBio">
                <div className ="bioHeader">
                <h2>About Me</h2>
                </div>
                <div className ="mySkills">
                <h4>Skills</h4><p><b>JavaScript, Python, Dart, C++, HTML, CSS, React, Redux, Node.js, Express, MySQL, SQLite3, MongoDB, Django, Flutter.</b></p>
                </div>
                <div className ="bio">
                    {/*RUN ON SENETENCE  */}
                <p><b>I am a Full-Stack Developer/ Software Engineer living in Minneapolis, MN. When I am not creating user interfaces, scheming up Schemas, or building out apis, I am usually trying to learn something new, hanging out with my dog Coco, or spending some quality time with my family and friends.</b></p>
                </div>
                <div className ="socialLinks">
                    <div className = "gitHub">
                    {/*Github Link with SVG and Label  */}
                    </div>
                    <div className="linkedIn">
                    {/*Linked in Link with SVG and Label  */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}