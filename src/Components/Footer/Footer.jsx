import React from 'react';
import Typed from "react-typed";
import './Footer.css'
export default function Footer(){
    return(
        <div className ='footer'>
            <div className = "container">

        <div className ="myName">
                <p><b><Typed
            strings={[
            "Full-Stack Developer",
            "Front-End Developer",
            "Back-End Developer",
            "Software Engineer",
            "Web Developer",
        ]}
        typeSpeed={33}
        backSpeed={60}
        loop
        /></b></p>
        </div>
                <div className = "myLocation">
                <p><span role='img' aria-label ='location'>📍</span> Living in <b>Minneapolis, MN.</b></p>
                </div>
                <div className ="contactMe">
                <p><b>YOU CAN REACH ME AT:</b></p>
			<span role='img' aria-label ='email'>✉️<a href="mailto: justin.g.nichols.93@gmail.com">justin.g.nichols.93@gmail.com</a></span> 
			<p><span role='img' aria-label ='phone'>☎️</span> (952) 270-9736</p>
                </div>
            </div>
        </div>
    )
}