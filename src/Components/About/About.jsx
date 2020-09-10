import React from 'react';
import './About.css';
import ProfilePic from '../../assets/profilePic.png';
import '../../App.css'
export default function About(){
    return(
        <div className ="aboutMe">
            <div className = "introBody">
            <div className = "profilePic">
            <img  alt= "A very cool developer" className="justinNichols" src={ProfilePic} />
            </div>
            <div className = "myBio">
                <div className ="bioHeader">
                <h2>About Me...</h2>
                </div>
                <div className ="mySkills">
                <h4>Tech Stack (so far)</h4>
                <p>JavaScript, Python, HTML, CSS, SQL, Dart, C++, React, Redux, Node.js, Express, PostgreSQL, Flutter, MongoDB. </p>
                </div>
                <div className ="bio">
                    {/*RUN ON SENETENCE  */}
                <p>I am a Full-Stack Developer/ Software Engineer living in Minneapolis, MN. When I am not creating user interfaces, scheming up Schemas, or building out APIs, I am usually trying to learn something new, hanging out with my dog Coco, or spending some quality time with my family and friends.
                I started learning HTML and CSS while in HighSchool. However, I enlisted in the United States Marine Corps after graduation and put my fascination with web development (temporarily) aside. My military service took me all over the world! I participated in several Humanitarian aid operations, joint training exercises, and 
                even did a stint as a radio operator for the commanding General of the Third Marine Division's Security Platoon.</p>
                <p>After my contract was up, I decided to attend college at the University of Houston. I wanted to pursue a degree in computer science, and a career in Software/Web Development. Unfortunately, no plan survives first contact. Due to financial needs, and admittedly a rough time trying to re-enter the civilian world I withdrew and focused on work full time.
                In 2019 while working as regional sales manager (MN, ND, SD, IA, WI) for a local home remodeling company I came across Lambda School. A nine month immersive learning program focused on full-stack Web Development, Computer, and Data Science. Having lost my passion for sales, I made a decision. I wanted to get back in the saddle, get into web development again, and change careers.</p>
                </div>
            </div>
            </div>
        </div>
    )
}